export default {
	mode: 'spa',
	target: 'static',

	head: {
		title: 'umai.pw',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	pwa: {
		manifest: {
			background_color: '#282b30',
			display: 'minimal-ui',
		},
	},

	css: ['~/assets/scss/root.scss'],

	modules: ['@nuxtjs/axios', '@nuxtjs/toast', 'nuxt-fontawesome', 'nuxt-clipboard2', '@nuxtjs/redirect-module'],

	axios: {
		proxy: true,
	},
	proxy: {
		'/api/': { target: 'https://api.umai.pw/', pathRewrite: { '^/api/': '' } },
	},
	toast: {
		position: 'top-right',
		duration: 2500,
		keepOnHover: true,
		className: 'toast',
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

	redirect: [
		{ from: '/discord', to: 'https://discord.gg/AuWCjAb' },
		{ from: '/github', to: 'https://github.com/ohagiiman' },
	],
};
