import { computed, defineComponent, PropType } from 'vue';
import s from './Form.module.scss';
import { EmojiSelect } from './EmojiSelect';
export const Form = defineComponent({
 props: {
  onSubmit: {
   type: Function as PropType<(e:Event)=>void>
  }
 },
 setup: (props, context) => {
  return () => (
   <form onSubmit={props.onSubmit} class={s.form}>
        {context.slots.default?.()}
   </form>
  )
 }
})

export const FormItem = defineComponent({
    props:{
        label:{
            type: String 
        },
        modelValue:{
            type: [String,Number]
        },
        type:{
            type:String as PropType<'text' | 'emojiSelect' | 'date'>
        },
        error:{
            type:String
        }
    },
    setup:(props,context)=>{
        const content = computed(()=>{
            switch (props.type) {
                case 'text':
                  return <input 
                    value={props.modelValue}
                    onInput={(e:any)=>context.emit('update:modelValue',e.target.value)} 
                    class={[s.formItem,s.input,s.error]}/>
                case 'emojiSelect':
                  return <EmojiSelect 
                    modelValue={props.modelValue?.toString()}
                    onUpdateModelValue={(value)=>context.emit('update:modelValue',value)} 
                    class={[s.formItem,s.emojiList,s.error]}
                    />
                case 'date':
                    return <input />
                case undefined:
                    return context.slots.default?.()
            }
        })
        return () => {
            return <div class={s.formRow}>
              <label class={s.formLabel}>
                {props.label &&
                  <span class={s.formItem_name}>{props.label}</span>
                }
                <div class={s.formItem_value}>
                  {content.value}
                </div>
                {props.error &&
                  <div class={s.formItem_errorHint}>
                    <span>{props.error}</span>
                  </div>
                }
              </label>
            </div>
          }
    }
})