<template>
	<view class="contant">
		<view class="notice-c">
			<view class="padd">
				<u-notice-bar bgColor="#F7FBFF" color="#3387FF" fontSize="12" :text="weichat_notice"></u-notice-bar>
			</view>
		</view>
		<view class="main">
			<image class="logoImg" src="https://yuan-ai.oss-cn-beijing.aliyuncs.com/logo-index.png"></image>
			<view class="row text">
				你好！我是<view style="font-weight: 700;">元AI</view>
			</view>
			<view class="text">我可以回答你的任何问题</view>
			<view class="loginIndex">
				<u-tag  @click="startDig()" color="#ffffff" borderColor="#3d89ff" bgColor="#3d89ff" text="开始对话" plain size="large" type="warning"></u-tag>
			</view>

		</view>
		<view class="rule">违规微信社区规定发言将会被限制对话</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				weichat_notice: uni.getStorageSync('baseConfig').weichat_notice
			}
		},
		methods: {
			startDig() {
				uni.switchTab({
					url:'/pages/main/chat/index'
				})
			}
		},
		onLoad(options) {
			uni.setStorageSync('invitationCode', options.intivateCode);
		}
	}
</script>

<style>
	page {
		background-color: #F7FBFF;
	}

	.showText {
		font-size: 30rpx;
		color: #898D99;
		background-color: white;
		border-radius: 12rpx;
		padding: 20rpx;
	}

	.rule {
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 10rpx 20rpx;
		font-size: 24rpx;
		color: #898D99;
		text-align: center;
	}

	.main {
		margin-top: 200rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* height: 100vh; */
	}

	.tips {}

	.logoImg {
		width: 210rpx;
		height: 210rpx;
	}

	.text {
		font-size: 44rpx;
		color: #3387FF;
		margin-top: 20rpx;
	}

	.row {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		width: 100%;

	}

	.notice-c {
		margin: 0 auto;
		margin-top: 10px;
		width: 90%;
		border: 1px solid #3387FF;
		border-radius: 10px;
	}

	.padd {
		padding: 4px;
	}
	.loginIndex{
		margin-top: 60rpx;
	}
</style>
