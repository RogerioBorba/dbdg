<script lang="ts">
    import {currentListWMSCapability} from '$lib/store/store'
    import WMSLayerCard from '$lib/ogc/wms/WMSLayerCard.svelte'
    import {WMSLayer} from '$lib/ogc/wms/WMSLayer'
    import { onMount } from 'svelte';
    import { Navbar, NavBrand, Dropdown, DropdownHeader, Avatar, DropdownItem, DropdownDivider, NavUl, NavHamburger, NavLi } from 'flowbite-svelte';
    let wmsLayers = []
    let textEntered = null
    let filteredWMSLayers = []
    let withoutMetadadaChecked = false
    let withoutKeywordChecked = false
    let nameEqualTitleChecked = false

    let avatar = ''
    onMount(async () => {
        let current = await $currentListWMSCapability
        let i = 1
        if (!current)
            return
        console.log(current)
        let layerObjects = await current.layerObjects()
        wmsLayers = layerObjects.map( each => {return new WMSLayer(each, i++ , null)})
    })
     
    function filterWMSLayers() {
        if (textEntered && textEntered.length >= 3) {
            wmsLayers.filter(e => (e.title().toLowerCase().search(textEntered.toLowerCase()) > -1) || 
                              (e.name().toLowerCase().search(textEntered.toLowerCase()) > -1))
        } else {

        }
    }

    $: {
        if (textEntered && textEntered.length >= 3) {
            filteredWMSLayers = wmsLayers.filter(e => (e.title().toLowerCase().search(textEntered.toLowerCase()) > -1) || (e.name().toLowerCase().search(textEntered.toLowerCase()) > -1))
            
        }
        else {
            filteredWMSLayers = [...wmsLayers]
        }    

        if (withoutMetadadaChecked) 
            filteredWMSLayers = filteredWMSLayers.filter(e => !e.metadataURLs())
        
        if (withoutKeywordChecked)
            filteredWMSLayers = filteredWMSLayers.filter(e => !e.keywords())
        
        if (nameEqualTitleChecked)
            filteredWMSLayers = filteredWMSLayers.filter(e => e.title()== e.name())    
    }     
    
</script>
<!--<Navbar let:hidden let:toggle rounded={true} border={true}>
	<NavBrand href="/">
		<img
			src="https://flowbite.com/docs/images/logo.svg"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Flowbite
		</span>
	
	<div class="flex md:order-2">
		<Dropdown arrowIcon={true} inline={true}>
			<Avatar />
			<DropdownHeader>
				<span class="block text-sm"> Bonnie Green </span>
				<span class="block truncate text-sm font-medium"> name@flowbite.com </span>
			</DropdownHeader>
			<DropdownItem>Dashboard</DropdownItem>
			<DropdownItem>Settings</DropdownItem>
			<DropdownItem>Earnings</DropdownItem>
			<DropdownDivider />
			<DropdownItem>Sign out</DropdownItem>
		</Dropdown>
		<NavHamburger on:click={toggle} />
	</div>
	
</Navbar>
</NavBrand>-->
<div class="m-2 flex md:flex-row flex-col justify-center md:justify-start md:items-center">
    <input class= "border-gray-300 focus:outline-none min-w-fit rounded  m-1 p-1 w-1/4" type="text" bind:value={textEntered} placeholder="Digite para filtrar por nome ou título">
    <div>
        <input class= "mx-1 rounded border-gray-300" type="checkbox"  bind:checked={withoutMetadadaChecked}>
        <span class="mr-5">Sem metadado associado</span>
    </div>
    <div>
        <input class= "mr-1 rounded border-gray-300" type="checkbox" bind:checked={withoutKeywordChecked}>
        <span class="mr-5">Sem palavra chave</span>
    </div>
    <div>
        <input class= "mr-1 rounded border-gray-300" type="checkbox" bind:checked={nameEqualTitleChecked}>
        <span class="mr-5">Nome igual ao título</span>
    </div>
    <div>
        <p>Qtd : {filteredWMSLayers.length}</p>
        
    </div>
</div>
<div class = "m-2 grid gap-2 md:grid-cols-3 grid-cols-1">
    {#each filteredWMSLayers as wmsLayer (wmsLayer.oid)}
        <WMSLayerCard wmsLayer={wmsLayer}></WMSLayerCard>
    {/each}    


</div>
