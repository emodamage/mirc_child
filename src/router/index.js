import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: window.__POWERED_BY_QIANKUN__ ? '/microApps' : '/', //子应用配置内容
  routes: [
    {
      path: '/child',
      component: () => import('@/components/HelloWorld.vue')
    }
  ]
})

export default router