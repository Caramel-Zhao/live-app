export  default {
  path:"/user",
  component: ()=> import('../views/User'),
  children: [
    {
      path: '',
      component: () => import('../views/User/User')
    },
    {
      path: "setting",
      component: () => import('../views/User/Setting'),
      children:[
        {
          path:"changepassword",
          component:() => import('../components/User/Set/SetList/SetItem/changepassword')
        },
        {
          path:"opinion",
          component:() => import('../components/User/Set/SetList/SetItem/opinion')
        },
        {
          path:"ContactUS",
          component:() => import('../components/User/Set/SetList/SetItem/ContactUS')
        },
        {
          path:"agreement",
          component:() => import('../components/User/Set/SetList/SetItem/agreement')
        },
        {
          path:"privacy",
          component:() => import('../components/User/Set/SetList/SetItem/privacy')
        }
       ]
    },
    {
      path: "fans",
      component: () => import('../views/User/Fans')
    },
    {
      path: "message",
      component: () => import('../views/User/Message')
    },
    {
      path: "data",
      component: () => import('../views/User/Data')
    },
    {
      path: "nobility",
      component: () => import('../views/User/Nobility')
    },
    {
      path: "task",
      component: () => import('../views/User/Task')
    },
    {
      path: "award",
      component: () => import('../views/User/Award')
    },
    {
      path: "earnings",
      component: () => import('../views/User/Earnings')
    },
    {
      path: "phone",
      component: () => import('../views/User/Phone')
    },
    {
      path: "level",
      component: () => import('../views/User/Level')
    },
    {
      path: "real",
      component: () => import('../views/User/Real')
    },
    {
      path: "manager",
      component: () => import('../views/User/Manager')
    },
    {
      path: "service",
      component: () => import('../views/User/Service')
    }
  ]
}