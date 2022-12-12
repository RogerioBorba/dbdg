import { writable } from 'svelte/store';
export let countTotalLayer = writable(0)
export let countTotalLayerWithoutMetadata = writable(0)
export let countWMSProcessado = writable(0)