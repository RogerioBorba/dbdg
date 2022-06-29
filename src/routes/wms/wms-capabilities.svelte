<script lang="ts">
    import {currentListWMSCapability} from './../../store/store'
    import WMSLayerCard from './../../OGC/WMS/WMSLayerCard.svelte'
    import {WMSLayer} from './../../OGC/WMS/WMSLayer'
    import { onMount } from 'svelte';
    let wmsLayers = []
    let textEntered = null
    let filteredWMSLayers = []
    
    onMount(async () => {
        let current = await $currentListWMSCapability
        let i = 1
        let layerObjects = await current.layerObjects()
        wmsLayers = await layerObjects.map( each => {return new WMSLayer(each, i++ , null)})
        console.log(`wmsLyer::::: ${wmsLayers[0].title()}`)
        filteredWMSLayers = await wmsLayers
    })
     

    $: {
        
        if (textEntered && textEntered.length >= 3) {
            filteredWMSLayers = wmsLayers.filter(e => (e.title().toLowerCase().search(textEntered.toLowerCase()) > -1) || (e.name().toLowerCase().search(textEntered.toLowerCase()) > -1))
            console.log(filteredWMSLayers)
            //console.log(wmsLayers.filter(filterWMSLayer))
            
            
            
            
        }
        else {
            
            filteredWMSLayers = [...wmsLayers]
        }
    }
</script>
<input class= "m-2" type="text" bind:value={textEntered} placeholder="Digite para filtrar">
<div class = "m-2 grid gap-2 md:grid-cols-3 grid-cols-1">
     
    {#each filteredWMSLayers as wmsLayer, i}
        <WMSLayerCard wmsLayer={wmsLayer}></WMSLayerCard>
    {/each}    


</div>
