import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomePageView.vue';
import GamePage from '../views/GamePageView.vue';
import statsPage from '../views/StatsPageView.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/swordle',
		name: 'swordle',
		component: GamePage,
	},
	{
		path: '/stats',
		name: 'stats',
		component: statsPage,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
