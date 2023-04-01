import { Foo } from "../components/Foo"
import { Bar } from "../components/Bar"
import { Welcome } from "../views/Welcome"
import { First } from "../components/First"
import { Second } from "../components/Second"
import { Third } from "../components/Third"
import { Forth } from "../components/Forth"

export const routes = [
    {path:'/',component:Foo},
    {path:'/about',component:Bar},
    {path:'/welcome',component:Welcome,children:[
        {path:'1',component:First},
        {path:'2',component:Second},
        {path:'3',component:Third},
        {path:'4',component:Forth},

    ]},

]