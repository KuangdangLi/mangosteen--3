import { defineComponent, PropType, ref } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import s from './ItemCreate.module.scss';
import { Tab, Tabs } from '../../shared/Tabs';
export const ItemCreate = defineComponent({
 props: {
  name: {
   type: String as PropType<string>
  }
 },
 setup: (props, context) => {
  const refKind = ref('支出')
  const onUpdateSelected = (name:string)=> {console.log(name);
   refKind.value = name}  
  return () => (
    <MainLayout>{{
        title:()=>'记一笔',
        icon:()=> <Icon name="left" class={s.navIcon}/>,
        default:()=> (
            <Tabs v-model:selected={refKind.value}>
                <Tab name='支出'>
                    支出icon列表
                </Tab>
                <Tab name='收入'>
                    收入icon列表
                </Tab>        
            </Tabs>
        )
    }}</MainLayout>
  )
 }
})