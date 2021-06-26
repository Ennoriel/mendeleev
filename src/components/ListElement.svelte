<script lang="ts">
  import type { Element } from "../types/Element.type";

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
    ["Transactinide", "#8c73b2"]
  ])
</script>

<div style={`
  color: ${type.get(element.type)};
`}>
  <span class="symbol">{element.symbol}</span>
  <span class="element">{element.element}</span>
  <span class="number">atomic number: {element.atomicNumber}</span>
  <span class="mass">mass: {element.atomicMass}</span>
  <span class="class">period: {element.period}, group: {element.group}</span>
</div>

<style>
  div {
    display: grid;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-areas: 
      "symbol element mass"
      "symbol number class"
    ;
    align-items: center;
    padding: .5em .3em;
    padding-left: calc(0.3em + 4px);
    margin: .3em .3em .3em calc(.3em + 5px);
    background-color: white;
    box-sizing: content-box;
    border-left: 0 solid currentColor;
    border-top: 4px solid currentColor;
    transition: all 0.1s;
    box-shadow: 0 0 1px 0 #CCC;
    border-radius: 3px;
    transition: box-shadow 0.3s, border-left 0.3s, padding-left 0.3s;
    cursor: pointer;
  }

  div:hover {
    box-shadow: 0 0 3px 1px #666;
    padding-left: calc(0.3em);
    border-left: 4px solid currentColor;
  }

  span {
    color: #3C3C3C;
    font-size: 12px;
  }

  @media(min-width: 500px) {
    div {
      /* display: flex;
      justify-content: space-around; */
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
