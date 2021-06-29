<script lang="ts">
  import type { Element } from "../types/Element.type";
  import HighlightSearch from "./HighlightSearch.svelte";

  export let element: Element;
  export let display
  export let receive;
  export let send;

  const filterName = (name: string): string => name.length >= 11 ? name.substring(0, name.length - 3) + '.' : name
</script>

<button
  on:click={() => {element.focus = true; element = element;}}
  disabled={element.dontShow}
  class:grid={display === "grid"}
  class:list={display === "list"}
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
  <span class="class">period: {element.period}, group: {element.group}</span>
  {#if !element.focus}
    <span
      id="fake-card"
      in:receive={{key: element.atomicNumber}}
      out:send={{key: element.atomicNumber}}
    />
  {/if}
</button>

<style>
  #fake-card {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .grid.dontShow {
    opacity: 0.2;
    cursor: default;
  }
  .list.dontShow {
    display: none;
  }
  button {
    position: relative;
    display: grid;
    cursor: pointer;
    transition: background-color 0.6s, box-shadow 0.3s;
    border: none;
    background-color: white;
    box-shadow: 0 0 1px 0 #CCC;
  }
  button.grid {
    grid-template-columns: 100%;
    grid-template-areas:
      "element"
      "number"
      "symbol"
      "mass";
    border-top: 4px solid currentColor;
    padding: 0 0 4px;
  }
  
  button.list {
    grid-template-columns: 50px 1fr 1fr;
    grid-template-areas: 
      "symbol element mass"
      "symbol number class";
    padding: .5em;
    margin: .3em;
    border-left: 12px solid currentColor;
    align-items: center;
    justify-items: flex-start;
  }

  button.grid:not(.dontShow):hover, button.grid:not(.dontShow):focus {
    box-shadow: 0 0 5px 0 #444;
    background-color: currentColor;
  }
  button.list:hover, button.list:focus {
    box-shadow: 0 0 12px 1px #AAA;
  }

  span { color: #3C3C3C; }
  .grid span { font-size: 10px; }
  .list span { font-size: 12px; }

  .symbol { grid-area: symbol; }
  .element { grid-area: element; }
  .atomicNumber { grid-area: number; }
  .atomicMass { grid-area: mass; }
  .class { grid-area: class; }

  .grid .symbol {
    font-weight: 500;
    font-size: 11px;
    line-height: 12px; }
  .grid .element { display: none; }
  .grid .atomicNumber { font-size: 9px; }
  .grid .atomicMass { display: none; }
  .grid .class { display: none; }
  
  .list .symbol {
    font-size: 24px;
    justify-self: center;
    align-self: center;
    margin-top: -6px; }

  @media(min-width: 500px) {
    button.list {
      grid-template-columns: 50px auto auto auto auto;
      grid-template-areas: 
        "symbol element mass number class"
      ;
      justify-items: center;
    }
    .list span {
      font-size: 14px;
    }
    
    .grid .atomicNumber {
      font-size: 10px;
    }
    .grid .symbol {
      font-weight: 600;
      font-size: 14px;
      line-height: 14px;
    }
  }

  @media(min-width: 950px) {
    button.grid {
      padding-bottom: 1px;
    }
    .grid .element, .grid .atomicMass {
      display: inline;
    }
  }
</style>