import { defineComponent, PropType } from 'vue';
import s from './Center.module.scss';
export const Center = defineComponent({
 props: {
  direction: {
   type: String as PropType<'horizontal' | 'vertical'>
  }
 },
 setup: (props, context) => {
    const extraClass = props.direction || 'horizontal'
  return () => (
   <div class={[s.center , extraClass === 'horizontal'? s.horizontal : s.vertical ]}>
    {context.slots.default?.()}
   </div>
  )
 }
})