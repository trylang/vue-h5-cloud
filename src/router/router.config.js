/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/user/login'),
        meta: { title: '一键登录', keepAlive: false }
      },
      {
        path: '/code-login',
        name: 'CodeLogin',
        component: () => import('@/views/user/code-login'),
        meta: { title: '验证码登录', keepAlive: false }
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      }
    ]
  }
]
