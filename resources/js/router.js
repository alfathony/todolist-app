import Vue from "vue"
import VueRouter from "vue-router"
import TodoIndex from "./pages/Index.vue"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: TodoIndex,
            name: 'todo.index'

        }
    ]
})

export default router
