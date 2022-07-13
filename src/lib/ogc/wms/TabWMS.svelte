<script>
    import { InteractiveTabHead, TabContent, Card, Timeline, TimelineItem, } from 'flowbite-svelte';
    import WMSSearchByNTK from './WMSSearchByNTK.svelte'
    import BaseWMS from './BaseWMS.svelte'
    let tab1 = { name: 'Por instituição', id: 1 };
    let tab2 = { name: 'Por nome ou título ou palavra chave', id: 2 };
    let tabhead = [tab1, tab2];
      
</script>
    
<InteractiveTabHead tabs={tabhead}>
    <TabContent tab={tab1}>
    <BaseWMS>
        </BaseWMS>
    </TabContent>
    <TabContent tab={tab2}>
        <WMSSearchByNTK></WMSSearchByNTK>
    </TabContent>
</InteractiveTabHead>