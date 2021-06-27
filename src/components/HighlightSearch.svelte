<script lang="ts">
	import { store } from '$lib/store';

  export let value: string;

  $: searchRe = new RegExp(`(${$store.search})`, 'gi')
</script>

{#if $store.search && searchRe.test(value)}
  {@html value.replace(searchRe, `<span class="strong">$1</span>`)}
{:else}
  {value}
{/if}

<style>
  :global(.strong) {
    font-weight: bold;
  }
</style>