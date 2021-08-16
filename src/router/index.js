import Vue from 'vue';
import VueRouter from 'vue-router'
const Index = () => import('views/index/Index')
const Home = () => import('views/home/Home')
const Submit = () => import('views/submit/Submit')
const SubmitOrder = () => import('components/submit/SubmitOrder')
const PayOrder = () => import('components/submit/PayOrder')

Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: '/index'
	}, 
	{
		path: '/index',
		component: Index
	},
  {
		name:'home',
		path: '/home',
		component: Home
	},
	{
		path: '/submit',
		component: Submit,
		children:[
			{
				name:'submitorder',
				path:'submitorder',  //子路由不能加斜杠
				component:SubmitOrder
			},
			{
				name:'payorder',
				path:'payorder',
				component:PayOrder
			},
			
		]
	},

]

const router = new VueRouter({
	routes,
	mode: 'history'
})

export default router
