import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue")
    }
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