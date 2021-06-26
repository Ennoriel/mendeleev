<script lang="ts">
	import { display } from '$lib/store'

	import Button from "./Button.svelte";
	import Icon from "./Icon.svelte";
</script>

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
	}

	ul {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 0;
		height: var(--nav-height);
	}
</style>

<nav>
	<ul>
		<Button click={() => $display = "grid"}>Table <Icon name="grid"/></Button>
		<Button click={() => $display = "list"}><Icon name="list"/> List</Button>
	</ul>
</nav>
