import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router)

const DEFAULT_TITLE = 'Это страница'

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/login'),
      meta: {
        title: 'Вход в личный кабинет',
        layout: 'free',
        login: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/register'),
      meta: {
        title: 'Регистрация',
        layout: 'free',
        login: false
      }
    },
    {
      path: '/',
      name: 'index',
      component: () => import('../views/index'),
      meta: {
        title: 'Статистика',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import('../views/clients'),
      meta: {
        title: 'Клиенты',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/services'),
      meta: {
        title: 'Услуги',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import('../views/reports'),
      meta: {
        title: 'Отчёты',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/settings'),
      meta: {
        title: 'Настройки',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/management/quotas',
      name: 'quotas',
      component: () => import('../views/management/quotas'),
      meta: {
        title: 'Квоты',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/management/booking',
      name: 'booking',
      component: () => import('../views/management/booking'),
      meta: {
        title: 'Бронирование',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/data',
      name: 'data',
      component: () => import('../views/data'),
      meta: {
        title: 'Данные',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/clients/hotel',
      name: 'hotel',
      component: () => import('../views/hotel'),
      meta: {
        title: 'Отель',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/management',
      name: 'management',
      component: () => import('../views/management'),
      meta: {
        title: 'management',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/management/data',
      name: 'data',
      component: () => import('../views/management/data'),
      meta: {
        title: 'data',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/ksr/1',
      name: 'ksr',
      component: () => import('../views/ksr/1'),
      meta: {
        title: 'ksr',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/ksr/2',
      name: 'ksr',
      component: () => import('../views/ksr/2'),
      meta: {
        title: 'ksr',
        layout: 'main',
        login: false
      }
    },
    {
      path: '/ksr/1',
      name: 'ksr',
      component: () => import('../views/ksr/2'),
      meta: {
        title: 'ksr',
        layout: 'main',
        login: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE
  })
  if (to.matched.some(record => record.meta.login)) {
    if (store.getters.isLogin) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
