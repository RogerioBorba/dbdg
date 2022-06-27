<script>
    import { fade } from 'svelte/transition'
    import { WMSLayer } from './WMSLayer';
    export let wmsLayer = new WMSLayer()
    export let capabilitiesUrl
    let metadadoText = ""
    function metadadoAssociado() {
        return  wmsLayer.metadataURL()?wmsLayer.metadataURL().link(): '#'
    }
    $: {
        metadadoText = wmsLayer.metadataURL()? 'link metadado': ' Não há metadado associado'
    }

</script>
<a class= "p-6 bg-gray-200  text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href="#" transition:fade>
    <div class="text-sm text-left">
        <h2>   Nome: {wmsLayer.name()}</h2>
        <h2> Título: {wmsLayer.title()}</h2>
        <a class="text-xs text-blue-500 underline underline-offset-4 uppercase" href="{metadadoAssociado()}">{metadadoText}</a>
</div>
</a>