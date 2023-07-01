import { defineComponent, PropType, ref } from 'vue';
import s from './InputPad.module.scss';
import { Icon } from '../../shared/Icon';
import { DatetimePicker, Popup } from 'vant';
import { time } from '../../shared/time';
export const InputPad = defineComponent({
 props: {
  name: {
   type: String as PropType<string>
  }
 },
 setup: (props, context) => {
  const now = new Date()
  const refDate = ref<Date>(now)
  const refDatePickerVisible = ref(false)
  const showDatePicker = ()=> refDatePickerVisible.value = true
  const hideDatePicker = ()=> refDatePickerVisible.value = false
  const setDate = (date:Date)=> {refDate.value = date;hideDatePicker()} 
  return () => (
   <div class={s.dateAndAmount}>
        <span class={s.date}>
            <Icon name='date' class={s.icon}></Icon>
            <span>
            <span onClick={showDatePicker}>{time(refDate.value).format()}</span>
            <Popup position='bottom' v-model:show={refDatePickerVisible.value}>
              <DatetimePicker value={refDate.value} type="date" title="选择年月日"
                onConfirm={setDate} onCancel={hideDatePicker}
              />
            </Popup>
          </span>
        </span>
        <span>数据</span>
   </div>
  )
 }
})