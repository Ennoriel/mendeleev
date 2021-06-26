<script context="module" lang="ts">
  export function load({ page }) {
		return {
			props: {
				symbol: page.params.slug
			}
		};
	}

</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Element as ElementType } from "../types/Element.type";
  import { default as rawElements } from '../elements.json'; 
  import { goto } from '$app/navigation';

  export let symbol: string;
  let element: ElementType;

  onMount(() => {
    element = rawElements.find(el => el.symbol === symbol)
    if (!element) goto('/')
  })
</script>

<pre>
  {JSON.stringify(element, null, 2)}
</pre>