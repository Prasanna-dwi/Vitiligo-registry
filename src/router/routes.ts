import { RouteConfig } from 'vue-router'
import HistoryForm from 'components/HistoryForm.vue';
const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/ScreenLayout.vue'), meta :{ showTabMenu:false, label:'Home' } ,
    children: [
      { path: '', name:'history', component: () => import('pages/History.vue') ,meta :{ showTabMenu:true, label: 'History' } },
      { path: 'treatment', name:'treatment', component: () => import('pages/Treatment.vue'),meta :{ showTabMenu:true, label: 'Treatment' } },
      { path: 'examination', name:'examination', component: () => import('pages/Examination.vue'),meta :{ showTabMenu:true, label: 'Examination' } },
      { path: 'questions', name:'questions', component: () => import('pages/QualityLife.vue'),meta :{ showTabMenu:true, label: 'QualityLife' } },
      { path: 'investigations', name:'investigations', component: () => import('pages/Investigation.vue'),meta :{ showTabMenu:true, label: 'Investigation' } }
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
