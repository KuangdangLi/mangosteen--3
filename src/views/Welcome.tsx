import { Transition, VNode, defineComponent, ref } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import logo from '../assets/icons/mangosteen.svg'
import s from './Welcome.module.scss'

export const Welcome = defineComponent({
 setup: (props, context) => {
  return () => (
    <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <h1>山竹记账</h1>
        </header>
        <main>
        <RouterView name="main">
          {({Component:Content,route:R}:{Component:VNode,route:RouteLocationNormalizedLoaded})=>
            {
             return (
              <Transition 
              enterActiveClass={s.slide_fade_enter_active}
              enterFromClass={s.slide_fade_enter_from}
              leaveActiveClass={s.slide_fade_leave_active}
              leaveToClass={s.slide_fade_leave_to}
              >
              {Content}
              </Transition>
            )}
          }
        </RouterView>
        </main>
        <footer>
        <RouterView name="footer"></RouterView>
        </footer>
   </div>
  )
 }
})