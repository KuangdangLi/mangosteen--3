import icon from "../../assets/icons/alarm.svg"
import { WelcomeCard } from './WelcomeCard';

export const Second = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(<img src={icon} />),
          title:() => <h2>每日提醒<br />不遗漏每一笔账单</h2>
        }}
      </WelcomeCard>
   )

   Second.displayName = "Second"