<script>
    import {map, currentBaseLayer, leaflet} from '../../../store/store'
    
    import {osmTileLayer, googleStreetsTileLayer, googleHybridTileLayer, googleSatTileLayer, 
        googleTerrainTileLayer, nullTileLayer} from '../../../gis/baseTiles'
    
    let camadaEscolhida = 'osm'
    const osm = 'osm'
    const google = 'google'
    const googleHybrid = 'googleHybrid'
    const goolgeSatelite = 'goolgeSatelite'
    const googleTerrain = 'googleTerrain'
    const nullTile = 'nullTile'
    const tyleLayer = {
        osm: osmTileLayer,
        google: googleStreetsTileLayer ,
        googleHybrid: googleHybridTileLayer,
        goolgeSatelite: googleSatTileLayer,
        googleTerrain: googleTerrainTileLayer,
        nullTile: nullTileLayer
    }

    function onChangeBaseLayer(event) {
        $currentBaseLayer.remove()
        currentBaseLayer.set(tyleLayer[event.currentTarget.value])     
        $currentBaseLayer.addTo($map)
    }

</script>
<div class="flex flex-col text-justify text-sm pl-4 text-sm whitespace-nowrap" >
    <div>
        <input  type=radio bind:group={camadaEscolhida} value={nullTile} on:change={onChangeBaseLayer}>
        Sem camada base
    </div>
    <div>
        <input type=radio bind:group={camadaEscolhida} value={osm} on:change={onChangeBaseLayer}>
        Camada base Openstreetmap
    </div>
    <div>
        <input type=radio bind:group={camadaEscolhida} value={google} on:change={onChangeBaseLayer}>
        Camada base Google Maps
    </div>
    <div>
        <input  type=radio bind:group={camadaEscolhida} value={googleHybrid} on:change={onChangeBaseLayer}>
        Camada base Google Híbrida 
    </div>
    <div>
        <input type=radio bind:group={camadaEscolhida} value={goolgeSatelite} on:change={onChangeBaseLayer}>
        Camada base Google Satélite
    </div>
    <div>
        <input type=radio bind:group={camadaEscolhida} value={googleTerrain} on:change={onChangeBaseLayer}>
        Camada base Google Terreno
    </div>   
</div>