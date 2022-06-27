<script>
    import { fade } from 'svelte/transition'
    export let wmsCapabilities
    export let capabilitiesUrl
    export let capabilitiesText
    let qtdLayer = 0
    let metadadoText = ""
    let bgColor = 'bg-gray-200'
    $: {
        if (!wmsCapabilities)
            bgColor =  'bg-red-200'
        else {
                       
            qtdLayer = wmsCapabilities.lenLayerObjects()
        }
    }
    
    
</script>
<a class= "p-2 {bgColor} text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href="#" transition:fade>
    <div class="text-sm text-left">
        <h2>instituição: {capabilitiesText}</h2>
        <h2>Qtd de camadas: {qtdLayer}</h2>
        <!--<a class="text-xs text-blue-500 underline underline-offset-4 uppercase" href="{metadadoAssociado()}">{metadadoText}</a>-->
</div>
</a>