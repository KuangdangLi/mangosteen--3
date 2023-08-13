import { WelcomeFooter } from "./WelcomeFooter"
import { RouterLink } from "vue-router"
import s from "./WelcomeFooter.module.scss"
import { SkipFeatures } from "../../shared/SkipFeatures"

export const ThirdFooter = ()=>{
    return (
        <WelcomeFooter>
        {{
          buttons: ()=>(
            <>
            <SkipFeatures class={s.fake}/>
            <RouterLink to="/welcome/4">下一页</RouterLink>
            <SkipFeatures />
            </>
          )
        }}
      </WelcomeFooter>
    )
}

ThirdFooter.displayName = "ThirdFooter"