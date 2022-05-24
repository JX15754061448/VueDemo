import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Calender from "../views/Calender.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/calender",
    name: "Calender",
    component: Calender,
    props: true,
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "@/views/DestinationDetails"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "@/views/ExperienceDetails"
          ),
      },
    ],
  },

  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/brazil",
  //   name: "Brazil",
  //   component: () => import(/* webpackChunkName: "brazil" */ "@/views/Brazil"),
  // },
  // {
  //   path: "/hawaii",
  //   name: "Hawaii",
  //   component: () => import(/* webpackChunkName: "hawaii" */ "@/views/Hawaii"),
  // },
  // {
  //   path: "/jamaica",
  //   name: "Jamaica",
  //   component: () => import(/* webpackChunkName: "jamaica" */ "@/views/Jamaica"),
  // },
  // {
  //   path: "/panama",
  //   name: "Panama",
  //   component: () => import(/* webpackChunkName: "panama" */ "@/views/Panama"),
  // },
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "vue-school-jx-active-class",
  routes,
});

export default router;
