import autoprefixer from 'autoprefixer';

export default {
	mode: 'universal',
	target: 'server',

	head: {
		title: 'umai.pw | a light weight link shortener/resolver',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'a light weight link shortener/resolver build with node.js and cloudflare workers',
			},
			{ hid: 'rating', name: 'rating', content: 'General' },

			//
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'theme-color', name: 'theme-color', content: `#00cc74` },
			{ hid: 'description', name: 'description', content: `a light weight link shortener/resolver 🥡` },
			{ hid: 'keywords', name: 'keywords', content: `light wight, link shortener, fast, simple` },
			{
				hid: 'apple-mobile-web-app-title',
				name: 'apple-mobile-web-app-title',
				content: `umai.pw`,
			},
			{ hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: `#2b5797` },
			{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
			{ hid: 'twitter:site', name: 'twitter:site', content: `@ohagiiman` },
			{ hid: 'twitter:creator', name: 'twitter:creator', content: `@ohagiiman` },
			{ hid: 'twitter:title', name: 'twitter:title', content: `umai.pw` },
			{
				hid: 'twitter:description',
				name: 'twitter:description',
				content: `a light weight link shortener/resolver 🥡`,
			},
			{ hid: 'og:url', property: 'og:url', content: `https://umai.pw` },
			{ hid: 'og:type', property: 'og:type', content: 'website' },
			{ hid: 'og:title', property: 'og:title', content: `umai.pw` },
			{ hid: 'og:description', property: 'og:description', content: `a light weight link shortener/resolver 🥡` },
			{ hid: 'og:site_name', property: 'og:site_name', content: `umai.pw` },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	components: true,

	pwa: {
		manifest: {
			background_color: '#282b30',
			display: 'minimal-ui',
		},
	},

	css: ['~/assets/scss/root.scss'],

	modules: ['@nuxtjs/axios', '@nuxtjs/toast', 'nuxt-fontawesome', 'nuxt-clipboard2'],

	axios: {
		baseURL: 'https://api.umai.pw',
	},
	toast: {
		position: 'top-right',
		duration: 2500,
		keepOnHover: true,
		className: 'toast',
		register: [
			{
				name: 'error',
				message: (msg) => msg,
				options: {
					className: 'toast-error',
				},
			},
			{
				name: 'success',
				message: (msg) => msg,
				options: {
					className: 'toast-success',
				},
			},
		],
	},

	fontawesome: {
		component: 'fa-icon',
		imports: [
			{
				set: '@fortawesome/free-solid-svg-icons',
				icons: ['fas'],
			},
			{
				set: '@fortawesome/free-brands-svg-icons',
				icons: ['fab'],
			},
		],
	},

	loading: {
		color: '#00cc74',
		failedColor: '#ff304f',
	},
	build: {
		extractCSS: true,
		postcss: {
			preset: {
				autoprefixer,
			},
		},
	},
};
