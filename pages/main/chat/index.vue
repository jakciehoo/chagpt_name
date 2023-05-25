<template>
	<view>
		
		
		<!-- 空盒子用来防止消息过少时 拉起键盘会遮盖消息 -->
		<view :animation="anData" style="height:0;"></view>
		
		<!--  #ifdef H5 -->
			<view>
				<!-- 2.0.19支持autoBack，默认为false -->
		        <u-navbar
		            title="聊天中心"
		            :autoBack="true"
					:placeholder="true"
		        >
		        </u-navbar>
			</view>
			<!--  #endif -->
		
		<!-- 消息体 -->
		<scroll-view @click="ckAddScroolw()" scroll-with-animation scroll-y="true" @touchmove="hideKey"
			style="width: 750rpx;" :style="{'height':srcollHeight}" :scroll-top="go">
			<!-- 用来获取消息体高度 -->
			<view id="okk" scroll-with-animation>
				<!-- 消息 -->
				<view class="flex-column-start" v-for="(x,i) in msgList" :key="i">

					<!-- 用户消息 头像可选加入-->
					<view v-if="x.my" class="flex justify-end padding-right one-show  align-start  padding-top">
						<view class="flex justify-end" style="width: 400rpx;">
							<view class="margin-left padding-chat bg-cyan "
								style="border-radius: 35rpx;background:#cdeffe;color:#242526 ;">
								<text style="word-break: break-all;">{{x.msg}}</text>

								<view style="margin-top: 10px;">
									<u-icon @click="copyContent(x.msg)" name="order" color="#cfcfd1" size="22"></u-icon>
								</view>
							</view>
						</view>
						<image style="height: 75rpx;width: 75rpx;" class="chat-img margin-left" :src="userInfo.avatar"
							mode="aspectFill"></image>
					</view>
					<!-- 机器人消息 -->
					<view v-if="!x.my" class="flex-row-start margin-left margin-top one-show">
						<view class="chat-img flex-row-center">
							<image style="height: 75rpx;width: 75rpx;" :src="plat_logo" mode="aspectFit"></image>
						</view>
						<view class="flex" style="width: 500rpx;">
							<view class="margin-left padding-chat flex-column-start"
								style="border-radius: 35rpx;background-color: #f9f9f9;max-width: 250px;">
								<!-- <text   style="word-break: break-all;" >{{x.msg}}</text> -->
								<mp-html style="color: #000000" :selectable="true" markdown="markdown"
									:content="x.msg" />

								<!-- 消息模板 =>初次问候 -->
								<view class="flex-column-start gradient" v-if="x.type==1">
									<text
										style="color: #838383;font-size: 22rpx;margin-top: 15rpx;">请详细描述您要问的问题，例如:</text>
									<text @click="answer(item)" style="margin-top: 30rpx;"
										v-for="(item,index) in x.questionList" :key="index">{{item}}</text>
								</view>
								<view style="margin-top: 10px;">
									<u-icon @click="copyContent(x.msg)" name="order" color="#cfcfd1" size="22"></u-icon>
								</view>


								<!-- 消息模板 =>多个答案 -->
								<view class="flex-column-start gradient" v-if="x.type==2">
									<text style="color: #838383;font-size: 22rpx;margin-top: 15rpx;">猜你想问:</text>
									<!-- 连接服务器应该用item.id -->
									<text @click="answer(index)" style="margin-top: 30rpx;"
										v-for="(item,index) in x.questionList" :key="index">{{item}}</text>
								</view>


								<!-- 消息模板 => 无法回答-->
								<view class="flex-column-start" v-if="x.type==0">
									<text class="padding-top-sm gradient">提交意见与反馈</text>
									<text
										style="color: #838383;font-size: 22rpx;margin-top: 15rpx;">下面是一些常见问题,您可以点击对应的文字快速获取答案:</text>
									<text @click="answer(index)" class="gradient" style="margin-top: 30rpx;"
										v-for="(item,index) in x.questionList" :key="index">{{item}}</text>
									<view class="flex-row-start  padding-top-sm">
										<text class="my-neirong-sm">没有你要的答案?</text>
										<text class="padding-left" style="color: #1396c5;">换一批</text>
									</view>
								</view>


							</view>
						</view>
					</view>
				</view>
				<!-- loading是显示 -->
				<view v-show="msgLoad" class="flex-row-start margin-left margin-top">
					<view class="chat-img flex-row-center">
						<image style="height: 75rpx;width: 75rpx;" :src="plat_logo" mode="aspectFit">
						</image>
					</view>
					<view style="width: 500rpx;">
						<view class="loading">
							<view class="dot0"></view>
							<view class="dot1"></view>
							<view class="dot2"></view>
							<view class="dot3"></view>
							<view class="dot4"></view>
						</view>
					</view>
				</view>
				<!-- 防止消息底部被遮 -->
				<view style="height: 120rpx;"></view>
			</view>

		</scroll-view>

		<!-- 底部导航栏 -->
		<view @click="isToLogin()" class="flex-column-center" style="position: fixed;bottom: -190px;"
			:animation="animationData">
			<view class="bottom-dh-char flex-row-around" style="font-size: 55rpx;">
				<!-- vue无法使用软键盘"发送" -->
				<input v-model="msg" maxlength="-1" class="dh-input" :disabled="!isLoginStatus" type="text"
					style="background-color: #f0f0f0;font-size: 14px;" @confirm="sendMsg" confirm-type="search"
					placeholder-class="my-neirong-sm" :placeholder="placeholder" />
				<view @click="resetModel" class="cu-tag round" style="background-color: unset;padding: unset;">
					<image src="../../../static/reset.png" style="width: 52rpx;height: 52rpx;">
					</image>
				</view>
				<!-- 				<text @click="ckAdd" class="cuIcon-roundaddfill text-brown gradient"></text> -->
				<view @click="ckAdd" class="cu-tag round" style="background-color: unset;padding: unset;">
					<image src="../../../static/add.png" style="width: 52rpx;height: 52rpx;">
					</image>
				</view>
			</view>
			<!-- 附加栏(自定义) -->
			<view class="box-normal ">
				<u-row justify="space-between" customStyle="margin-bottom: 14px">
					<u-col span="3">
						<view @click="clickHistory()" class="tb-text">
							<image src="../../../static/history.png" style="width: 100rpx;height: 100rpx;">
							</image>
							<text>历史记录</text>
						</view>
					</u-col>
					<u-col span="3">
						<view class="tb-text">
							<u-button hover-class="none" class="button-none" open-type="share"
								customStyle="height: 100rpx;border-style: unset;">
								<image src="../../../static/mine_share_icon.png" style="width: 100rpx;height: 100rpx;">
								</image>
							</u-button>

							<text>分享朋友</text>
						</view>
					</u-col>
					<u-col span="3">
						<view class="tb-text">
							<u-button hover-class="none" class="button-none" open-type="contact"
								customStyle="height: 100rpx;border-style: unset;">
								<image src="../../../static/mine_tophone_icon.png"
									style="width: 100rpx;height: 100rpx;">
								</image>
							</u-button>

							<text>在线客服</text>
						</view>

					</u-col>
					<u-col @click="clickMore()" span="3">
						<view class="tb-text">
							<image src="../../../static/more.png" style="width: 100rpx;height: 100rpx;">
							</image>
							<text>更多</text>
						</view>
					</u-col>
				</u-row>
			</view>



		</view>
	</view>
</template>

<script>
	let socket = null;
	import request from "../../../request/request.js";
	import util from "../../../util/util.js";
	import websocket from "../../../util/websocket.js";

	import md from '../../../static/js/md';
	import mpHtml from '@/node_modules/mp-html/mp-html'
	// rpx和px的比率
	var l
	// 可用窗口高度
	var wh
	// 顶部空盒子的高度
	var mgUpHeight
	export default {
		computed: {
			md() {
				return md
			}
		},
		components: {
			mpHtml
		},
		onLoad(options) {
			// this.chatchWindowsHeight();
			this.initbaseConfig();
			uni.$on('onMessage', this.onMessage);
			this.firstAskMsg = options.msg;
			// 如果需要缓存消息缓存msgList即可
			// 监听键盘拉起
			// 因为无法控制键盘拉起的速度,所以这里尽量以慢速处理
			uni.onKeyboardHeightChange(res => {
				const query = uni.createSelectorQuery()
				query.select('#okk').boundingClientRect(data => {
					// 若消息体没有超过2倍的键盘则向下移动差值,防止遮住消息体
					var up = res.height * 2 - data.height - l * 110

					if (up > 0) {
						// 动态改变空盒子高度
						this.msgMove(up, 300)
						// 记录改变的值,若不收回键盘且发送了消息用来防止消息过多被遮盖
						mgUpHeight = up

					}
					// 收回
					if (res.height == 0) {
						this.msgMove(0, 0)
					}
				}).exec();
			})
			var query = uni.getSystemInfoSync()

			l = query.screenWidth / 750
			wh = query.windowHeight
			this.srcollHeight = query.windowHeight + "px"
		},
		onUnload() {
			socket.close()
		},
		data() {
			return {
				digId: 0, //对话ID
				plat_logo: '',
				msgLoad: false,
				anData: {},
				animationData: {},
				showTow: false,
				// 消息体,定义机器人初次的消息(或者自定义出现时机)
				// my->谁发的消息 msg->消息文本 type->客服消息模板类型 questionList->快速获取问题答案的问题列表
				msgList: [{
					my: false,
					msg: "你好，我是最牛逼的机器人,有什么您可以问我。",
					type: 1,
					questionList: ["我想要写一个50字关于花的诗句", "帮我写一个关于催债的律师函", "你觉得我帅吗"],
				}],
				msg: "",
				go: 0,
				srcollHeight: 0,
				userInfo: {},
				isLoginStatus: false,
				is_open_api: '',
				ai_chat_bot_api: '',
				open_api_key: '',
				changeAnswerTextContent: '',
				isReplyIng: false,
				placeholder: '暂时未登录,请登录!',
				baseConfig: {},
				firstAskMsg:""
			}
		},
		onHide() {
			this.ckAddScroolw()
			socket.close()
		},
		onShow() {
			this.updateDigId();
			this.initDigo();
			this.initSocket();
			this.initLogin();
			this.plat_logo = uni.getStorageSync('baseConfig').plat_logo;
		},
		methods: {
			updateDigId() {
				let that = this;
				that.digId = uni.getStorageSync('digId');
			},
			initDigo() {
				let that = this;
				if (util.isNotBlank(that.digId) && that.digId != 0) {
					that.msgList = [];
				}
				let param = {
					'sessionId': this.digId,
					'page': 1,
					'size': 20
				};
				//进行存储
				request('', '/cricleai/diglogueprocess/listDialogue', 'POST', param, {}).then(res => {
					if (res.code == 200) {
						const arr = res.rows;
						arr.forEach(item => {
							if (util.isNotBlank(item.askContent)) {
								that.msgList.push({
									"msg": item.askContent,
									"my": true
								})
							}   

							that.msgList.push({
								my: false,
								msg: item.answerContent,
								type: -1
							});
						});
						this.msgGo(1000)
						this.askFirstQuest()
					}
				})
			},
			initSocket() {
				socket = new websocket();
				socket.initSocketLogin();
			},
			onMessage(e) {
				try {
					if (e != '[DONE]' && e != 'isOnlineSucc') {
						let result = JSON.parse(e);
						if (util.isNotBlank(result.choices[0].delta.content)) {
							//首先判断是否回复中
							if (this.isReplyIng) {
								//添加机器人所说的话
								this.msgList.pop();
								//如果回复中
								this.insertChatSession(result.choices[0].delta.content);
							} else {
								this.isReplyIng = true;
								this.insertChatSession(result.choices[0].delta.content);
							}
						}
					} else {
						this.changeAnswerTextContent = ''
						this.isReplyIng = false
					}
				} catch (e) {
					this.isReplyIng = false
				}


			},
			insertChatSession(e) {
				this.changeAnswerTextContent = this.changeAnswerTextContent + e;
				this.msgLoad = false;
				this.msgList.push({
					my: false,
					msg: this.changeAnswerTextContent,
					type: -1
				});
				this.msgGo();
			},
			//历史信息
			resetChat() {
				let tbAnsweUser = uni.getStorageSync('tbAnsweUser'); //获取缓存内容
				if (tbAnsweUser) {
					let replyData = {};
					//进行存储
					request('', '/ai/reSetChat?openId=' + tbAnsweUser.answeUserOpenid, 'POST', replyData, {}).then(res => {
						if (res.code == 200) {
							uni.showToast({
								title: '重置成功',
								duration: 2000
							});
						}
					})
				} else {
					this.getUserProfile();
				}
			},
			//历史信息
			historyChat() {
				uni.showToast({
					title: '开发中',
					duration: 2000
				});
			},
			//复制
			copyContent(msg) {
				uni.setClipboardData({
					data: msg
				});
			},
			//初始化看是否登录
			initLogin() {
				let userInfo = uni.getStorageSync('userInfo');
				if (userInfo) {
					this.userInfo = userInfo;
					//此部设置用户信息,
					this.isLoginStatus = true
					this.placeholder = '请用简短的一句话描述您的内容'
				}
			},
			//是否登录
			isToLogin() {
				util.isLogin()
			},
			// 切换输入法时移动输入框(按照官方的上推页面的原理应该会自动适应不同的键盘高度-->官方bug)
			goPag(kh) {
				this.upTowmn(0, 250)
				if (this.keyHeight != 0) {
					if (kh - this.keyHeight > 0) {
						this.upTowmn(this.keyHeight - kh, 250)
					}

				}
			},
			// 移动顶部的空盒子
			msgMove(x, t) {
				var animation = uni.createAnimation({
					duration: t,
					timingFunction: 'linear',
				})

				this.animation = animation

				animation.height(x).step()

				this.anData = animation.export()
			},
			// 保持消息体可见
			msgGo(e) {
				let timel = 100;
				if (util.isNotBlank(e)) {
					timel = e;
				}
				const query = uni.createSelectorQuery()
				// 延时100ms保证是最新的高度
				setTimeout(() => {
					// 获取消息体高度
					query.select('#okk').boundingClientRect(data => {
						// 如果超过scorll高度就滚动scorll
						if (data.height - wh > 0) {
							this.go = data.height - wh
						}
						// 保证键盘第一次拉起时消息体能保持可见
						var moveY = wh - data.height + 200
						// 超出页面则缩回空盒子
						if (moveY - mgUpHeight < 0) {
							// 小于0则视为0
							if (moveY < 0) {
								this.msgMove(0, 200)
							} else {
								// 否则缩回盒子对应的高度
								this.msgMove(moveY, 200)
							}
						}

					}).exec();
				}, timel)
			},
			
			askFirstQuest() {
				setTimeout(() => {
					if (util.isNotBlank(this.firstAskMsg)) {
						var msg = '您是世界顶级起名大师，您可以先问我3个问题，然后请帮我' + this.firstAskMsg + '，感谢！'
						this.answer(msg)
					}
				}, 3000)
			},
			// 回答问题的业务逻辑
			answer(askItem) {
				// 这里应该传入问题的id,模拟就用index代替了
				this.msg = askItem;
				this.sendMsg();
			},
			sendMsg() {
				// 消息为空不做任何操作
				if (this.msg == "") {
					return 0;
				}
				// 显示消息 msg消息文本,my鉴别是谁发的消息(不能用俩个消息数组循环,否则消息不会穿插)
				// this.msgList.push({"msg":this.msg,"my":true})				
				// 保证消息可见
				// 回答问题
				this.msgKf(this.msg)
				// 清除消息
				this.msg = ""
			},
			msgKf(x) {
				// this.msgGo()
				this.onTextSend(x)
			},
			//发送消息
			onTextSend(x) {
				let that = this;
				let userInfo = uni.getStorageSync('userInfo');
				let checkData = {
					"userId": userInfo.userId,
				}
				request('', '/yuan/ai/w/stream/checkIsIng', 'GET', checkData, {}).then(res => {
					if (res.data == true) {
						//如果返回的是true,提示,正在查询请稍后重试
						uni.showToast({
							title: "正在回复中",
							icon: 'error',
							duration: 2000
						});
						return;
					} else if (res.code == 500) {
						uni.showToast({
							title: res.msg,
							icon: 'error',
							duration: 2000
						});
					} else {
						that.sendMessage(x, true);
					}
				})
			},
			// 发送消息
			sendMessage(msg, isAppend) {

				msg = msg.trim();

				if (!msg || msg == undefined || msg === null || msg === '') {
					uni.showToast({
						title: '发送内容不可为空',
						icon: 'error',
						duration: 2000
					});
					return;
				}
				if (isAppend) {
					//此步进行添加内容
					// 显示消息 msg消息文本,my鉴别是谁发的消息(不能用俩个消息数组循环,否则消息不会穿插)
					this.msgList.push({
						"msg": msg,
						"my": true
					})
					this.msgGo();
					this.requestChatApi(msg);
				}

			},
			requestChatApi(prompt) {
				let that = this;
				//跳转创建主题
				if (this.digId == 0) {
					wx.showToast({
						title: "请先新建/选择对话",
						icon: 'none',
						duration: 2000,
						mask: false,
						complete: function() {
							setTimeout(function() {
								socket.close()
								uni.switchTab({
									url: '/pages/main/rolefragment/rolefragment'
								})
								that.msgList.pop()
							}, 1800);
						}
					});
					return
				}
				// loading
				this.msgLoad = true;
				let urlPost = '/yuan/ai/w/stream/chatBot';
				let data = {
					"dialogueId": this.digId,
					"prompt": prompt,
				}
				request('', urlPost, 'POST', data, {}).then(res => {
					let msgerr = res.msg
					if (res.code == 500 && (msgerr.search("429") != -1)) {
						that.msgLoad = false;
						that.msgList.pop();
						util.message("访问太过频繁,请稍后重试", 'error');
					}else  if (res.code == 500 && (msgerr.search("not locked by current") != -1)) {
						that.msgLoad = false;
						that.msgList.pop();
						util.message("正在回复.." );
					}else if (res.code == 500) {
						util.message(msgerr, 'error', function() {
							setTimeout(() => {
								that.msgLoad = false;
								that.msgList.pop();
								if (msgerr.search("新建对话") != -1 ) {
									socket.close()
									uni.switchTab({
										url: '/pages/main/rolefragment/rolefragment'
									})
								}
							}, 1000)
						})
					}
				})

			},
			// 不建议输入框聚焦时操作此动画
			ckAdd() {
				if (!this.showTow) {
					this.upTowmn(-180, 350)
				} else {
					this.upTowmn(0, 200)
				}
				this.showTow = !this.showTow
			},
			ckAddScroolw() {
				if (this.showTow) {
					this.upTowmn(0, 200)
					this.showTow = !this.showTow
				}

			},
			hideKey() {
				uni.hideKeyboard()
			},
			// 拉起/收回附加栏
			upTowmn(x, t) {

				var animation = uni.createAnimation({
					duration: t,
					timingFunction: 'ease',
				})

				this.animation = animation

				animation.translateY(x).step()

				this.animationData = animation.export()
			},
			initbaseConfig() {
				util.getbaseConfig()
				this.baseConfig = uni.getStorageSync('baseConfig')
			},
			clickMore() {
				socket.close()
				uni.switchTab({
					url: '/pages/main/minefragment/minefragment'
				})

			},
			clickTask() {
				socket.close()
				uni.navigateTo({
					url: '/pages/main/joinvip/joinvip'
				})
			},
			resetModel() {
				socket.close()
				uni.switchTab({
					url: '/pages/main/rolefragment/rolefragment'
				})
			},
			clickHistory() {
				socket.close()
				uni.navigateTo({
					url: '/pages/main/chatList/chatList'
				})
			}

		}
	}
</script>

<style lang="scss">
	.bottom-dh-char {
		background-color: #f9f9f9;
		width: 750rpx;
		height: 110rpx;
		padding-left: 5rpx;
	}

	.center-box {
		width: 720rpx;
		padding-left: 25rpx;
	}

	.hui-box {
		width: 750rpx;
		height: 100%;

	}

	.dh-input {
		width: 620rpx;
		height: 65rpx;
		border-radius: 15rpx;
		padding-left: 20rpx;
		background-color: #FFFFFF;
	}

	.box-normal {
		width: 750rpx;
		height: 190px;
		background-color: #FFFFFF;
	}

	.tb-text view {
		font-size: 65rpx;
	}

	.tb-text text {
		font-size: 25rpx;
		color: #737373;
	}

	.chat-img {
		border-radius: 50%;
		// width: 100rpx;
		// height: 100rpx;
		width: 42px;
		height: 42px;
		background-color: #f7f7f7;
	}

	.padding-chat {
		padding: 17rpx 20rpx;
	}

	.tb-nv {
		width: 50rpx;
		height: 50rpx;
	}

	.top-new {
		background-color: #26B3A0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
	}

	.top-reset {
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 7px 15px;
		background-color: #fff;
		padding: 3px;
		border-radius: 5px;
		position: relative;
	}


	@keyframes jump {

		0%,
		80%,
		100% {
			transform: scale(0);
			background-color: #F9F9F9;
		}

		40% {
			transform: scale(1.0);
			background-color: #3186fb;
		}
	}

	.dot0,
	.dot1,
	.dot2,
	.dot3 {
		background: #417e5c;
		width: 30rpx;
		height: 30rpx;
		border-color: #464646;
		border-radius: 50%;
		display: inline-block;
	}

	.dot0 {
		animation: jump 1.3s -0.64s linear infinite;
	}

	.dot1 {
		animation: jump 1.3s -0.32s linear infinite;
	}

	.dot2 {
		animation: jump 1.3s -0.16s linear infinite;
	}

	.dot3 {
		animation: jump 1.3s linear infinite;
	}

	.loading {
		padding: 17rpx 20rpx;
	}

	// .gradient {
	// 	background: linear-gradient(100deg, #c399fe 0%, #3186fb 100%);
	// 	-webkit-background-clip: text;
	// 	color: transparent;
	// }

	.bg-color {
		background-color: unset !important;
		background-image: linear-gradient(100deg, #c399fe 0%, #3186fb 100%);
	}

	.flex-row-start {
		align-items: unset;
	}

	button::after {
		border: none;
	}

	.tb-text .u-button :hover {
		background-color: inherit !important;
		color: inherit;
		border-color: inherit;
	}
	.backImg {
		width: 18rpx;
		height: 30rpx;
		position: absolute;
		left: 0;
		margin-left: 20rpx;
		margin-top: 6rpx
	}
	.header .title {
		text-align: center;
		font-size: 31rpx;
		position: relative;
		font-weight: 600;
		color: #FFFFFF;
		width: 100vw;
	
		flex-direction: row;
		justify-content: center;
		align-items: center;
		/*  padding-top: 33px;
		    padding-bottom: 40px; */
	}
</style>
