import { Overlay } from "vant"
import { defineComponent, PropType, ref, reactive } from "vue"
import { Form, FormItem } from "../shared/Form"
import { OverlayIcon } from "../shared/Overlay"
import { Time } from "../shared/time"
import { MainLayout } from "./MainLayout"
import { Tab, Tabs } from "../shared/Tabs"
import  s  from "./TimeTabsLayout.module.scss";

const demo = defineComponent({
    props: {
      startDate: {
        type: String as PropType<string>,
        required: false
      },
      endDate: {
        type: String as PropType<string>,
        required: false
      },
    },
  })

export const TimeTabsLayout = defineComponent({
 props: {
  component: {
   type: Object as PropType<typeof demo>,
   required:true 
  },
  rerenderOnSwitchTab:{
    type: Boolean as PropType<boolean>,
    default:false
  },
  hideThisYear:{
    type: Boolean as PropType<boolean>,
    default:false
  }
 },
 setup: (props, context) => {
  const refSelected = ref('本月')
  const onSubmitCustomTime = (e: Event) => {
    e.preventDefault()
    refOverlayVisible.value = false
    Object.assign(customTime, tempTime)
  }
  const time = new Time()
  const tempTime = reactive({
    start: new Time().format(),
    end: new Time().format()
  })
  const customTime = reactive<{
    start?: string
    end?: string
  }>({})
  const timeList = [
    {start:time.firstDayOfMonth(),
     end:time.lastDayOfMonth().add(1,'day')   
    },
    {start:time.add(-1,'month').firstDayOfMonth(),
        end:time.add(-1,'month').lastDayOfMonth().add(1,'day')   
    },
    {start:time.firstDayOfYear(),
        end:time.lastDayOfYear().add(1,'day')   
    },
  ]
  const refOverlayVisible = ref(false)
  return () => (
   <MainLayout>
    {{
        title: ()=>'大米记账',
        icon:()=> <OverlayIcon></OverlayIcon>,
        default: ()=> (
            <>
              {props.hideThisYear ? 
                (<Tabs classPrefix='customTabs' 
                      v-model:selected={refSelected.value}
                      rerenderOnSelect={props.rerenderOnSwitchTab}
                      onUpdate:selected={(value:string)=> {value === '自定义时间' && (refOverlayVisible.value = true)}}>
                    <Tab value='本月' name='本月'>
                        <props.component 
                            startDate={timeList[0].start.format()} 
                            endDate={ timeList[0].end.format()}/>
                    </Tab>
                    <Tab value='上月' name='上月'>
                        <props.component
                            startDate={timeList[1].start.format()} 
                            endDate={timeList[1].end.format()}/>
                    </Tab>
                    <Tab value='自定义时间' name='自定义时间'>
                        <props.component 
                            startDate={customTime.start} 
                            endDate={customTime.end}/>
                    </Tab>
                </Tabs>) :
                <Tabs classPrefix='customTabs' 
                      v-model:selected={refSelected.value}
                      rerenderOnSelect={props.rerenderOnSwitchTab}
                      onUpdate:selected={(value:string)=> {value === '自定义时间' && (refOverlayVisible.value = true)}}>
                    <Tab value='本月' name='本月'>
                        <props.component 
                            startDate={timeList[0].start.format()} 
                            endDate={timeList[0].end.format()}/>
                    </Tab>
                    <Tab value='上月' name='上月'>
                        <props.component
                            startDate={timeList[1].start.format()} 
                            endDate={timeList[1].end.format()}/>
                    </Tab>
                    <Tab value='今年' name='今年'>
                        <props.component 
                            startDate={timeList[2].start.format()} 
                            endDate={timeList[2].end.format()}/>
                    </Tab>
                    <Tab value='自定义时间' name='自定义时间'>
                        <props.component 
                            startDate={customTime.start} 
                            endDate={new Time(customTime.end).add(1,'day').format()}/>
                    </Tab>
                </Tabs>
                }
                <Overlay show={refOverlayVisible.value} class={s.overlay}>
                    <div class={s.overlay_inner}>
                        <header>
                          请选择时间
                        </header>
                        <main>
                          <Form onSubmit={onSubmitCustomTime}>
                            <FormItem label='开始时间' v-model={tempTime.start} type='date' />
                            <FormItem label='结束时间' v-model={tempTime.end} type='date' />
                            <FormItem>
                                <div class={s.actions}>
                                    <button type="button">取消</button>
                                    <button type="submit">确认</button>
                                </div>
                            </FormItem>
                          </Form>
                        </main>
                    </div>
                </Overlay>
            </>
        )
    }}
   </MainLayout>
  )
 }
})