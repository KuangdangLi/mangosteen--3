import { ref } from "vue"

export const useBool = (initialValue:boolean)=>{
    const refBool = ref(initialValue)
    return {
        ref:refBool,
        toggle:()=> refBool.value = !refBool.value,
        on:()=> refBool.value = true,
        off:()=> refBool.value = false
    }
}