import icon from "../../assets/icons/pig.svg"
import { WelcomeCard } from "./WelcomeCard"

export const First = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(<img src={icon} />),
          title:()=>(<h2>会挣钱<br/>还要会省钱</h2>)
        }}
      </WelcomeCard>
   )

   First.displayName = "First"