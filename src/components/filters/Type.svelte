<script lang="ts">
  import Select from 'svelte-select';
	import { store } from '$lib/store'

  const TYPES = [
    "Actinide",
    "Alkali Metal",
    "Alkaline Earth Metal",
    "Halogen",
    "Lanthanide",
    "Metal",
    "Metalloid",
    "Noble Gas",
    "Nonmetal",
    "Transactinide",
    "Transition Metal",
    "Unknown",
  ].map(type => ({label: type, value: type}))

  let selectedValue

  $: $store.type = selectedValue ? selectedValue.value : undefined
</script>

<div>
  <Select items={TYPES} bind:selectedValue placeholder="Type..."></Select>
</div>

<style>
  div {
    min-width: 160px;

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
      min-width: 120px;
    }
  }

  :global(.focused) {
    box-shadow: 0 0 0 2px #0061df;
  }
</style>