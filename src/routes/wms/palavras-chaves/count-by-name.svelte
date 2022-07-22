<script context="module">
    export async function load({params, fetch, session, stuff}) {
        const url = 'http://localhost:3000/api/wms/palavras-chaves/count-by-name'
        const res = await fetch(url)
        const keywords_by_name = await res.json()
        console.log(keywords_by_name)
        return {props: {keywords_by_name}}
    }
</script>
<script>
    export let keywords_by_name 
</script>
<div class = "m-2 grid gap-2 md:grid-cols-4 grid-cols-2">
    {#each keywords_by_name as keyCount}
        <div class="p-2 bg-gray-200  text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col break-words text-sm text-left">
            <h2> <span class="font-semibold">{Object.keys(keyCount)[0]}:</span> {Object.values(keyCount)[0]}</h2>
        </div>
    {/each}    
</div>