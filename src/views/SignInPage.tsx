import { defineComponent, PropType, reactive, ref } from 'vue';
import { MainLayout } from '../layouts/MainLayout';
import { Button } from '../shared/Button';
import { Form, FormItem } from '../shared/Form';
import { Icon } from '../shared/Icon';
import { hasError, validate } from '../shared/validate';
import s from './SignInPage.module.scss';
import { http } from '../shared/Http';
import { useBool } from '../hooks/useBool';
import { useRoute, useRouter } from 'vue-router';
export const SignInPage = defineComponent({
  setup: (props, context) => {
    const formData = reactive({
      email: '1120831164@qq.com',
      code: ''
    })
    const errors = reactive({
      email: [],
      code: []
    })
    const route = useRoute()
    const router = useRouter()
    const onSubmit = async (e: Event) => {
      e.preventDefault()
      Object.assign(errors, {
        email: [], code: []
      })
      Object.assign(errors, validate(formData, [
        { key: 'email', type: 'required', message: '必填' },
        { key: 'email', type: 'pattern', regex: /.+@.+/, message: '必须是邮箱地址' },
        { key: 'code', type: 'required', message: '必填' },
      ]))
      if(!hasError(errors)){
        const response = await http.post<{jwt:string}>('/session',formData)
              .catch(onError)
        localStorage.setItem('jwt',response.data.jwt)
        const returnTo = route.query.return_to?.toString()
        router.push(returnTo || '/')
      }
    }
    const refValidationCode = ref<any>()
    const {ref:refDisabled,toggle,on:disabled,off:enable} = useBool(false)
    const onError = (error:any)=>{
      if(error.response.status === 422){
        Object.assign(errors,error.response.data.errors)
      }
      throw error
    }
    const onClickSendValidationCode = async ()=>{
      disabled()
      const response = await http.post('/validation_codes',{email:formData.email})
      .catch(onError)//失败
      .finally(enable)
      //成功      
      refValidationCode.value.startCount()
    }
    return () => (
      <MainLayout>{
        {
          title: () => '登录',
          icon: () => <Icon name="left" />,
          default: () => (
            <div class={s.wrapper}>
              <div class={s.logo}>
                <Icon class={s.icon} name="mangosteen" />
                <h1 class={s.appName}>山竹记账</h1>
              </div>
              <div>{JSON.stringify(formData)}</div>
              <Form onSubmit={onSubmit}>
                <FormItem label="邮箱地址" type="text"
                  placeholder='请输入邮箱，然后点击发送验证码'
                  v-model={formData.email} error={errors.email?.[0]} />
                <FormItem ref={refValidationCode} label="验证码" type="validationCode"
                  placeholder='请输入六位数字'
                  countFrom={1}
                  disabled = {refDisabled.value}
                  onClick={onClickSendValidationCode}
                  v-model={formData.code} error={errors.code?.[0]} />
                <FormItem style={{ paddingTop: '96px' }}>
                  <Button type='submit'>登录</Button>
                </FormItem>
              </Form>
            </div>
          )
        }
      }</MainLayout>
    )
  }
})