<script lang="ts">
	import Nav from '../components/Nav.svelte';
</script>

<Nav/>

<main>
	<div>
		<slot/>
	</div>
</main>

<style>
	:global(*) {
		scrollbar-width: thin;
		scrollbar-color: rgb(255, 62, 0) white;
		font-weight: 300;
	}

	:global(html) {
		--nav-height: 60px;
		--color-main: rgb(255,62,0);
	}

	:global(body),
	:global(input),
	:global(button) {
		margin: 0;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: 14px;
		line-height: 1.5;
		color: #333;
	}

	main {
		background-color: #fff6f6;
		height: calc(100vh - var(--nav-height));
		margin-top: calc(var(--nav-height));
		padding-top: 5px;
		box-sizing: border-box;
		
		overflow-y: auto;
		scrollbar-color: rgb(255, 62, 0) #fff6f6;
	}

	div {
		width: 100%;
		margin: auto;
	}
	@media (min-width: 600px) {
		div {
			max-width: 1000px;
			width: calc(66.66% + 200px)
		}
	}
</style>