import { RouterLink } from 'vue-router';
import icon from "../../assets/icons/pig.svg"
import s from "./WelcomeLayout.module.scss"
import { WelcomeLayout } from './WelcomeLayout';

export const First = ()=> (
      <WelcomeLayout>
        {{
          icon: ()=>(<img src={icon} />),
          title:()=>(<h2>会挣钱<br/>还要会省钱</h2>),
          buttons: ()=>(
            <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/welcome/2">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
            </>
          )
        }}
      </WelcomeLayout>
   )

   First.displayName = "First"