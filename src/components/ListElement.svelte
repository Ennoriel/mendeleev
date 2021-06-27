<script lang="ts">
  import type { Element } from "../types/Element.type";
  import HighlightSearch from "./HighlightSearch.svelte";

  export let element: Element;

  const type = new Map([
    ["Nonmetal", "#99fb99"],
    ["Noble Gas", "#b0efef"],
    ["Alkali Metal", "#ff6666"],
    ["Alkaline Earth Metal", "#ffdfae"],
    ["Metalloid", "#cdcd9a"],
    ["Halogen", "#ffff9a"],
    ["Metal", "#d4d4d4"],
    ["Transition Metal", "#ffb7c2"],
    ["Lanthanide", "#ffc0ff"],
    ["Actinide", "#ff9acd"],
    ["Transactinide", "#8c73b2"],
    ["Unknown", "#f5f5f5"]
  ])
</script>

{#if !element.dontShow}
  <a
    href={`/${element.symbol}`}
    style={`color: ${type.get(element.type)};`}
  >
    <span class="symbol"><HighlightSearch value={element.symbol}/></span>
    <span class="element"><HighlightSearch value={element.element}/></span>
    <span class="number">atomic number: {element.atomicNumber}</span>
    <span class="mass">mass: {element.atomicMass}</span>
    <span class="class">period: {element.period}, group: {element.group}</span>
  </a>
{/if}

<style>
  a {
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
    border-left: 12px solid currentColor;
    transition: all 0.1s;
    box-shadow: 0 0 1px 0 #CCC;
    border-radius: 3px;
    transition: box-shadow 0.3s, border-left 0.3s, padding-left 0.3s;
    cursor: pointer;
  }

  a:hover, a:focus {
    box-shadow: 0 0 12px 1px #AAA;
  }

  span {
    color: #3C3C3C;
    font-size: 12px;
  }

  @media(min-width: 500px) {
    a {
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
