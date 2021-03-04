import { RouteConfig } from 'vue-router'
import HistoryForm from 'components/HistoryForm.vue';
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/FullScreenLayout.vue'), meta :{ showTabMenu:false, label:'Home' } ,
    children: [
      { path: '', name:'home', component: () => import('pages/Index.vue') ,meta :{ showTabMenu:true, label: 'Home' } },
      { path: 'history', name:'history', component: () => import('pages/History.vue'),meta :{ showTabMenu:true, label: 'History' } }
    ]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
