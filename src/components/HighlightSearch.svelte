<script lang="ts">
	import { store } from '$lib/store';

  export let value: string;

  $: searchRe = new RegExp($store.search, 'g')
</script>

{#if $store.search && searchRe.test(value)}
  {@html value.replace(searchRe, `<span class="strong">${$store.search}</span>`)}
{:else}
  {value}
{/if}

<style>
  :global(.strong) {
    font-weight: bold;
  }
</style>