<script lang="ts">
	import { store } from '$lib/store'

	import Button from "./Button.svelte";
	import Phase from './filters/Phase.svelte';
	import Search from './filters/Search.svelte';
	import Type from './filters/Type.svelte';
</script>

<nav>
	<Search/>
	<Type/>
	<Phase/>
	<span class:hide={$store.display === "grid"}><Button click={() => $store.display = "grid"}>Table</Button></span>
	<span class:hide={$store.display === "list"}><Button click={() => $store.display = "list"}>List</Button></span>
</nav>

<style>
	nav {
		width: 100%;
		height: var(--nav-height);
		position: fixed;
		top: 0;
		box-sizing: border-box;
		border-bottom: 1px solid rgba(255,62,0,0.1);
		background-color: white;
		font-weight: 300;
		
		display: flex;
		justify-content: space-evenly	;
		align-items: center;
		margin: 0;
	}

	@media(max-width: 600px) {
		.hide {
			display: none;
		}
	}
</style>