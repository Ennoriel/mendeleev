import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			fallback: null
		}),
		target: '#svelte',
		paths: {
			base: '/mendeleev',
			assets: '/mendeleev'
		},
	}
};

export default config;
