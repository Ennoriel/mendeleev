<script lang="ts">
	import { display } from '$lib/store'

  import Table from "../components/Table.svelte";
</script>

<Table display={$display}></Table>