import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
import Dnews from '../pages/Dnews'


Vue.use(VueRouter)

const router = new VueRouter({
    // 默认是hash模式，会在url中带有#,部署到服务器之后可以直接刷新访问 
    // 修改为history模式后，url更简洁无#，但部署服务器时需要后端配合，否则刷新时会报404错误
    // model: history,
    routes: [
        {
            meta: { title: '关于' },
            path: '/about',
            component: About
        },
        {
            meta: { title: '主页' },
            path: '/home',
            component: Home,
            children: [
                {
                    // 存放一下自定义的参数
                    meta: { isAuth: true, title: '信息' },
                    // children里的不加/
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            meta: { title: '消息' },
                            name: 'xiaoxi',
                            path: 'detail/:id/:title',
                            component: Detail,
                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
                            // props: { a: 1, b: 'hello' }
                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
                            // props: true
                            //props的第三种写法，函数
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                            },
                            // 独享路由守卫，只有只一个路由有用且之后前置路由
                            beforeEnter: (to, from, next) => {
                                if (localStorage.getItem('name') === 'wujian') {
                                    next()
                                } else {
                                    alert('无权限访问')
                                }
                            }
                        }
                    ]
                },
                {
                    meta: { isAuth: true, title: '新闻' },
                    path: 'news',
                    component: News,
                    children: [
                        {
                            meta: { title: '新闻内容' },
                            // 给路由起名字，但必须使用切换路由中的对象方式才能调用
                            name: 'xinwen',
                            // params参数使用前必须先站位
                            path: 'dnew/:id/:title',
                            component: Dnews
                        }
                    ]
                }
            ]
        }
    ]
})

// 前置路由守卫  在路由转换之前生效     在初始化和路由变化是起作用
router.beforeEach((to, from, next) => {
    // console.log('@@@', to, from);
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next();
        } else {
            alert('无权限访问')
        }
    } else {
        // 执行下一步代码，进入下一个路由对应的组件
        next();
    }
})

// 后置路由守卫   在路由转换之后生效   无next
router.afterEach((to, from) => {
    document.title = to.meta.title || '尚硅谷系统'
})

export default router;