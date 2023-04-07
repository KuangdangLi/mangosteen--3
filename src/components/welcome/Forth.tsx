import { RouterLink } from 'vue-router';
import icon from "../../assets/icons/cloud.svg"
import s from "./WelcomeCard.module.scss"
import { WelcomeCard } from './WelcomeCard';

export const Forth = ()=> (
      <WelcomeCard>
        {{
          icon: ()=>(<img src={icon} />),
          title:() => <h2>云备份<br />再也不怕数据丢失</h2>
        }}
      </WelcomeCard>
   )

   Forth.displayName = "Forth"