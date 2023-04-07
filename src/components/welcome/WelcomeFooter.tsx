import { FunctionalComponent } from "vue"
import s from "./WelcomeFooter.module.scss"

export const WelcomeFooter:FunctionalComponent = (props,context)=>{
    const {buttons} = context.slots
    return (
        <div class={s.wrapper}>
        <div class={s.actions}>
            {buttons?.()}
        </div>
        </div>
    )
}