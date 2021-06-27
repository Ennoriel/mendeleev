<script lang="ts">
  import type { Element } from "../types/Element.type";
  import HighlightSearch from "./HighlightSearch.svelte";
  import Popup from './Popup.svelte';

  export let element: Element;
  let popup: Element;
</script>

{#if !element.dontShow}
  <button
    on:click={() => popup = element}
    style={`color: ${element.color};`}
  >
    <span class="symbol"><HighlightSearch value={element.symbol}/></span>
    <span class="element"><HighlightSearch value={element.element}/></span>
    <span class="number">atomic number: {element.atomicNumber}</span>
    <span class="mass">mass: {element.atomicMass}</span>
    <span class="class">period: {element.period}, group: {element.group}</span>
  </button>
{/if}
{#if popup}
  <Popup bind:element={popup}/>
{/if}

<style>
  button {
    display: grid;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-areas: 
      "symbol element mass"
      "symbol number class"
    ;
    align-items: center;
    padding: .5em .3em;
    margin: .3em .3em .3em calc(.3em + 5px);
    background-color: white;
    box-sizing: content-box;
    border: none;
    border-left: 12px solid currentColor;
    transition: all 0.1s;
    box-shadow: 0 0 1px 0 #CCC;
    border-radius: 3px;
    transition: box-shadow 0.3s, border-left 0.3s, padding-left 0.3s;
    cursor: pointer;
  }

  button:hover, button:focus {
    box-shadow: 0 0 12px 1px #AAA;
  }

  span {
    color: #3C3C3C;
    font-size: 12px;
  }

  @media(min-width: 500px) {
    button {
      grid-template-columns: 50px auto auto auto auto;
      grid-template-areas: 
        "symbol element mass number class"
      ;
      justify-items: center;
    }
    span {
      font-size: 14px;
    }
  }

  .symbol {
    grid-area: symbol;
    font-size: 24px;
    justify-self: center;
    align-self: center;
    margin-top: -6px;
  }

  .element {
    grid-area: element;
  }

  .number {
    grid-area: number;
  }

  .mass {
    grid-area: mass;
  }

  .class {
    grid-area: class;
  }

</style>
