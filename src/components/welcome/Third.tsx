import { WelcomeCard } from './WelcomeCard';

export const Third = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(
          <svg>
            <use xlinkHref='#chart'> </use>
          </svg>),
          title:() => <h2>数据可视化<br />收支一目了然</h2>
        }}
      </WelcomeCard>
   )

   Third.displayName = "Third"