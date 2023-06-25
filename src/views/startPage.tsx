import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import { Center } from '../shared/Center';
import { Icon } from '../shared/Icon';
import s from './startPage.module.scss';
import { Navbar } from '../shared/Navbar';

export const startPage = defineComponent({
 setup: (props, context) => {
    const onClick = ()=>{
        console.log('hi');
        
    }
  return () => (
    <div>
      <Navbar>{
        {
          default:()=>'山竹记账',
          icon:()=><Icon name="menu" class={s.navIcon}></Icon>
        }
        }</Navbar>
      <Center class={s.pig_wrapper}>
        <Icon name='pig' class={s.pig}></Icon>
      </Center>
    <div class={s.button_wrapper}>
        <Button class={s.button} onClick={onClick}>test</Button>
   </div>
    <FloatButton iconName="add"></FloatButton>
    </div>
  )
 }
})