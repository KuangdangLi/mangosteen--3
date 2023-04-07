import { WelcomeCard } from './WelcomeCard';

export const Second = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(          
          <svg>
            <use xlinkHref='#alarm'> </use>
          </svg>),
          title:() => <h2>每日提醒<br />不遗漏每一笔账单</h2>
        }}
      </WelcomeCard>
   )

   Second.displayName = "Second"