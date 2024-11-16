import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/Home.vue")
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
    // // 检查目标地址是否为外链
    // if (to.path.startsWith('http://') || to.path.startsWith('https://')) {
    //   next({
    //     path: '/external-redirect',
    //     query: { url: encodeURIComponent(to.fullPath) }, // 将目标链接通过 query 参数传递
    //   });
    // }

    next();
  });

export default router;