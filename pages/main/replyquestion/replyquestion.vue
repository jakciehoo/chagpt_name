<template>
	<view>
		<view class="cloum">
			<view >
				<view class="row" style="justify-content: flex-end; margin-top: 30rpx;">
					<view class='dialog u-tri'>
						{{askContent}}
					</view>
					<image class="headImg" src="../../../static/logo.png"></image>
				</view>
			</view>
			<view style="margin-bottom: 100rpx;">
				<view class="row" style="  margin-top: 30rpx;">
					<image class="headImg" src="../../../static/logo.png"></image>
					<view class='leftDialog leftU-tri'>
						<view v-if="isLoadding">
							<view class="loading">
								<view class="dot0"></view>
								<view class="dot1"></view>
								<view class="dot2"></view>
								<view class="dot3"></view>
								<view class="dot4"></view>
							</view>
						</view>
						<mp-html style="color: #000000" :selectable="true" markdown="markdown" :content="changeAnswerTextContent" />
					</view>

				</view>
			</view>
		</view>


		<view class="bottomAnswer">
			<button class="shareBtn" open-type="share">分享给好友</button>
			<button @click="copyContent" class="copyBtn">复制问题答案</button>
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
	export default {
		computed: {
			md() {
				return md
			}
		},
		components: {
			mpHtml
		},
		data() {
			return {
				isLoadding:true,
				copyData: '',
				askContent: '',
				isReplyIng: false,
				changeAnswerTextContent: '',
				text11:'asasasasasasabc我爱你'
			}
		},
		onLoad(options) {
			//跨页面传递信息
			uni.$on('onMessage', this.onMessage);
			let item = JSON.parse(decodeURIComponent(options.askContent))
			this.askContent = item.askContent;
			this.aksContent(this.askContent)
		},
		methods: {
			insertChatSession(e) {
				this.changeAnswerTextContent = this.changeAnswerTextContent + e;
			},
			initSocket() {
				socket = new websocket();
				socket.initSocketLogin();
			},
			copyContent() {
				let that = this
				uni.setClipboardData({
					data: that.copyData,
					success: function() {
						uni.showToast({
							title: '已复制内容到剪贴板'
						})
					}
				});
			},
			onMessage(e) {
				try {
					if (e != '[DONE]' && e != 'isOnlineSucc') {
						this.isLoadding = false
						let result = JSON.parse(e);
						if (util.isNotBlank(result.choices[0].delta.content)) {
							//首先判断是否回复中
							if (this.isReplyIng) {
								//如果回复中
								this.insertChatSession(result.choices[0].delta.content);
							} else {
								this.isReplyIng = true;
								this.insertChatSession(result.choices[0].delta.content);
							}
						}
					} else {
						this.isReplyIng = false
					}
				} catch (e) {
					this.isReplyIng = false
				}
			},
			aksContent(e) {
				let text11a = this.text11;
				let param = {
					prompt: e
				}
				//进行存储
				request('', '/yuan/ai/w/stream/chat', 'POST', param, {}).then(res => {
					socket.close()
					let msgerr = res.msg
					if (res.code == 500 && (msgerr.search("429") != -1)) {
						util.message("访问太过频繁,请稍后重试", 'error', function() {
							setTimeout(() => {

								uni.switchTab({
									url:'/pages/main/rolefragment/rolefragment'
								})
							}, 1000)
						});
						
					
					}
				})
			}
		},
		onHide() {

			socket.close()
		},
		onShow() {
			this.initSocket();
		}
	}
</script>

<style>
	page {
		background-color: #f6f6f6;
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

	.copyBtn {
		width: 40%;
		border: 1 solid #3387FF;
		border-radius: 12rpx;
		font-size: 38rpx;
		height: 72rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		background-color: #3387FF;
		color: #ffffff;
	}

	.shareBtn {
		height: 72rpx;
		width: 42%;
		display: flex;
		align-items: center;
		justify-content: center;
		border: 1 solid #3387FF;
		border-radius: 12rpx;
		font-size: 38rpx;
		font-weight: 500;
		color: #3387FF;
	}

	.rowBtn {
		position: absolute;
		bottom: 100rpx;
		width: 100%;
	}

	.cloum {
		display: flex;
		flex-direction: column;
	}

	.headImg {
		width: 82rpx;
		height: 82rpx;
		border-radius: 50%;
		margin-left: 12rpx;
		margin-right: 12rpx;
	}

	.chatItem {

		padding-left: 20rpx;
		padding-top: 20rpx;
	}

	.row {

		display: flex;
		flex-direction: row;
		align-items: top;
		z-index: 9;
	}

	.dialog {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;

		max-width: 450rpx;
		background-color: white;
		border-radius: 12rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 10rpx;
		margin-right: 10rpx;
		margin-right: 10rpx;
		margin-top: 10rpx;


		padding-bottom: 10rpx;
		z-index: 2;
	}

	.u-tri::before {
		position: absolute;
		right: -4px;
		top: 5px;
		content: '';
		width: 20px;
		height: 20px;
		border-style: solid;
		border-width: 2px;
		border-color: white;
		border-radius: 6px;
		background-color: white;
		transform: rotate(45deg);
		z-index: -1;
	}

	.leftDialog {
		position: relative;
		display: inline-block;

		margin-top: 10rpx;
		max-width: 450rpx;
		background-color: #CCE1FF;
		padding-left: 20rpx;
		padding-right: 20rpx;
		padding-top: 10rpx;
		margin-left: 10rpx;
		border-radius: 12rpx;
		margin-right: 10rpx;
		padding-bottom: 10rpx;
		z-index: 2;
	}

	.leftU-tri::before {
		position: absolute;
		left: -4px;
		top: 5px;
		content: '';
		width: 20px;

		height: 20px;
		border-style: solid;
		border-width: 2px;
		text-align: center;
		border-color: #CCE1FF;
		border-radius: 6px;
		background-color: #CCE1FF;
		transform: rotate(45deg);
		z-index: -1;
	}

	.bottomAnswer {
		z-index: 9;
		position: fixed;
		display: flex;
		z-index: 9;
		bottom: 30rpx;
		width: 100%;
	}
</style>
