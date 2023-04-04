import { RouterLink } from 'vue-router';
import icon from "../../assets/icons/cloud.svg"
import s from "./WelcomeLayout.module.scss"
import { WelcomeLayout } from './WelcomeLayout';

export const Forth = ()=> (
      <WelcomeLayout>
        {{
          icon: ()=>(<img src={icon} />),
          title:() => <h2>云备份<br />再也不怕数据丢失</h2>,
          buttons: ()=>(
            <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/start">完成</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
            </>
          )
        }}
      </WelcomeLayout>
   )

   Forth.displayName = "Forth"