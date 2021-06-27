<script lang="ts">
  import { base } from '$app/paths';
  import type { Element as ElementType } from "../types/Element.type";

  export let element: ElementType;
</script>

{#if element}
  <div id="background">
  <div class="card">
    <span id="close" on:click={() => element = undefined}>X</span>
    <div class="flex row align-centers section">
      <h1 class="symbol" style={`background-color: ${element.color};`}>
        {element.symbol}
      </h1>
      <div>
        <h2>Identity</h2>
        <span class="element">Element: {element.element}</span>
        <span class="atomicNumber">Atomic number: {element.atomicNumber}</span>
        <span class="atomicMass">Atomic mass: {element.atomicMass}u</span>
      </div>
    </div>
    <div class="section">
      <span>Discovered by {element.discoverer} in {element.year}</span>
    </div>
    <div class="section flex wrap">
      <h2>Chemical properties</h2>
      <span class="fifty">Type: {element.type}</span>
      <span class="fifty">Phase: {element.phase}</span>
      {#if element.radioactive}
        <span class="fifty">is radioactive</span>
      {/if}
      <span class="fifty">number of known isotopes:{element.numberOfIsotopes}</span>
    </div>
    <div class="section flex wrap">
      <h2>Atomic properties</h2>
      <span class="fifty">Period: {element.period}</span>
      <span class="fifty">Group: {element.group}</span>
      <span class="fifty">Neutrons: {element.numberofNeutrons}</span>
      <span class="fifty">Protons: {element.numberofProtons}</span>
      <span class="fifty">Electrons: {element.numberofElectrons}</span>
      <span class="fifty">Atomic radius: {element.atomicRadius}Å</span>
      <span class="fifty">Number of shells: {element.numberofShells}</span>
      <span class="fifty">Number of valence: {element.numberofValence}</span>
    </div>
    <div class="flex wrap">
      <h2>Physical properties</h2>
      <span class="fifty">Electronegativity: {element.electronegativity}</span>
      <span class="fifty">Density: {element.density}</span>
      <span class="fifty">Melting point: {element.meltingPoint}K</span>
      <span class="fifty">Boiling point: {element.boilingPoint}K</span>
      <span class="fifty">Specific heat: {element.specificHeat}J/K/g</span>
    </div>
  </div>
</div>
{/if}

<style>
  #background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #444444EE;
  }
  .card {
      border-radius: 60px 20px 20px 20px;
      box-shadow: 0 0 5px #DDD;
      padding: 10px;
      width: calc(100% - 40px);
      max-width: 450px;
      position: absolute;
      left: 50%;
      top: 50px;
      transform: translateX(-50%);
      overflow-y: auto;
      background-color: white;
  }
  #close {
    float: right;
    cursor: pointer;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    font-weight: bold;
    text-align: center;
  }
  #close:hover, #close:focus {
    background-color: #eee;
  }
  span {
    display: block;
  }
  .symbol {
    width: 100px;
    height: 100px;
    line-height: 95px;
    margin-right: 30px;
    border-radius: 50px;
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
  }
  h1 {
    margin: 0;
  }
  .flex {
    display: flex;
  }
  h2 {
    margin: 0;
    width: 100%;
  }
  .row {
    flex-direction: row;
  }
  .align-centers {
    align-items: center;
  }
  .section {
    margin-bottom: 1em;
  }
  .wrap {
    flex-wrap: wrap;
  }
  .fifty {
    width: 50%;
  }
</style>