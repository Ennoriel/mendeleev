<script lang="ts">
  import Nav from "../components/Nav.svelte";
  import Table from "../components/Table.svelte";
</script>


<Nav/>

<main>
	<div>
    <Table/>
	</div>
</main>

<style>
	main {
		background-color: #fcfbf4;
		height: calc(100vh - var(--nav-height));
		margin-top: calc(var(--nav-height));
		padding-top: 5px;
		box-sizing: border-box;
		
		overflow-y: auto;
	}

	div {
		width: calc(100% - 20px);
		margin: 10px;
	}

	@media (min-width: 600px) {
		div {
			width: calc(75% + 130px);
			margin: auto;
		}
	}

	@media (min-width: 950px) {
		div {
			max-width: 1000px;
			width: calc(80% + 150px);
			margin: auto;
		}
	}
</style>