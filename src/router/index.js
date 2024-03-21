import { createRouter, createWebHistory } from 'vue-router';

// Import the components that will be used in different routes
const Dashboard = () => import('../views/Dashboard.vue');
const Founders = () => import('../views/Founders.vue');
const Startups = () => import('../views/Startups.vue');

// Define routes
const routes = [
  { path: '/dashboard', component: Dashboard, name: 'Dashboard' },
  { path: '/founders', component: Founders, name: 'Founders' },
  { path: '/startups', component: Startups, name: 'Startups' },
  // Redirect to /dashboard as a default route
  { path: '/', redirect: '/dashboard' },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
