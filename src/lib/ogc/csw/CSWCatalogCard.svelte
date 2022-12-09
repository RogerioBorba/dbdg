<script>
    import {countMetadata} from '$lib/store/store'
    import { goto } from '$app/navigation';
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';
    import { fetchData } from "$lib/request/requestData";
    import { textXml2Json } from '$lib/xml_json/xml2Json';
    let defaultText = "anyText = '*'"
    let urlServer = 'https://metadados.inde.gov.br/geonetwork/srv/por/csw'
    //let anyText = `<csw:GetRecords xmlns:csw="http://www.opengis.net/cat/csw/2.0.2" xmlns:ogc="http://www.opengis.net/ogc" service="CSW" version="2.0.2" resultType="hits" startPosition="1" maxRecords="1" outputFormat="application/xml" outputSchema="http://www.isotc211.org/2005/gmd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.opengis.net/cat/csw/2.0.2 http://schemas.opengis.net/csw/2.0.2/CSW-discovery.xsd"><csw:Query typeNames="csw:Record"><csw:ElementSetName>full</csw:ElementSetName></csw:Query></csw:GetRecords>`
    let getRecordsParams = 'service=CSW&version=2.0.2&request=GetRecords&typeNames=csw:Record&constraintLanguage=CQL_TEXT&ElementSetName=brief&resultType=hits'
    export let idDescricaoIri
    let tempoRequisicao = 0
    let qtdMetadados = 0
    let bgColor = 'bg-gray-200'  
    let requestGetRecordsTextOrError = ''
    
    function linkClicked() {}

    onMount(async () => {
        const index = idDescricaoIri.iri.indexOf('?')
		let url = idDescricaoIri.iri.substring(0, index) + `?${getRecordsParams}`
        console.log("onMount")
        try {
            let res = await fetchData(url)
            let xmlText = await res.text()
            let xmlJsonObject = textXml2Json(xmlText)
            qtdMetadados = xmlJsonObject["csw:GetRecordsResponse"]["csw:SearchResults"]["@attributes"]["numberOfRecordsMatched"]

            if(qtdMetadados && !isNaN(parseInt(qtdMetadados)))
                $countMetadata = $countMetadata + parseInt(qtdMetadados)
            console.log(xmlJsonObject)
        } catch (error) {
            console.log("Erro na chamada da requisição")
            console.log(error)
            console.log(error.statusText)
            console.log(error.status)
            requestGetRecordsTextOrError = `ERRO na requisição. Contate o responsável. ${error.status} - ${error.statusText}`
            bgColor =  'bg-red-200'
        }
		
	});
    
</script>
<div class= "p-2 {bgColor} text-sm text-left text-gray-800  rounded-md shadow-sm hover:shadow-md flex flex-col"  transition:fade>
        <h2 class="font-semibold"> {requestGetRecordsTextOrError}</h2>
        <h2 class="font-semibold"> {idDescricaoIri.descricao}</h2>
        <h2> Quantidade de registros de metadados: {qtdMetadados}</h2>
        <button class="text-green-600 text-left font-semibold hover:bg-gray-200 hover:underline py-1"  on:click={linkClicked}>Mais detalhes</button>
        <!--<a class="text-xs text-blue-500 underline underline-offset-4 uppercase" href="{metadadoAssociado()}">{metadadoText}</a>-->

</div>