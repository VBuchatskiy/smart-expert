import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { keyBy } from "lodash";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/select",
  },
  {
    path: "/select",
    children: [
      {
        path: "",
        name: "select",
        meta: {
          title: "base select",
          protected: false,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/SelectView.vue"),
      },
    ],
    component: () =>
      import(/* webpackChunkName: "about" */ "../layouts/MainLayout.vue"),
  },
  {
    path: "/tooltip",
    children: [
      {
        path: "",
        name: "tooltip",
        meta: {
          title: "base tooltip",
          protected: false,
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/TooltipView.vue"),
      },
    ],
    component: () =>
      import(/* webpackChunkName: "about" */ "../layouts/MainLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/smart-expert/" : "/"
  ),
  routes,
});

const navigation = keyBy(router.getRoutes(), "name");

export { router, navigation };
