<script>
import { goto } from '$app/navigation';

    import { fade } from 'svelte/transition'
    import { currentListWMSCapability } from './../../store/store';
    export let wmsCapabilities
    export let capabilitiesUrl
    export let capabilitiesText
    export let tempoRequisicao = 0
    let qtdLayer = wmsCapabilities?wmsCapabilities.lenLayerObjects(): 0
    let metadadoText = ""
    let bgColor = 'bg-gray-200'
    let qtdCamadaSemMetadados = 0
    $: {
        if (!wmsCapabilities)
            bgColor =  'bg-red-200'
        else {
                       
            qtdLayer = wmsCapabilities.lenLayerObjects()
        }
    }
    
    function capabilitiesTextOrError() {
        return wmsCapabilities? capabilitiesText: `${capabilitiesText} - ERRO na requisição. Contate o responsável.`
    }

    function qtdCamada() {
        console.log(wmsCapabilities.lenLayerObjects())
        if (!wmsCapabilities)
            return 0
        return wmsCapabilities.lenLayerObjects()
        
    }
    function qtdCamadaSemMetadadosAssociado() {
        if (!wmsCapabilities)
            return 0
        let lenMetadadoLinks = wmsCapabilities.lenLayerObjectsWithoutMetadata()
        if(!lenMetadadoLinks)
            return 0 
        return  lenMetadadoLinks   
    }

    function qtdCamadaSemPalavraChave() {
        if (!wmsCapabilities)
            return 0
        let lenMetadadoLinks = wmsCapabilities.lenLayerObjectsWithoutKeyword()
        if(!lenMetadadoLinks)
            return 0 
        return  lenMetadadoLinks   
    }
    function linkClicked() {
        currentListWMSCapability.set(wmsCapabilities)
        goto("\wms-capabilities")
    }
    
</script>
<div class= "p-2 {bgColor} text-sm text-left text-gray-800  rounded-md shadow-sm hover:shadow-md flex flex-col "  transition:fade>
        <h2 class="font-semibold"> {capabilitiesTextOrError()}</h2>
        <h2> Tempo de requisição GetCapabilities: {tempoRequisicao} seg.</h2>
        <h2> Qtd de camadas: {qtdCamada()}</h2>
        <h2> Qtd de camadas sem metadado associado: {qtdCamadaSemMetadadosAssociado()}</h2>
        <h2> Qtd de camadas sem palavras chaves: {qtdCamadaSemPalavraChave()}</h2>
        <button class="text-green-600 text-left font-semibold hover:bg-gray-200 hover:underline py-1"  on:click={linkClicked}>Mais detalhes</button>
        <!--<a class="text-xs text-blue-500 underline underline-offset-4 uppercase" href="{metadadoAssociado()}">{metadadoText}</a>-->

</div>