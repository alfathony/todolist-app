import Vue from "vue"
import VueRouter from "vue-router"
import TodoIndex from "./pages/todo/Index.vue"
import TodoAdd from "./pages/todo/Add.vue"
import TodoDetail from "./pages/todo/Detail.vue"
import MovieIndex from "./pages/movie/Index.vue"
import HomeIndex from "./pages/home/Index.vue"

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: HomeIndex,
            name: 'home.index'
        },
        {
            path: '/todos',
            component: TodoIndex,
            name: 'todo.index'
        },
        {
            path: '/todos/detail/:id',
            component: TodoDetail,
            name: 'todo.detail'
        },
        {
            path: '/todo/add',
            component: TodoAdd,
            name: 'todo.add'
        },
        {
            path: '/movies',
            component: MovieIndex,
            name: 'movie.index'
        }
    ]
});

export default router
