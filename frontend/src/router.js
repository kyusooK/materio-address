
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import BasicCompanyManager from "./components/listers/BasicCompanyCards"
import BasicCompanyDetail from "./components/listers/BasicCompanyDetail"

import BoundedContext906ManagerManager from "./components/listers/BoundedContext906ManagerCards"
import BoundedContext906ManagerDetail from "./components/listers/BoundedContext906ManagerDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/basics/companies',
                name: 'BasicCompanyManager',
                component: BasicCompanyManager
            },
            {
                path: '/basics/companies/:id',
                name: 'BasicCompanyDetail',
                component: BasicCompanyDetail
            },

            {
                path: '/boundedContext906s/managers',
                name: 'BoundedContext906ManagerManager',
                component: BoundedContext906ManagerManager
            },
            {
                path: '/boundedContext906s/managers/:id',
                name: 'BoundedContext906ManagerDetail',
                component: BoundedContext906ManagerDetail
            },



    ]
})
