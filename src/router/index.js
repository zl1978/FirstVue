import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import A1 from '../components/A1'
import A2 from '../components/A2'
import A3 from '../components/A3'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                name: 'a1',
                path: 'a1',
                component: A1
            }, {
                name: 'a2',
                path: 'a2',
                component: A2
            }, {
                name: 'a3',
                path: 'a3',
                component: A3
            }]
        }
    ]
})
