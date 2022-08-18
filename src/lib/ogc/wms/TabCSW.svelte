<script>
    import { InteractiveTabHead, TabContent} from 'flowbite-svelte';
    
    import CentralCSW from '$lib/ogc/csw/CentralCSW.svelte'
    let tab1 = { name: 'Busca simples', id: 1 };
    let tab2 = { name: 'Busca avançada', id: 2 };
    let tabhead = [tab1, tab2];
      
</script>
    
<InteractiveTabHead tabs={tabhead}>
    <TabContent tab={tab1}>
    <CentralCSW></CentralCSW>
    </TabContent>
    <TabContent tab={tab2}>
        
    </TabContent>
</InteractiveTabHead>