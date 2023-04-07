import { WelcomeCard } from './WelcomeCard';

export const Forth = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(          
          <svg>
            <use xlinkHref='#cloud'> </use>
          </svg>),
          title:() => <h2>云备份<br />再也不怕数据丢失</h2>
        }}
      </WelcomeCard>
   )

   Forth.displayName = "Forth"