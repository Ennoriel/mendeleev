<script>
	export let name;
	export let width = '1em';
	export let height = '1em';
	let icons = [
		{
			name: 'list',
			svg: `<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>`
    },
		{
			name: 'grid',
			svg: `<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>`
		}
	];
	let displayIcon = icons.find((e) => e.name === name);
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	class="feather feather-list"
>
	{@html displayIcon.svg}
</svg>

<style>
	svg {
		margin: 4px;
	}
</style>