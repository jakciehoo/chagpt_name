import baseConfig from '../util/baseConfig.js';
import util from '../util/util.js';

// 未获取token跳转的授权页面
const loginPage = '/pages/login/index'
 
// 接口请求提示语句
const msg = '获取中...'
 
const baseURL = '' 
const request = (urlType= '', url = '', type = '', data = {}, header = {
}) => {
	var that = this
	let  options = {}
    return new Promise((resolve, reject) => {
		
		options.url = `${baseConfig.baseUrl}` + url;
		options.timeout = 100000;
		options.method = type;
		options.header = {
		    'Content-type': 'application/json',
		    'Authorization': uni.getStorageSync('authorization')
		};
		options.data = data
        uni.request({
			...options,
			success: function (res) {
			    if (res.statusCode !== 200) {
			        reject(res.data.msg);
			    } else {
				
			       if (res.data.code == 200) {
						resolve(res.data);
			       }  else if (res.data.code == 401) {
			           uni.removeStorageSync('authorization')
			           uni.removeStorageSync('userInfo')
			           uni.navigateTo({
			           	url: '/pages/main/login/login'
			           })
			        } else if (res.data.code == 500) {
						console.log('状态码500',res.data)
			            resolve(res.data);
			        }  else {
			           uni.showToast({
			            title: '请先登录',
			           	icon: 'error',
			             duration: 2000,
			           	success: () => {
			           	}
			           });
			        }
			    }
			},
			fail: function (err) {
				uni.showModal({
				 title: '网络繁忙,请稍后再试',
				 showCancel: false,
				  duration: 2000,
				});
				
			}
        })
    });
	
}
export default request