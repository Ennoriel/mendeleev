<script context="module" lang="ts">
  export function load({ page }) {
		return {
			props: {
				symbol: page.params.slug
			}
		};
	}

</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import type { Element as ElementType } from "../types/Element.type";
  import { default as rawElements } from '../elements.json'; 
  import { goto } from '$app/navigation';

  export let symbol: string;
  let element: ElementType;

  onMount(() => {
    element = rawElements.find(el => el.symbol === symbol)
    if (!element) goto('/')
  })
</script>

<a href="/">Go back to the table</a>
{#if element}
  <div class="card">
    <div class="flex row align-centers section">
      <h1 class="symbol">
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
{/if}

<style>
  .card {
    box-shadow: 0 0 25px #DDD;
    width: 50%;
    max-width: 400px;
    padding: 10px;
    border-radius: 60px 20px 20px 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    background-color: #DDD;
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