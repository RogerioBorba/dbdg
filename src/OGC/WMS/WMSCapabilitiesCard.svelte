<script>
    import { fade } from 'svelte/transition'
    export let wmsCapabilities
    export let capabilitiesUrl
    export let capabilitiesText
    export let tempoRequisicao = 0
    let qtdLayer = 0
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

    function qtdCamadaSemMetadadosAssociado() {
        if (!wmsCapabilities)
            return 0
        let lenMetadadoLinks = wmsCapabilities.lenLayerObjectsWithoutMetadata()
        if(!lenMetadadoLinks)
            return 0 
        return  lenMetadadoLinks   
    }
    
</script>
<a class= "p-2 {bgColor} text-gray-800  rounded-md shadow-sm hover:shadow-md flex flex-col " href="#" transition:fade>
    <div class="text-sm text-left">
        <h2 class="font-semibold"> {capabilitiesTextOrError()}</h2>
        <h2> Tempo de requisição GetCapabilities: {tempoRequisicao} seg.</h2>
        <h2>Qtd de camadas: {qtdLayer}</h2>
        <h2> Qtd de camadas sem metadado associado: {qtdCamadaSemMetadadosAssociado()}</h2>
        <!--<a class="text-xs text-blue-500 underline underline-offset-4 uppercase" href="{metadadoAssociado()}">{metadadoText}</a>-->
</div>
</a>