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
//利用前置守卫可以做拦截
router.beforeEach((to,from,next)=>{
    console.log(to);
    console.log(from);
    console.log(window.localStorage.getItem("token"));
    if(to.path == "/user/setter/changepassword"){
      next()
    }else{
      if(from.path == "http://123.57.233.41:3030/"){
        if(from.query.token){
          window.localStorage.setItem("token",from.query.token)
        }else{
          alert("跳回登录页面")
        }
      }else{
        let token = window.localStorage.getItem("token")
        fetch("http://39.98.126.184:8080/api/Total/total/?token="+token).then(res=>{
          res.json().then(data=>{
            if(data.status !== 0){
              next()
            }else{
              alert("跳回登录页面")
            }
          })
        })
      }
    }
    
   })
export default router
