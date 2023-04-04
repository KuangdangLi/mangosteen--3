import { RouterLink } from 'vue-router';
import icon from "../../assets/icons/chart.svg"
import s from "./WelcomeLayout.module.scss"
import { WelcomeLayout } from './WelcomeLayout';

export const Third = ()=> (
      <WelcomeLayout>
        {{
          icon: ()=>(<img src={icon} />),
          title:() => <h2>数据可视化<br />收支一目了然</h2>,
          buttons: ()=>(
            <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
            </>
          )
        }}
      </WelcomeLayout>
   )

   Third.displayName = "Third"