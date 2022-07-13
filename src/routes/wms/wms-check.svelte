<script lang="ts">
    import { each } from 'svelte/internal';
    import { textXml2Json} from '../../lib/xml_json/xml2Json'
    import Navbar from '../../lib/components/base/navbar.svelte'
    import WMSLayerCard from '../../lib/ogc/wms/WMSLayerCard.svelte' 
    import {catalogos_servicos} from '../../lib/inde/CatalogoINDE'
    import {WMSCapabilities} from '../../lib/ogc/wms/WMSCapabilities'
    import {WMSLayer} from '../../lib/ogc/wms/WMSLayer'
    let selected = { id: 1, text: "Selecione um", iri: '' }
    let i = 1
    let idTextIRIArray = [selected ].concat(catalogos_servicos.map( (obj) =>  newObjIdTextIRI(obj)))
    let wms_capabilities
    let wmsLayers = []  
    let promise = null  
    let wmsLayersFiltered = []
    let textEntered = ''
    
    $ : {
        
        if (textEntered && textEntered.length >= 3) {
            wmsLayersFiltered = wmsLayers.filter(
                wms_layer => wms_layer.title().toLowerCase().includes(textEntered.toLowerCase()))
        }
        else {
            wmsLayersFiltered = [...wmsLayers]
        }
    }
    
    function newObjIdTextIRI(obj) {
        return { id: i++, text: obj.descricao, iri: obj.wmsGetCapabilities }
    }
    
    async function wmsCapabilities(textXML) {
        wms_capabilities =  new WMSCapabilities(await textXml2Json(textXML))
        let layers = await wms_capabilities.layerObjects()
        console.log(wms_capabilities)
        let i = 1
        wmsLayers = layers.map(layer => new WMSLayer(layer, i++, null))
        //console.log(wmsLayers)
        return 1
    }

    async function btnSearchClicked() {
        if (selected.iri.length == 0)
            return alert("Selecione um catálogo")
        console.log(selected.iri)
        try {
            //let headers = new Headers({"Content-type": "application/xml"})
            //let configFetch =  { method: "GET", mode: 'cors', cache: 'default', headers: headers}
            let res = await fetch(selected.iri, /*configFetch*/)
            if(res.ok) {
                wmsCapabilities(await res.text())
            } else {
                console.log('Network response was not ok.');
            }                    
            
        } catch (error) {
            console.log('There has been a problem with your fetch operation in client browser: ' + error.message)
            try {
                let res = await fetch(`/api/wms/?url=${selected.iri}`)
                if (!res) {
                    console.log('Network response was not ok.');
                    return alert('Network response was not ok.')
                }
                wmsCapabilities(await res.text())
            } catch (error) {
                console.log('Error in request.');
                console.log(error);
                alert('Error in request.')
            }
        }            
    }

</script>
<div class="h-screen bg-gray-100">
    <Navbar></Navbar>
    <div class="p-1">
        <form class="m-auto m-1">
            <div class="p-1 flex items-center space-x-1 border-2 border-blue-500">
                <select class="w-full border-2 border-r-blue-500" bind:value={selected}>
                    {#each idTextIRIArray as obj}
                        <option value={obj}>
                            {obj.text}
                        </option>
                    {/each}    
                </select>
                
                <button class=" bg-grey-light hover:bg-grey text-grey-darkest font-bold rounded p-2 items-center hover:bg-gray-100 " on:click|preventDefault={btnSearchClicked} title="Requisitar">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="16" height="16" viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
                </button>
                
            </div>
            <input class="mt-2 w-full p-2 border-2 border-blue-500" type="text" bind:value={selected.iri} placeholder="Escolha ou digite um endereço getCapabilities">
            
        </form>
        <input class="mt-1 w-full h-8 pl-3 pr-8 text-base placeholder-gray-600 border rounded-lg focus: outline-none" hidden={wmsLayers.length == 0 ?true:false} type="text" placeholder="Digite para filtrar" bind:value={textEntered} title="Filtro">
        <div class = "mt-2 grid gap-2 md:grid-cols-2 grid-cols-1">
            {#await promise}
            <p class = "text-xl text-center text-blue-600 animate-pulse">...aguarde</p>
            {:then layers}
                
                {#each wmsLayersFiltered as layer}
                    <WMSLayerCard wmsLayer={layer} capabilitiesUrl= {selected.iri}></WMSLayerCard>
                {/each}    
                {:catch error}
                <p class="text-red-500 text-xl ">{error.message}</p>
            {/await} 
        </div>
    </div>
</div>


