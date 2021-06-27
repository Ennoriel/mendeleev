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
    width: 100px;
    border-radius: 8px;
    box-sizing: border-box;
  }
  input:hover {
    box-shadow: 0 0 0 2px var(--color-main);
  }
  input:focus {
    outline: 0;
    box-shadow: 0 0 0 2px #0061df;
  }

  @media(max-width: 600px) {
    input {
      padding: 0 8px;
      --inputFontSize: 12px;
      font-size: 12px;
      width: 80px;
    }
  }
</style>