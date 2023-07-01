import { defineComponent, PropType } from 'vue';
import s from './InputPad.module.scss';
import { Icon } from '../../shared/Icon';
export const InputPad = defineComponent({
 props: {
  name: {
   type: String as PropType<string>
  }
 },
 setup: (props, context) => {
  return () => (
   <div class={s.dateAndAmount}>
        <span class={s.date}>
            <Icon name='date' class={s.icon}></Icon>
            <span>日期</span>
        </span>
        <span>数据</span>
   </div>
  )
 }
})