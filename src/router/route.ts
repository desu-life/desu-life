import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../views/Home.vue")
    },
    {
        path: "/login",
        component: () => import("../views/Login.vue"),
        meta: {
          title: "登录"
        }
    },
    {
        path: "/register",
        component: () => import("../views/Register.vue"),
        meta: {
          title: "注册"
        }
    },
    {
      path: "/user",
      redirect: "/user/index",
      children: [
        {
          path: "index",
          component: () => import("../views/User/Index.vue"),
          meta: {
            title: "用户中心"
          }
        }
      ]
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