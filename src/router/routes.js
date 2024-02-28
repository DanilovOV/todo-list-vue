export const routes = [
	{
		path: '/',
		name: 'Index',
		component: () => import('@/pages/index.vue'),
	},
	{
		path: '/deleted',
		name: 'Deleted',
		component: () => import('@/pages/deleted.vue'),
	},
]
