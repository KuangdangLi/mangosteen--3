import { Foo } from "../views/Foo"
import { Bar } from "../views/Bar"
import { Welcome } from "../views/Welcome"
import { First } from "../components/welcome/First"
import { Second } from "../components/welcome/Second"
import { Third } from "../components/welcome/Third"
import { Forth } from "../components/welcome/Forth"
import { FirstFooter } from "../components/welcome/FirstFooter"
import { SecondFooter } from "../components/welcome/SecondFooter"
import { ThirdFooter } from "../components/welcome/ThirdFooter"
import { ForthFooter } from "../components/welcome/ForthFooter"
import { StartPage } from "../views/StartPage"
import { ItemPage } from "../views/ItemPage"
import { ItemList } from "../components/item/ItemList"
import { ItemCreate } from "../components/item/ItemCreate"
import { TagPage } from "../views/TagPage"
import { TagCreate } from "../components/tag/TagCreate"
import { TagEdit } from "../components/tag/TagEdit"
import { SignInPage } from "../views/SignInPage"



export const routes = [
    {path:'/',redirect:'/welcome'},
    {path:'/welcome',component:Welcome,children:[
        {path:'',redirect:'/welcome/1'},
        {path:'1',name:"Welcome1",components:{main:First,footer:FirstFooter}},
        {path:'2',name:"Welcome2",components:{main:Second,footer:SecondFooter}},
        {path:'3',name:"Welcome3",components:{main:Third,footer:ThirdFooter}},
        {path:'4',name:"Welcome4",components:{main:Forth,footer:ForthFooter}},

    ]},
    {path:'/start',component:StartPage},
    {path:'/items',component:ItemPage,
     children:[
        {path:'',component:ItemList},
        {path:'create',component:ItemCreate}
    ]},
    {path:'/tags',component:TagPage,children:[
        {path:'create',component:TagCreate},
        {path:':id/edit',component:TagEdit}
    ]},
    {
        path:'/sign_in',component:SignInPage
    }
]