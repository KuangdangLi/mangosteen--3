import { defineComponent, PropType } from 'vue';
import s from './ItemPage.module.scss';
import { RouterView } from 'vue-router';
export const ItemPage = defineComponent({
 setup: (props, context) => {
  return () => (
    <RouterView />
  )
 }
})

export default ItemPage