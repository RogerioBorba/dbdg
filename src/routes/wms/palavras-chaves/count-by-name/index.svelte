<script context="module">
    import { keywordsCountByName } from "$lib/inde/wms/keywords/util";
    export async function load({params, fetch, session, stuff}) {
        const url = 'http://localhost:3000/api/wms/palavras-chaves/count-by-name/1&100'
        const res = await fetch(url)
        const keywords_by_name = await res.json()
        return {props: {keywords_by_name: keywords_by_name, total: keywordsCountByName().length }}
    }
</script>
<script lang="ts">
    import { TableData } from "flowbite-svelte";
    export let keywords_by_name;
    export let total;
    let start = 1
    let end = 100
    let iri = `http://localhost:3000/api/wms/palavras-chaves/count-by-name/`
    $: {
        helper = {start, end, total}
    }
    
    let helper = {start, end, total}
    
    async function previous() {
        start = start - 100
        end = end - 100
        if (start <= 0) 
            start = 1 
        if (end <= 0)
            end = 100
        console.log(start, end)
        await fetchData(iri + `${start}&${end}`)    
    }

    async function next() {
        start = start + 100
        end = end + 100
        if (start > total) 
            start = total 
            
        if (end > total)
            end = total
        console.log(start, end)
        iri = iri
        await fetchData(iri + `${start}&${end}`)    
    }

    async function fetchData(url) {
        try {
            console.log(url)
            let res = await fetch(url)
            keywords_by_name = await res.json()
            console.log(keywords_by_name)    
        } catch (error) {
            alert("ERRO  na requisiçao")
        }
    }
</script>
<TableData on:next={next} on:previous={previous} {helper}/>
<div class = "m-2 grid gap-2 md:grid-cols-4 grid-cols-2">
    {#each keywords_by_name as keyCount}
        <div class="p-2 bg-gray-200  text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col break-words text-sm text-left">
            <h2> <span class="font-semibold">{Object.keys(keyCount)[0]}:</span> {Object.values(keyCount)[0]}</h2>
        </div>
    {/each}    
</div>