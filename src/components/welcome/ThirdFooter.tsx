import { WelcomeFooter } from "./WelcomeFooter"
import { RouterLink } from "vue-router"
import s from "./WelcomeFooter.module.scss"

export const ThirdFooter = ()=>{
    return (
        <WelcomeFooter>
        {{
          buttons: ()=>(
            <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
            </>
          )
        }}
      </WelcomeFooter>
    )
}

ThirdFooter.displayName = "ThirdFooter"