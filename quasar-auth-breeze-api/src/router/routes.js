import HomeComponent from '../components/HomeComponent.vue'
const routes = [
  {
    path: '/',
    component: HomeComponent,
    name:'home',
    children: [
      { path: '/login',name:'login', component: () => import('../components/LoginComponent.vue') },
      { path: '/register',name:'register', component: () => import('../components/RegisterComponent.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
