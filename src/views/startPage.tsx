import { defineComponent, ref } from 'vue';
import { Button } from '../shared/Button';
import { FloatButton } from '../shared/FloatButton';
import { Center } from '../shared/Center';
import { Icon } from '../shared/Icon';
import s from './StartPage.module.scss';
import { OverlayIcon } from '../shared/Overlay';
import { RouterLink } from 'vue-router';
import { MainLayout } from '../layouts/MainLayout';

export const StartPage = defineComponent({ 
 setup: (props, context) => {
  return () => (
    <div>
      <MainLayout>{
        {
          title:()=>'山竹记账',
          icon:()=> <OverlayIcon />,
          default:()=>(
            <>
                <Center class={s.pig_wrapper}>
                  <Icon name='pig' class={s.pig}></Icon>
                </Center>
                <div class={s.button_wrapper}>
                      <RouterLink to="/items/create">
                        <Button class={s.button}>test</Button>
                      </RouterLink>
                </div>
                <RouterLink to="/items/create">
                  <FloatButton iconName="add"></FloatButton>
                </RouterLink>
            </>
      )
        }
      }</MainLayout>
    </div>
  )
 }
})