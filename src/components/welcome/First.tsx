import { WelcomeCard } from "./WelcomeCard"

export const First = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(         
          <svg>
            <use xlinkHref='#check'> </use>
          </svg>),
          title:()=>(<h2>会挣钱<br/>还要会省钱</h2>)
        }}
      </WelcomeCard>
   )

   First.displayName = "First"