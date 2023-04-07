import { FunctionalComponent} from 'vue';
import s from "./WelcomeCard.module.scss"

export const WelcomeCard:FunctionalComponent = (props,context)=>{
  const {slots:{icon,title}} = context  
  return  (
   <div class={s.wrapper}>
     <div class={s.card}>
        {icon?.()}
        {title?.()}
     </div>
   </div>
  )
}
