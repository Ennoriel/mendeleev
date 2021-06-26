<script lang="ts">
	import { store } from '$lib/store'
</script>

<input type="text" bind:value={$store.search} Placeholder="Search..."/>

<style>
  input {
    display: flex;
    align-items: center;
    border: 2px solid var(--color-main);
    background-color: transparent;
    padding: 0 16px;
    height: 38px;
    border-radius: 8px;
    transition: box-shadow .4s;
    box-sizing: border-box;
  }
</style>