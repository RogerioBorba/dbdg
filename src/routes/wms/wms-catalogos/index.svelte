<script lang="ts">
    import {catalogos_servicos} from '$lib/inde/CatalogoINDE'
    import Navbar from '$lib/components/base/navbar.svelte'
    import {getWMSCapabilitiesObject} from '$lib/ogc/wms/WMSCapabilitiesObject'
    import WMSCapabilitiesCard from '$lib/ogc/wms/WMSCapabilitiesCard.svelte';
    let objIdTextIRICapabilitiesArray = []
    let selectedItems = []
    let promise = null
    let qtdNo = 0
    let countNo = 0
    let qtdToTalCamadas = 0
    let qtdToTalCamadasSemMetadados = 0
    let checked = false
    let i = 1
    let instituicaoText = ''
    let tempoRequisicao
    let nameCatalog = ''
    let adressCatalog =''
    let objIdTextIRIArray = catalogos_servicos.map( (obj) => newObjIdTextIRI(obj))
    let disableAddNewCatalog = true
        
    const addNewCatalog = () => {
        let objIdTextIRI = {id: objIdTextIRIArray.length + 1, text: nameCatalog, iri: adressCatalog}
        objIdTextIRIArray = [...objIdTextIRIArray, objIdTextIRI]
        nameCatalog = ''
        adressCatalog = ''
    }

    function newObjIdTextIRI(obj) {
        return { id: i++, text: obj.descricao, iri: obj.wmsGetCapabilities }
    }
    
    function isChecking() {
        console.log(`valor: ${checked} `)
        if (!checked) 
            selectedItems = [...objIdTextIRIArray]
        else {
            qtdNo = 0
            countNo = 0
            qtdToTalCamadas = 0
            i = 1
            selectedItems =[]
        }
        checked = !checked
    }
    $: {
        
        qtdNo = selectedItems.length
        if (countNo >= 0 && qtdNo > 0 && countNo != qtdNo) {
            if (selectedItems[countNo])
                instituicaoText = selectedItems[countNo].text
        } else if (countNo == qtdNo) {
            instituicaoText = ''
            
        }      
    }
    
    $: disableButtonAddNewCatalog = !((nameCatalog.length != 0) && (adressCatalog.length != 0))

    async function btnSearchClicked() {
        if (selectedItems.length == 0)
            return alert( 'Escolha pelo menos uma instituição')
        
        for await (const idTextIRI of selectedItems) {
            let tempo = new Date().getTime();
            let capa = await getWMSCapabilitiesObject(idTextIRI) 
            tempoRequisicao = parseFloat(((new Date().getTime()) - tempo)/1000).toFixed(2)
            if (capa && capa.lenLayerObjects())  
                qtdToTalCamadas = qtdToTalCamadas + capa.lenLayerObjects()
            if (capa && capa.lenLayerObjectsWithoutMetadata())
                qtdToTalCamadasSemMetadados = qtdToTalCamadasSemMetadados + capa.lenLayerObjectsWithoutMetadata()
                //console.log(capa)
            let objIdTextIRICapability = {id: idTextIRI.id, text: idTextIRI.text, iri: idTextIRI, capabilities: capa, tempoRequisicao }
            let filteredArray = objIdTextIRICapabilitiesArray.filter(objIdTextIRI => { return objIdTextIRI.id == idTextIRI.id})
           
            if (filteredArray.length == 0) {
                objIdTextIRICapabilitiesArray= [...objIdTextIRICapabilitiesArray, objIdTextIRICapability]
                countNo = countNo + 1
            }   
        }  
    }
</script>
<Navbar brand="OGC/WMS Checker"></Navbar>
<form class="m-2">
    <div class="flex items-center flex-col sm:flex-row mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">
        <label for="instituicoes_multiple" class="mr-4">Escolha as instituições</label>
        <div>
            <input class="mr-1 rounded w-4 h-4 focus:outline-none border-gray-300" type="checkbox" {checked} on:click={isChecking}> 
            <span class="mr-2">selecione todos</span>
        </div>
        <button class="mr-4 focus:outline-none bg-grey-light hover:bg-grey font-bold rounded inline-flex items-center hover:bg-gray-100" on:click|preventDefault={btnSearchClicked} title="Realizar requisição">
            <svg  class="text-indigo-500 fill-current border rounded border-gray-400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="20" height="20" color='green' viewBox="0 0 24 24"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" /></svg>
        </button>
        <p class="mr-2 text-sm">{countNo}/{qtdNo}</p>
        <p class = "text-sm text-center text-blue-600 animate-pulse">{instituicaoText}</p>
        <p class="ml-auto text-sm ">Qtd de camadas sem metadados: {qtdToTalCamadasSemMetadados}</p>
        <p class="ml-auto text-sm ">Qtd de camadas: {qtdToTalCamadas}</p>
    </div>
    <select size=6 multiple id="instituicoes_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" bind:value={selectedItems}>
        {#each objIdTextIRIArray as obj}
            
            <option value={obj}>
                {obj.text}
            </option>
        {/each}
    </select>
    <div class="mt-2 w-full p1 flex flex-col md:flex-row">
        <input class="border-gray-300 focus:outline-none w-full rounded md:w-2/5 mr-1" type="text"  bind:value={nameCatalog} placeholder="Informe o nome do catálogo"> 
        <input class="border-gray-300 focus:outline-none rounded w-full md:w-2/5 mr-1" type="text"  bind:value={adressCatalog} placeholder="Informe o endereço WMS do GetCapabilities"> 
        <button class=" md:w-1/5 shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 disabled:opacity-25" on:click|preventDefault={addNewCatalog} disabled={disableButtonAddNewCatalog}>Adicionar novo catálogo</button>
    </div>
</form>
<div class = "m-2 grid gap-2 md:grid-cols-3 grid-cols-1">
     
        {#each objIdTextIRICapabilitiesArray as wmsCapa}
            <WMSCapabilitiesCard wmsCapabilities={wmsCapa.capabilities} capabilitiesUrl= {wmsCapa.iri} capabilitiesText={wmsCapa.text} tempoRequisicao={wmsCapa.tempoRequisicao}></WMSCapabilitiesCard>
        {/each}    


</div>