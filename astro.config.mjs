import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://codingwithjs.rocks',
	integrations: [mdx(), sitemap()],
	redirects: {
		// keep compatibility to links to old blogs (social media, search engine etc.)
		'/blog/redux-selector-colocation-in-practice': '/blog/redux_colocation',
		'/blog/angular-js-migration-war-story': '/blog/angularjs_to_react',
		'/blog/the-hidden-power-of-promise-resolve': '/blog/promise_resolve',
		'/blog/fp-the-good-parts': '/blog/fp_good_parts',
		'/blog/lodash-fp-usage-retrospective': '/blog/lodash_fp_retro',
		'/blog/great-graph-ql-tools': '/blog/graphql_tools',
		'/blog/the-only-time-i-use-var': '/blog/using_var',
		'/blog/better-branching-with-lodash-cond': '/blog/cond'
	},
});
