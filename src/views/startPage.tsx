import { defineComponent } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import { Center } from '../shared/Center';
import { Icon } from '../shared/Icon';
import s from './startPage.module.scss';

export const startPage = defineComponent({
 setup: (props, context) => {
    const onClick = ()=>{
        console.log('hi');
        
    }
  return () => (
    <div>
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