import Vue from 'vue'
import VueRouter from 'vue-router'
import EmployeeList from './components/EmployeeList'
import EmployeeForm from './components/EmployeeForm'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: EmployeeList, name: 'EmployeeList' },
    { path: '/form', component: EmployeeForm, name: 'EmployeeForm' }
  ]
})
export default router