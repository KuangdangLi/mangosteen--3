import { RouterLink } from 'vue-router';
import icon from "../../assets/icons/chart.svg"
import s from "./WelcomeCard.module.scss"
import { WelcomeCard } from './WelcomeCard';

export const Third = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(<img src={icon} />),
          title:() => <h2>数据可视化<br />收支一目了然</h2>
        }}
      </WelcomeCard>
   )

   Third.displayName = "Third"