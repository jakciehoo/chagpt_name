<template>
	<view>
		<image mode="aspectFill" class="topMainBg" src="../../../static/login_top_bg.png"></image>

		<view class="main">

			<view class="row position" style="margin-top: 20px;">
				<view class="title">
					登录
				</view>
			</view>

			<view class="logoBorder">
				<image mode="scaleToFill" radius="25rpx" src="../../../static/logo.jpeg" style="width:172rpx;height:172rpx"></image>
			</view>


			<view class="weChatName">
				{{weChatInfo.weichat_name}}
			</view>

			<view class="weChatDes">
				{{weChatInfo.weichat_desc}}
			</view>

			<view class="btn">
				<view class="comitBtn" @click="openLoginOrRegister(1)">
					登录
				</view>
			</view>
			<view class="reg" @click="openLoginOrRegister(2)">
				未注册账号？去注册>
			</view>
			<view style="display: flex;margin-top: 25px;">
				<view class="icon-agreement" style="margin-top: 4px;font-size: 12rpx;" @click="isAgree">
					<u-icon v-if="isagreeU" name="checkbox-mark" color="#2979ff" size="14"></u-icon>
				</view>
				<span style="color: #c7c7cc;">我同意</span>
				<span style="color: #007AFF;" @click="jumpPage('/pages/main/agreement/useReder')">《使用协议》</span>
				<span style="color: #c7c7cc;">和</span>
				<span style="color: #007AFF;" @click="jumpPage('/pages/main/agreement/userReder')">《用户协议》</span>
			</view>
			<view class="bbottom-login">
				<u-divider text="其他登陆方式" textColor="#c7c7cc" lineColor="#2979ff"></u-divider>
			</view>
			<view class="other-login-type">
				<view class="other" @click="openLoginOrRegister(3)">
					<u-icon name="phone" color="#2979ff" size="20"></u-icon>
				</view>

				<view class="other" @click="loginRequest()" style="margin-left: 20px;">
					<u-icon name="weixin-fill" color="#2979ff" size="20"></u-icon>
				</view>
			</view>

		</view>
		<u-popup :closeable="true" @close="closePop"
			customStyle="border-top-left-radius: 10px;border-top-right-radius: 10px;" mode="bottom" :show="popupShow">
			<view class="content">
				<view v-if="singFlag==1" class="text-title">账号密码登录</view>
				<view v-if="singFlag==2" class="text-title">注册</view>
				<view v-if="singFlag==3" class="text-title">验证码登录</view>
				<view class="login-body">
					<u--input v-model="loginForm.userName" placeholder="请输入账号" class="input u-flex align-center"
						prefixIcon="account-fill" prefixIconStyle="font-size: 24px;color: #007AFF"></u--input>

					<u--input v-if="singFlag==1 || singFlag==2" v-model="loginForm.passWord" placeholder="请输入密码"
						class="input u-flex align-center" prefixIcon="lock-fill"
						prefixIconStyle="font-size: 24px;color: #007AFF" :password="!isText">
						<template slot="suffix">
							<u-icon name="eye-fill" @click="changeType(false)" color="#007AFF" size="22" v-if="isText">
							</u-icon>
							<u-icon name="eye-off" @click="changeType(true)" color="#007AFF" size="22" v-else></u-icon>
						</template>
					</u--input>

					<u--input v-if="singFlag==2" v-model="loginForm.conPassWord" placeholder="请确认密码"
						class="input u-flex align-center" prefixIcon="lock-fill"
						prefixIconStyle="font-size: 24px;color: #007AFF" :password="!isText">
						<template slot="suffix">
							<u-icon name="eye-fill" @click="changeType(false)" color="#007AFF" size="22" v-if="isText">
							</u-icon>
							<u-icon name="eye-off" @click="changeType(true)" color="#007AFF" size="22" v-else></u-icon>
						</template>
					</u--input>
					<u--input v-if="singFlag==3" v-model="loginForm.valismsCode" placeholder="请输入验证码"
						class="input u-flex align-center" prefixIcon="chat-fill"
						prefixIconStyle="font-size: 24px;color: #007AFF">
						<template slot="suffix">
							<u-code ref="uCode" @change="codeChange" :seconds="aliyunSmsTimes" changeText="X秒重新获取"
								:keepRunning="keepRunning" uniqueKey="login"></u-code>

							<u-button style="background-color: #007AFF;color: #FFFFFF;" @tap="getCode" :text="smsTips"
								size="mini"></u-button>
						</template>
					</u--input>

				</view>
				<view @click="openVerify" v-if="singFlag==1 || singFlag==3" class="but-conmire">立即登录</view>
				<view @click="openVerify" v-if="singFlag==2" class="but-conmire">立即注册</view>
			</view>
		</u-popup>

		<Verify @success="verifySuccess" :mode="'pop'" :captchaType="'blockPuzzle'"
			:imgSize="{ width: '330px', height: '155px' }" ref="verify"></Verify>
	</view>
</template>

<script>
	import request from "../../../request/request.js";
	import util from "../../../util/util.js";
	// #ifndef MP-WEIXIN
	import Verify from "@/node_modules/Verifition/Verify";
	// #endif

	export default {
		// #ifndef MP-WEIXIN
		components: {
			Verify
		},
		// #endif

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
				loginForm: {
					userName: '',
					passWord: '',
					conPassWord: '',
					valismsCode: '',
					code: ''
				},
				show: false,
				isSelectImage: false,
				title: '',
				desc: '',
				loadTitle: true,
				isagreeU: false,
				popupShow: false,
				passwordIcon: true,
				isText: false, //后置图标
				singFlag: 0, //1标识登录,2标识注册,3表示验证码登录
				smsTips: "获取验证码",
				countdown: 0,
				keepRunning: true,
				aliyunSmsTimes: 60,
				userInfo: {}
			}
		},
		onLoad() {
			// #ifdef MP-WEIXIN
			uni.navigateTo({
				url: './login'
			})
			this.isLogin()
			this.getCacheContent()
			this.getStatusBarHeight()
			// #endif
		},
		methods: {
			codeChange(text) {
				this.smsTips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					uni.showLoading({
						title: '正在获取验证码'
					})
					request('', '/authorization/register/sendCmsCode', 'POST', this.loginForm, {}).then(res => {
						util.message(res.msg)
						if (res.code == 200) {
							this.$refs.uCode.start();
						}
					})
				}

			},
			getAliyunSmsTimes() {
				this.aliyunSmsTimes = uni.getStorageSync('baseConfig').aliyun_sms_times
			},
			closePop() {
				this.popupShow = false
			},
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
			changeType(flag) {
				this.isText = flag
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
			getUserInfo() {
				request('', '/user/getUserInfo', 'GET', {}, {}).then(res => {

					if (res.code == 200) {
						this.userInfo = res.data
						uni.setStorageSync('userInfo', this.userInfo)
						uni.switchTab({
							url: '../minefragment/minefragment'
						})
					} else {
						util.message("个人信息获取失败", 'error')
					}


				})
			},
			openLoginOrRegister(flag) {
				this.singFlag = flag
				if (!this.isagreeU) {
					util.message("请先阅读《使用协议》与《用户协议》");
					return;
				}
				if (util.isBlank(this.singFlag) || this.singFlag == 0) {
					util.message("请选择登陆方式");
					return;
				}
				this.popupShow = true
			},
			passwordLogin() {
				util.message("登陆中", "loadding")
				//校验
				if (util.isBlank(this.loginForm.userName) ||
					util.isBlank(this.loginForm.passWord)) {
					util.message("账号密码不可为空");
					return;
				}
				let param = {
					'code': this.loginForm.code,
					'username': this.loginForm.userName,
					'password': this.loginForm.passWord
				}
				request('', '/login', 'POST', param, {}).then(res => {
					console.log(res.token)
					if (res.code == 200) {
						uni.setStorageSync('authorization', res.token)
						this.getUserInfo()
					} else if (res.code == 500) {
						util.message(res.msg);
					} else {
						util.message("未知错误");
					}
					uni.hideLoading()
				})
			},
			register() {
				util.message("登陆中", "loadding")
				//校验
				if (util.isBlank(this.loginForm.userName) ||
					util.isBlank(this.loginForm.passWord)) {
					util.message("账号密码不可为空");
					return;
				}
				if (this.loginForm.passWord !== this.loginForm.conPassWord) {
					util.message("两次密码不相同");
					return;
				}
				let param = {
					'code': this.loginForm.code,
					'username': this.loginForm.userName,
					'password': this.loginForm.passWord,
					'confirmPassword': this.loginForm.conPassWord
				}
				request('', '/register', 'POST', param, {}).then(res => {
					if (res.code == 200) {
						this.singFlag = 1
					} else if (res.code == 500) {
						util.message(res.msg);
					} else {
						util.message("未知错误");
					}
					uni.hideLoading()
				})
			},
			smsCode() {
				util.message("登陆中", "loadding")
				//校验
				if (util.isBlank(this.loginForm.userName)) {
					util.message("账号不可为空");
					return;
				}
				if (util.isBlank(this.loginForm.valismsCode)) {
					util.message("验证码不可为空");
					return;
				}
				let param = {
					'code': this.loginForm.code,
					'userName': this.loginForm.userName,
					'valismsCode': this.loginForm.valismsCode
				}
				request('', '/authorization/register/smsLogin', 'POST', param, {}).then(res => {
					if (res.code == 200) {
						console.log(res)
						uni.setStorageSync('authorization', res.data.token)
						uni.setStorageSync('userInfo', res.data.userInfo)
						this.toUserCenter()
					} else if (res.code == 500) {
						util.message(res.msg);
					} else {
						util.message("未知错误");
					}
					uni.hideLoading()
				})
			},
			openVerify() {
				
				
				
				if (this.singFlag == 1) {
					//校验
					if (util.isBlank(this.loginForm.userName) ||
						util.isBlank(this.loginForm.passWord)) {
						util.message("账号密码不可为空");
						return;
					}
				} else if (this.singFlag == 2) {
					//校验
					if (util.isBlank(this.loginForm.userName) ||
						util.isBlank(this.loginForm.passWord)) {
						util.message("账号密码不可为空");
						return;
					}
					if (this.loginForm.passWord !== this.loginForm.conPassWord) {
						util.message("两次密码不相同");
						return;
					}
				} else if (this.singFlag == 3) {
					//校验
					if (util.isBlank(this.loginForm.userName)) {
						util.message("账号不可为空");
						return;
					}
					if (util.isBlank(this.loginForm.valismsCode)) {
						util.message("验证码不可为空");
						return;
					}
				} else {
					util.message("登陆方式错误", 'error')
				}
				
				
				
				this.$refs.verify.show();
			},
			verifySuccess(params) {
				//认证成功
				this.loginForm.code = params.captchaVerification;
				this.loginOrRegister(this.singFlag);
			},
			loginOrRegister(singFlag) {
				if (this.singFlag == 1) {
					this.passwordLogin()
				} else if (this.singFlag == 2) {
					this.register()
				} else if (this.singFlag == 3) {
					this.smsCode()
				} else {
					util.message("登陆方式错误", 'error')
				}
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
			loginRequest() {
				if (!this.isagreeU) {
					util.message("请先阅读《使用协议》与《用户协议》");
					return;
				}
				let redicturl = encodeURIComponent(uni.getStorageSync('baseConfig').wx_h5_redirect_uri);
				console.log(redicturl)
				let appid = uni.getStorageSync('baseConfig').wx_h5_appid;
				window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + appid +
					"&redirect_uri=" + redicturl + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
			},
		}
	}
</script>

<style >
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
		border-radius: 50px;
		margin-right: 8px;
	}

	.content {
		margin-top: 30px;
	}

	.text-title {
		font-size: 20px;
		margin: 0 30px 25px;
		font-weight: 700;
	}

	.login-body {
		margin-bottom: 40px;
	}

	.login-body .input {
		height: 50px;
		padding: 0 15px;
		background: #f7f7f7;
		border-radius: 8px;
		flex-direction: row;
		margin: 0 30px 20px;
		font-style: normal;
		font-size: 15px;
		font-family: Droid Sans Fallback;
	}

	.u-flex {
		display: flex;
		align-items: center;
	}

	.but-conmire {
		background: #007AFF;
		font-size: 17px;
		color: #fff;
		margin: 0 30px 20px;
		text-align: center;
		line-height: 45px;
		height: 45px;
		border-radius: 8px;
		font-weight: 700;
	}

	.reg {
		font-size: 13px;
		margin-top: 8px;
		color: #c7c7cc;
	}

	.bbottom-login {
		margin-top: 20px;
		width: 80%;
	}

	.other-login-type {
		display: flex;
	}

	.other-login-type .other {
		padding: 3px;
		border: 1px solid #2979ff;
		border-radius: 50%;
	}
</style>
