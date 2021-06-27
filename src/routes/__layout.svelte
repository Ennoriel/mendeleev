<slot/>

<style>
	:global(html) {
		--nav-height: 60px;
		--color-main: rgb(255,62,0);
	}

	:global(*) {
		scrollbar-width: thin;
		scrollbar-color: var(--color-main) #fcfbf4;
		font-weight: 300;
	}
	
	:global(*::-webkit-scrollbar-track) {
		background: #fcfbf4;
	}
	:global(*::-webkit-scrollbar-thumb) {
		background-color: var(--color-main);
	}
	:global(*::-webkit-scrollbar) {
		width: 7px;
	}

	:global(html),
	:global(body) {
		height: 100vh;
		overflow: hidden;
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

	:global(a) {
		text-decoration: none;
		color: var(--color-main)
	}
</style>