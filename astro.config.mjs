import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://codingwithjs.rocks',
	integrations: [mdx(), sitemap()],
	redirects: {
		// keep compatibility to links to old blogs (social media, search engine etc.)
		'/blog/redux-selector-colocation-in-practice': 'redux_colocation',
		'/blog/angular-js-migration-war-story': 'angularjs_to_react',
		'/blog/the-hidden-power-of-promise-resolve': 'promise_resolve',
		'/blog/fp-the-good-parts': 'fp_good_parts',
		'/blog/lodash-fp-usage-retrospective': 'lodash_fp_retro',
		'/blog/great-graph-ql-tools': 'graphql_tools',
		'/blog/the-only-time-i-use-var': 'using_var',
		'/blog/better-branching-with-lodash-cond': 'cond'
	},
});
