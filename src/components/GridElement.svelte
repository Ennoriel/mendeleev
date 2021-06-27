<script lang="ts">
  import { base } from '$app/paths';
  import type { Element } from "../types/Element.type";
  import HighlightSearch from "./HighlightSearch.svelte";
  import Popup from './Popup.svelte';

  export let element: Element;
  let popup: Element;

  const filterName = (name: string): string => name.length >= 11 ? name.substring(0, name.length - 3) + '.' : name
</script>

<button
  on:click={() => popup = element}
  disabled={element.dontShow}
  class:dontShow={element.dontShow}
  style={`
    grid-area: e${element.period}-${element.group};
    color: ${element.color};
  `}
>
  <span class="element"><HighlightSearch value={filterName(element.element)}/></span>
  <span class="atomicNumber">{element.atomicNumber}</span>
  <span class="symbol">{element.symbol}</span>
  <span class="atomicMass">{element.atomicMass}</span>
</button>
{#if popup}
  <Popup bind:element={popup}/>
{/if}


<style>
  .dontShow {
    opacity: 0.2;
    cursor: default;
  }
  button {
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
    "element"
    "atomicNumber"
    "symbol"
    "atomicMass";
    justify-items: center;
    color: "#222";
    background-color: white;
    box-sizing: content-box;
    border: none;
    border-top: 4px solid currentColor;
    transition: all 0.1s;
    box-shadow: 0 0 1px 0 #CCC;
    border-radius: 3px;
    transition: background-color 0.6s, box-shadow 0.3s;
    cursor: pointer;
    padding-bottom: 4px;
  }
  button:not(.dontShow):hover, button:not(.dontShow):focus {
    box-shadow: 0 0 5px 0 #444;
    background-color: currentColor;
  }
  span {
    color: #3C3C3C;
    font-size: 10px;
  }
  .element {
    grid-area: element;
    display: none;
    font-size: 10px;
  }
  .atomicNumber {
    grid-area: atomicNumber;
    font-size: 9px;
  }
  .symbol {
    grid-area: symbol;
    font-weight: 500;
    font-size: 11px;
    line-height: 12px;
  }
  .atomicMass {
    display: none;
    grid-area: atomicMass;

  }

  @media(min-width: 450px) {
    .atomicNumber {
      font-size: 10px;
    }
    .symbol {
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
    }
  }

  @media(min-width: 950px) {
    a {
      padding-bottom: 1px;
    }
    .element, .atomicMass {
      display: inline;
    }
  }
</style>