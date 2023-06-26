import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import { Center } from '../shared/Center';
import { Icon } from '../shared/Icon';
import s from './StartPage.module.scss';
import { Overlay } from '../shared/Overlay';
import { RouterLink } from 'vue-router';
import { MainLayout } from '../layouts/MainLayout';

export const StartPage = defineComponent({ 
 setup: (props, context) => {
    const refOverlayVisible = ref(false)
    const onClickMenu = ()=>{
      refOverlayVisible.value = !refOverlayVisible.value
    }
  return () => (
    <div>
      <MainLayout>{
        {
          title:()=>'山竹记账',
          icon:()=><Icon name="menu" class={s.navIcon} onClick={onClickMenu}></Icon>,
          default:()=>(
            <>
                <Center class={s.pig_wrapper}>
                  <Icon name='pig' class={s.pig}></Icon>
                </Center>
                <div class={s.button_wrapper}>
                      <RouterLink to="/items/create">
                        <Button class={s.button}>test</Button>
                      </RouterLink>
                </div>
                <RouterLink to="/items/create">
                  <FloatButton iconName="add"></FloatButton>
                </RouterLink>
                {
                refOverlayVisible.value && 
                <Overlay onClose={()=>refOverlayVisible.value=false}/>
                }
            </>
      )
        }
      }</MainLayout>
    </div>
  )
 }
})