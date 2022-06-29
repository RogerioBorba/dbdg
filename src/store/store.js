import { writable } from 'svelte/store';
export let currentBaseLayer = writable(null);
export let urlServerCSW = writable(null)
export let leaflet = writable(null);
export let map = writable(null);

export let selectedLayers = writable([]);
export let currentListWMSCapability = writable([]);