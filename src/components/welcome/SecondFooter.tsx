import { WelcomeFooter } from "./WelcomeFooter"
import { RouterLink } from "vue-router"
import s from "./WelcomeFooter.module.scss"

export const SecondFooter = ()=>{
    return (
        <WelcomeFooter>
        {{
          buttons: ()=>(
            <>
            <RouterLink to="/start" class={s.fake}>跳过</RouterLink>
            <RouterLink to="/welcome/3">下一页</RouterLink>
            <RouterLink to="/start">跳过</RouterLink>
            </>
          )
        }}
      </WelcomeFooter>
    )
}

SecondFooter.displayName = "SecondFooter"