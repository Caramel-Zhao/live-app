import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouter from './HomeRouter'
import RankRouter from './RankRouter'
import SearchRouter from './SearchRouter'
import UserRouter from './UserRouter'
import ChannelRouter from './ChannelRouter'
import StartFinish from "./StartFinish"
import StartLiveRouter from "./StartLiveRouter";
import LiveRouter from "./LiveRouter";
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  HomeRouter,
  RankRouter,
  SearchRouter,
  UserRouter,
  StartLiveRouter,
  StartFinish,
  LiveRouter,
  ChannelRouter
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
