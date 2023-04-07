import { Transition, VNode, defineComponent, onMounted, ref, watch, watchEffect } from 'vue';
import { RouteLocationNormalizedLoaded, RouterView } from 'vue-router';
import s from './Welcome.module.scss'
import { useSwipe } from '../hooks/useSwipe';

export const Welcome = defineComponent({
 setup: (props, context) => {
  const main = ref<HTMLElement | null>(null)
  const {swiping,direction,distance} = useSwipe(main)
  watchEffect(() => {
    console.log(swiping.value, direction.value)
  })
  return () => (
    <div class={s.wrapper}>
        <header>
          <svg>
            <use xlinkHref='#mangosteen'> </use>
          </svg>
          <h1>山竹记账</h1>
        </header>
        <main ref={main}>
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
