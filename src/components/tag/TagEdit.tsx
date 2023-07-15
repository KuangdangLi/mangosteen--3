import { defineComponent, PropType } from 'vue';
import { MainLayout } from '../../layouts/MainLayout';
import { Icon } from '../../shared/Icon';
import { TagForm } from './TagForm';
import s from './Tag.module.scss' 
import { Button } from '../../shared/Button';
export const TagEdit = defineComponent({
 props: {
  name: {
   type: String as PropType<string>
  }
 },
 setup: (props, context) => {
  return () => (
   <MainLayout>
        {{
            title: ()=> '修改标签',
            icon:()=> <Icon name='menu' onClick={() => { }}></Icon>,
            default: ()=>(<>
                <TagForm />
                <div class={s.actions}>
                    <Button level='danger' class={s.removeTags} onClick={() => { }}>删除标签</Button>
                    <Button level='danger' class={s.removeTagsAndItems} onClick={() => { }}>删除标签和记账</Button>
                </div>
            </>
            )
        }}
   </MainLayout>
  )
 }
})