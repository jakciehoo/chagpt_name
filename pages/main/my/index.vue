<template>
	<view>
		<view style="width: 100px;height: 100px;"></view>

		<button @click="getUserProfile()">登录</button>
		<input v-model="content" />
		<button @click="send()">登录</button>
		<text>{{message}}</text>
				
	</view>

</template>

<script>
	import request from "../../../request/request.js";
		import websocket from "../../../util/websocket.js";
		let socket = null;
	export default {
		data() {
			return {
				message:"等待回复",
				title: 'Hello',
								socketOpen: false,
								socketMsgQueue: [],
								loginUserId: '', //当前登录的用户id
								content: '你好', //发送的内容
								msgList: []
			}
		},

		onLoad() {
			  // socket = new websocket();
			 // socket.initSocketLogin();
			  // let that = this
			  // let userInfo =  uni.getStorageSync('userInfo')
			  // 			this.loginUserId = userInfo.userId
			  // 			//页面加载后，建立websocket连接
			  // 			uni.connectSocket({
			  // 				url: 'ws://localhost:8081/websocket/chat/' + this.loginUserId,
					// 		  header: {
					// 		    'Content-Type': 'text/event-stream',
					// 		    'Authorization': uni.getStorageSync('authorization')
					// 		  },
					// 		  success: (res) => {
					// 		    console.log('WebSocket连接成功', res);
					// 		  },
					// 		  fail: (res) => {
					// 		    console.error('WebSocket连接失败', res);
					// 		  }
			  // 			});
			   
			  // 			uni.onSocketOpen(function(res) {
					// 		console.log("111",res)
			  // 				that.socketOpen = true;
			  // 				for (var i = 0; i < that.socketMsgQueue.length; i++) {
								
			  // 					that.sendSocketMessage(that.socketMsgQueue[i]);
			  // 				}
			  // 				that.socketMsgQueue = [];
			  // 			});
			  // 			uni.onSocketMessage(function(res) {
					// 		if (res.data != '[DONE]' && res.data != 'conn_success') {
					// 			//获取到信息
					// 			let uniWord =   res.data
					// 			if (typeof uniWord !== 'undefined' && uniWord !== null && uniWord.trim() !== '') {
					// 			 that.message = that.message  + uniWord;
					// 			}
					// 			//单字
					// 			// try{
					// 			// 	let words =  JSON.parse(jsonStr);
									
					// 			// 	let uniWord =  words.choices[0].delta.content
					// 			// 	if (typeof uniWord !== 'undefined' && uniWord !== null && uniWord.trim() !== '') {
					// 			// 	 that.message = that.message  + uniWord;
					// 			// 	}
					// 			// }catch (e) {
									
					// 			// }	
					// 		}
			  // 			});
			// uni.$on('onMessage',this.getData1)  

		


		},
		
		methods: {
						send() {
							this.sendSocketMessage(this.content)
						},
						sendSocketMessage(msg) {
							if (this.socketOpen) {
								uni.sendSocketMessage({
									data: msg
								});
							} else {
								this.socketMsgQueue.push(msg);
							}
						},
						


		//登录用户,获取用户的信息
		getUserProfile(e) {
			uni.switchTab({
				url:"../minefragment/minefragment"
			})
			// let that = this;
			// wx.login({
			//   success (res) {
			// 	if (res.code) {
			// 		that.loginJwt(res.code)
			// 	} else {
			// 	  console.log('登录失败！' )
			// 	}
			//   }
			// })	
		  },
		  loginJwt(jsCode){
			  request('', '/authorization/wx/registerOrLogin?jsCode='+jsCode, 'POST', {}, {}).then(res => {
				  if(res.code==200){
					  console.log("token设置成功了")
					  uni.setStorageSync('authorization',res.data.token)
					  uni.setStorageSync('userInfo',res.data.userInfo)
				  }else{
					  console.log("fail了")
				  }
			  	console.log( )
			  })
		  },
		  getData1(e){
		  		console.log("页面传值",e) 
		  },
		
		}
	}
</script>

<style>
</style>
<style lang="scss" scoped>
	
</style>
