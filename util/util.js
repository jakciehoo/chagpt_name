var util = {};
import request from "@/request/request.js";
util.login = function() {
		return new Promise(function(resolve, reject) {
			var sid = wx.getStorageSync('sid')
			wx.login({
				success: function(e) {
					var code = e.code
					util.request({
						url: '/authorization/wx/registerOrLogin',
						data: {
							code: code
						}
					}).then(res => {
						wx.setStorageSync('token', res.data.token)
						resolve()
					}).catch(res => {
						util.message(res.message, 'error', function() {
							setTimeout(() => {
								util.login()
							}, 1000)
						})
					})
				}
			})
		})
	},
	/*
	 * 提示信息
	 * type 为 success, error 当为 success,loadding  时，为toast方式，否则为模态框的方式
	 */
	util.message = function(title, type = 'none', callback = null) {
		if (!title) {
			return true;
		}
		if (type == 'success') {
			wx.showToast({
				title: title,
				icon: 'success',
				duration: 2000,
				mask: false,
				complete: function() {
					if (callback && typeof callback == 'function') {
						setTimeout(function() {
							callback()
						}, 1800);
					}
				}
			});
		} else if (type == 'none') {
			wx.showToast({
				title: title,
				icon: 'none',
				duration: 2000,
				mask: false,
				complete: function() {
					if (callback && typeof callback == 'function') {
						setTimeout(function() {
							callback()
						}, 1800);
					}
				}
			});
		} else if (type == 'error') {
			wx.showModal({
				title: '系统提示',
				content: title,
				showCancel: false,
				complete: function() {
					if (callback && typeof callback == 'function') {
						callback()
					}
				}
			});
		} else if (type == 'loadding') {
			uni.showLoading({
				title: title,
				mask: true
			});
		}
	}

util.queryToArr = function(str) {
	let result = [];
	let kv = [];
	let paramArr = str.split('&');
	for (let i in paramArr) {
		kv = paramArr[i].split('=');
		result[kv[0]] = kv[1];
	}
	return result;
}


util.isBlank = function(value) {
	if (value === undefined || value === null || value === '') {
		return true;
	} else {
		return false;
	}
}

util.isNotBlank = function(value) {
	if (value === undefined || value === null || value === '') {
		return false;
	} else {
		return true;
	}
}

util.isLogin = function() {
	let value = uni.getStorageSync('authorization');
	if (value === undefined || value === null || value === '') {
		uni.navigateTo({
			url: '/pages/main/login/login'
		})
	}
}

util.getUserInfo = function() {
	request('', '/user/getUserInfo', 'GET', {}, {}).then(res => {
		if (res.code == 200) {
			uni.setStorageSync('userInfo', this.userInfo)
		}
	})
}

util.defaultAvatar = function() {
	return 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0';
}


util.getbaseConfig = function() {

	request('', '/yuan/ai/w/stream/configInfo', 'POST', {}, {}).then(res => {
		if (res.code == 200) {
			uni.setStorageSync('baseConfig', res.data)
		}
	})
}

//微信分享
util.shareWeXin = function(title, path, imageUrl) {
	uni.showActionSheet({
		itemList: ['分享到朋友圈', '分享给好友'],
		success(res) {
			if (res.tapIndex === 0) {
				uni.updateShareMenu({
					withShareTicket: true,
					success() {
						uni.share({
							provider: 'weixin',
							type: 5,
							scene:'WXSceneTimeline',
							title: title,
							path: path,
							imageUrl: util.defaultAvatar(),
							success() {
							},
							fail(e) {
							}
						})
					},
					
				})
			} else if (res.tapIndex === 1) {
				
				// 分享给好友 
				uni.share({
					provider: 'weixin',
					type: 5,
					title: title,
					path: path,
					imageUrl: imageUrl,
					success() {
					},
					fail(e) {
					}
				})
			}

		}
	})
	
}
util.navigategOTo = function(path) {
	uni.navigateTo({
		url: path
	})
}

util.lengthLimit = function(text,length){
	let returnStr = '';
	var len=text.length;
	       if(len>length){
	           var str="";
	           str=text.substring(0,length)+"......";
	           return  str; 
			  
	       }else{
			   return text;
		   }
}
module.exports = util
