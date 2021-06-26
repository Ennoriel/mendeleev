<script lang="ts">
  import type { Element as ElementType } from "../types/Element.type";
  import { default as rawElements } from '../elements.json'; 
  import GridElement from "./GridElement.svelte";
  import ListElement from "./ListElement.svelte";
	import { store } from '$lib/store'
  
  let elements: ElementType[] = rawElements;

  $: {
    let searchRe = new RegExp($store.search)
    elements.forEach(el => el.dontShow =
        ($store.type && $store.type !== el.type) ||
        ($store.phase && $store.phase !== el.phase) ||
        ($store.search && !searchRe.test(el.element) && !searchRe.test(el.symbol))
    )
    elements = elements
  }
</script>

<div id="table" class={$store.display}>
  {#each elements as element}
    {#if $store.display === "grid"}
      <GridElement {element}/>
    {:else}
      <ListElement {element}/>
    {/if}
  {/each}
</div>

<style>
  #table.grid {
    width: 100%;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: auto;
    gap: 4px;
    justify-items: stretch;
    grid-template-areas: 
      "e1-1   e1-2   e1-3   e1-4   e1-5   e1-6   e1-7   e1-8   e1-9   e1-10   e1-11   e1-12   e1-13   e1-14   e1-15   e1-16   e1-17   e1-18"
      "e2-1   e2-2   e2-3   e2-4   e2-5   e2-6   e2-7   e2-8   e2-9   e2-10   e2-11   e2-12   e2-13   e2-14   e2-15   e2-16   e2-17   e2-18"
      "e3-1   e3-2   e3-3   e3-4   e3-5   e3-6   e3-7   e3-8   e3-9   e3-10   e3-11   e3-12   e3-13   e3-14   e3-15   e3-16   e3-17   e3-18"
      "e4-1   e4-2   e4-3   e4-4   e4-5   e4-6   e4-7   e4-8   e4-9   e4-10   e4-11   e4-12   e4-13   e4-14   e4-15   e4-16   e4-17   e4-18"
      "e5-1   e5-2   e5-3   e5-4   e5-5   e5-6   e5-7   e5-8   e5-9   e5-10   e5-11   e5-12   e5-13   e5-14   e5-15   e5-16   e5-17   e5-18"
      "e6-1   e6-2   e6-3   e6-4   e6-5   e6-6   e6-7   e6-8   e6-9   e6-10   e6-11   e6-12   e6-13   e6-14   e6-15   e6-16   e6-17   e6-18"
      "e7-1   e7-2   e7-3   e7-4   e7-5   e7-6   e7-7   e7-8   e7-9   e7-10   e7-11   e7-12   e7-13   e7-14   e7-15   e7-16   e7-17   e7-18"
      "e8-1   e8-2   e8-3   e8-4   e8-5   e8-6   e8-7   e8-8   e8-9   e8-10   e8-11   e8-12   e8-13   e8-14   e8-15   e8-16   e8-17   e8-18"
      "e9-1   e9-2   e9-3   e9-4   e9-5   e9-6   e9-7   e9-8   e9-9   e9-10   e9-11   e9-12   e9-13   e9-14   e9-15   e9-16   e9-17   e9-18"
    ;
  }

  #table.list {
    display: flex;
    flex-direction: column;
  }
</style>