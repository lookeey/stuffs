import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import path from 'path'

const scssAliases = aliases => {
	return url => {
		for (const [alias, aliasPath] of Object.entries(aliases)) {
			if (url.indexOf(alias) === 0) {
				return {
					file: url.replace(alias, aliasPath),
				};
			}
		}
		return url;
	};
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			importer: [
				scssAliases({
					'$lib': process.cwd() + '/src/lib',
				}),
			],
		}
	}),


	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('./src/lib/components')
				}
			}
		}
	}
};

export default config;
