import {request} from './request.js'

export function getRecommend(){
	return request({
		url:'/order/api/recommend'
	});
}

export function getGoods(){
	return request({
		url:'/order/api/goods'
	});
}

export function getCategory(){
	return request({
		url:'/order/api/category'
	});
}