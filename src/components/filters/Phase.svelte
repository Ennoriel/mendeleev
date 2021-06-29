<script lang="ts">
  import Select from 'svelte-select';
	import { store } from '$lib/store'

  const PHASES = [
    "Liquid",
    "Solid",
    "Gas",
    "Artificial",
  ].map(phase => ({label: phase, value: phase}))

  let selectedValue

  $: $store.phase = selectedValue ? selectedValue.value : undefined
</script>

<div>
  <Select items={PHASES} bind:selectedValue placeholder="Phase..."></Select>
</div>

<style>
  div {
    min-width: 100px;

    --height: 34px;
    --borderRadius: 8px;
    --border: 2px solid var(--color-main);

    --borderFocusColor: var(--color-main);
    --borderHoverColor: var(--color-main);
    --clearSelectTop: 9px;
    --clearSelectRight: 7px;
    --clearSelectHoverColor: var(--color-main);
    --listBorderRadius: 8px;
  }

  @media(max-width: 600px) {
    div {
      --inputPadding: 0 8px;
      --inputFontSize: 12px;
      font-size: 12px;
      min-width: 80px;
    }
  }
</style>