import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";


const routes = [
    {
        path: "/",
        component: Home
    },
    {
      path: '/external-redirect', // 外链重定向页面
      name: 'ExternalRedirect',
      component: () => import("@/views/ExternalRedirect.vue"),
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title + ' - DESU.Life';
    } else {
      document.title = 'DESU.Life';
    }
    next();
  });

export default router;