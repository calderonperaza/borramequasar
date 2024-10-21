const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'estudiante', component: () => import('pages/EstudiantePage.vue') },
      { path: 'datos', component: () => import('pages/DataAsistencia.vue') }
    ]
  },
  {
    path: '/whatsapp',
    component: () => import('layouts/WhatsApps.vue'),
    children: [
      { path: '', component: () => import('pages/EstudiantePage.vue') }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
