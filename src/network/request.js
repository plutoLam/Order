import axios from 'axios'
export function request(config){
	const instance = axios.create({
		baseURL: 'http://127.0.0.1:8000'
	})
	return instance(config)
}
	// 2.axios的拦截器
	// 2.1.请求拦截的作用
// 	instance.interceptors.request.use(config => {
// 	  console.log(config);
// 	  // 1.比如config中的一些信息不符合服务器的要求
	
// 	  // 2.比如每次发送网络请求时, 都希望在界面中显示一个请求的图标
	
// 	  // 3.某些网络请求(比如登录(token)), 必须携带一些特殊的信息
// 	  return config
// 	}, err => {
// 	  // console.log(err);
// 	})
	
// 	// 2.2.响应拦截
// 	instance.interceptors.response.use(res => {
// 	  // console.log(res);
// 	  return res.data
// 	}, err => {
// 	  console.log(err);
// 	})
	
// 	return instance(config)
// }