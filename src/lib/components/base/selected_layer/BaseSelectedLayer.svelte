<script>
 import {map, selectedLayers}  from '../../../store/store'
 import SelectedLayer from './SelectedLayer.svelte'
 import {flip} from 'svelte/animate';
import { getMethods } from '$lib/util/reflection';
 let hovering = false;

 const drop = (event, target) => {
    event.dataTransfer.dropEffect = 'move'; 
    const start = parseInt(event.dataTransfer.getData("text/plain"));
    const newTracklist = $selectedLayers
    console.log(start)
    console.log('target: ', target)
    if (start < target) {
      newTracklist.splice(target + 1, 0, newTracklist[start]);
      newTracklist.splice(start, 1);
    } else {
      newTracklist.splice(target, 0, newTracklist[start]);
      newTracklist.splice(start + 1, 1);
    }
    selectedLayers.set(newTracklist)
    let wmsLayer1 = $selectedLayers[start]
    //console.log(wmsLayer1.sourceLayer._source.getPane())
    //console.log(getMethods(wmsLayer1.sourceLayer._source))
    //console.log(wmsLayer1.sourceLayer)
    //console.log(getMethods(wmsLayer1.sourceLayer))
    for (let i = 0; i < $selectedLayers.length; i++) {
        let wmsLayer1 = $selectedLayers[i]
        wmsLayer1.sourceLayer.setZIndex(i+1)
    }
    hovering = null
  }

  const dragstart = (event, i) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.dropEffect = 'move';
    const start = i;
    event.dataTransfer.setData('text/plain', start);
  }
    
</script>

{#each $selectedLayers as layer, index (index) }
    <div class= "border rounded-bl-md active:bg-slate-400 mt-1 px-1" animate:flip
    draggable={true} 
    on:dragstart={event => dragstart(event, index)}
    on:drop|preventDefault={event => drop(event, index)}
    ondragover="return false"
    on:dragenter={() => hovering = index}
    class:is-active={hovering === index}>
        <SelectedLayer layer={layer}></SelectedLayer>
    </div>
{/each}    
<style>
	.select-layer {
        border-width: 1px;
    }
    select-layer.is-active {
        --tw-bg-opacity: 1;
        background-color: rgb(148 163 184 / var(--tw-bg-opacity));
        color: #fff;
    }
</style>