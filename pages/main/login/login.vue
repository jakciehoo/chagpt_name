<template>
	<view>
		<image mode="aspectFill" class="topMainBg" src="../../../static/login_top_bg.png"></image>
		<view class="main">
			<view class="row position"
				:style="[statusBarHeight<40?{marginTop:2.5*statusBarHeight+'rpx'}:{marginTop:2.3*statusBarHeight+'rpx'}]">
				<!-- <image @click="back" class="backImg" mode="aspectFill" src="../../../static/back_icon.png"></image> -->
				<view class="title">
					登录
				</view>
			</view>
			<view class="logoBorder">
				<u--image radius="25rpx" :src="logoImg" width="172rpx" height="172rpx"></u--image>
			</view>

			<view class="weChatName">
				{{weChatInfo.weichat_name}}
			</view>
			<view class="weChatDes">
				{{weChatInfo.weichat_notice}}
			</view>

			<view class="btn">

				<view class="comitBtn" @click="loginRequest()">
					授权登录
				</view>
				<view class="cancelBtn" @click="backIndex">
					不同意
				</view>
			</view>
			<view style="display: flex;margin-top: 20px;">
				<view class="icon-agreement" style="margin-top: 4px;font-size: 12rpx;" @click="isAgree">
					<u-icon v-if="isagreeU" name="checkbox-mark" color="#2979ff" size="14"></u-icon>
				</view>
				我同意<span style="color: #007AFF;" @click="jumpPage('/pages/main/agreement/useReder')">《使用协议》</span>和<span
					style="color: #007AFF;" @click="jumpPage('/pages/main/agreement/userReder')">《用户协议》</span>
			</view>
		</view>
	</view>
</template>

<script>
	import request from "../../../request/request.js";
	import util from "../../../util/util.js";
	export default {
		data() {
			return {
				avatarUrl: util.defaultAvatar(),
				nickname: '',
				statusBarHeight: 0,
				logoImg: 'https://yuan-ai.oss-cn-beijing.aliyuncs.com/logo.png',
				weChatInfo: {
					weichat_name: '',
					weichat_notice: ''
				},
				show: false,
				isSelectImage: false,
				title: '',
				desc: '',
				loadTitle: true,
				isagreeU: false
			}
		},
		onLoad() {
			// #ifndef MP-WEIXIN
				uni.navigateTo({
					url:'./login_h5'
				})
			// #endif
			this.isLogin()
			this.getCacheContent()
			this.getStatusBarHeight()
		},
		methods: {
			getCacheContent() {
				request('', '/yuan/ai/w/stream/configInfo', 'POST', {}, {}).then(res => {
					if (res.code == 200) {
						this.weChatInfo = res.data;
						uni.setStorageSync('baseConfig', res.data)
					}
				})
			},
			toUserCenter() {
				uni.switchTab({
					url: '/pages/main/minefragment/minefragment'
				})
			},
			isLogin() {
				if (util.isNotBlank(uni.getStorageSync('authorization'))) {
					this.toUserCenter()
				}
			},
			/**
			 * 返回上一页
			 */
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			backIndex() {
				uni.switchTab({
					url: '/pages/main/index/index'
				})
			},
			jumpPage(e) {
				uni.navigateTo({
					url: e
				})
			},
			open() {
				// console.log('open');
			},
			isAgree() {
				if (this.isagreeU) {
					this.isagreeU = false
				} else {
					this.isagreeU = true
				}
			},
			close() {
				this.show = false
				// console.log('close');
			},
			getStatusBarHeight() {
				this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			},
			onChooseAvatar(e) {
				this.avatarUrl = e.detail.avatarUrl
				this.isSelectImage = true
			},
			//登录用户,获取用户的信息
			loginRequest() {
				
			if (!this.isagreeU) {
				util.message("请先阅读《使用协议》与《用户协议》");
			   return;
			}
			// #ifdef MP-WEIXIN
			let that = this;
				util.message("登录中", "loadding")
				uni.login({
					success(res) {
						if (res.code) {
							that.loginJwt(res.code)
						} else {
							uni.hideLoading()
							util.message("登录失败", 'error')
						}
					},
					fail(res) {
						uni.hideLoading()
					}
				})
			// #endif
			},
			loginJwt(jsCode) {
				let param = {
					'jsCode': jsCode,
					'inviteCode': uni.getStorageSync('invitationCode')
				}
				request('', '/authorization/wx/registerOrLogin', 'POST', param, {}).then(res => {
					if (res.code == 200) {
						uni.setStorageSync('authorization', res.data.token)
						uni.setStorageSync('userInfo', res.data.userInfo)
						this.toUserCenter()
					} else {
						util.message("登录失败,请重试", 'error')
					}
					uni.hideLoading()
				})
			},
		}
	}
</script>

<style scoped>
	page {
		background: #FFFFFF;
	}



	/* /deep/.u-popup__content { 
        background-color: #00000000 !important;
    } */
	.head {
		/* box-shadow: 0rpx 0rpx 12rpx 0rpx rgba(0,0,0,0.15); */
		border-radius: 50%;
		/* width: 153rpx; */
		margin-top: 15rpx;
		/* height: 153rpx; */
		position: relative;
	}
	.photoBorder {
		z-index: 10;
		position: absolute;
		bottom: 0;
		right: 0;
		width: 37.5rpx;
		height: 37.5rpx;
		text-align: center;
		border-radius: 50%;
		left: 72px;
		background: linear-gradient(0deg, #599EFF, #C399FF);
	}

	.photoIcon {
		width: 22rpx;
		height: 17rpx;
	}

	.dialog {
		width: 80vw;
		background-color: #ffffff;
		padding: 50rpx 32rpx;
		display: flex;
		border-radius: 18rpx;
		flex-direction: column;
		align-items: center;
		/* position: relative; */
	}

	.dialogComitBtn {
		width: 320rpx;
		background: #3388FF;
		border-radius: 6rpx;
		font-size: 27rpx;
		height: 56rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		justify-content: center;
		color: white;
	}

	.closeImg {
		right: 0;
		width: 18rpx;
		height: 18rpx;
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.comitBtn {
		width: 45%;
		background: #3388FF;
		border-radius: 12rpx;
		font-size: 35rpx;
		font-weight: 500;
		padding: 25rpx;
		text-align: center;
		color: white;
	}

	.cancelBtn {
		width: 45%;
		margin-top: 27rpx;
		background: #ffffff;
		border-radius: 12rpx;
		font-size: 35rpx;
		font-weight: 500;
		text-align: center;
		padding: 25rpx;
		border: #494A4C solid 1.8rpx;
		color: #494A4C;
	}

	.btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 170rpx;
		width: 100%;
	}

	.weChatDes {
		font-size: 27rpx;
		color: #494A4C;
		width: 50%;
		text-align: center;
		line-height: 31rpx;
		margin-top: 16rpx;
	}

	.weChatName {
		font-size: 35rpx;
		font-weight: 700;
		color: #14171A;
		margin-top: 25rpx;
	}

	.topMainBg {
		width: 100%;
		height: 410rpx;
	}

	.main {
		position: absolute;
		width: 100%;
		top: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}

	.backImg {
		width: 16rpx;
		z-index: 999;
		height: 28rpx;
		margin-left: 18rpx;
	}

	.position {
		position: relative;
		width: 100%;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.title {
		position: absolute;
		top: 0;
		width: 100%;
		text-align: center;
		font-size: 35rpx;
		font-weight: 500;
		color: white
	}

	.logoBorder {
		border: #FFFFFF solid 5rpx;
		border-radius: 25rpx;
		width: max-content;
		margin-top: 190rpx;
	}

	.icon-agreement {
		width: 14px;
		height: 14px;
		border: 1px solid #007AFF;
		border-radius: 5px;
	}
</style>
