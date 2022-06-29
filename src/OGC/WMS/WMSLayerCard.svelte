<script>
    import { fade } from 'svelte/transition'
    export let wmsLayer
    export let capabilitiesUrl
    let metadadoText = ""
    let metadados = wmsLayer.metadataURLs()
    
    function stylesAsString() {
        return wmsLayer.styles().map( st => st.title()).toString()
    }
    function keywordsString() {
        return (wmsLayer.keywords().length > 0)? wmsLayer.keywords().toString(): 'Não há palavras chaves'
    }
    
</script>
<a class= "p-6 bg-gray-200  text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center" href="#" transition:fade>
    <div class="text-sm text-left">
        <h2> Nome: {wmsLayer.name()}</h2>
        <h2> Título: {wmsLayer.title()}</h2>
        <h2>Palavras chaves: {keywordsString()}</h2>
        <h2>Estilo: {stylesAsString()}</h2>
       <!-- <h2><a class= "text-blue-500 underline underline-offset-4" href={wmsLayer.style().legendGraphic().link()}>Link legenda</a></h2> -->
        {#if metadados }
            {#each metadados as metadata}
                <p>
                   <a class="text-xs text-blue-500 underline underline-offset-4 uppercase" href="{metadata.link()}">Link metadado</a>
                   <span> tipo: {metadata.type()}</span>
                </p>
            {/each}
        {:else}
            <a class="text-xs text-blue-500 uppercase" href="#">Sem metadado associado</a>
        {/if}
</div>
</a>