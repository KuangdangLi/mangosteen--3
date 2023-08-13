import { WelcomeFooter } from "./WelcomeFooter"
import { RouterLink } from "vue-router"
import s from "./WelcomeFooter.module.scss"
import { SkipFeatures } from "../../shared/SkipFeatures"

export const ForthFooter = ()=>{
  const onClick = ()=>{
    localStorage.setItem('skipFeatures','yes')
  }
    return (
        <WelcomeFooter>
        {{
          buttons: ()=>(
            <>
            <SkipFeatures class={s.fake}/>
            <span onClick={onClick}>
            <RouterLink to="/start">完成</RouterLink>
            </span>
            <SkipFeatures />
            </>
          )
        }}
      </WelcomeFooter>
    )
}

ForthFooter.displayName = "ForthFooter"