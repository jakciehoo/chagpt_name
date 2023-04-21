<template>
	<view>
		<view class="main">
			<image class="logoImg" src="../../../static/logo.png"></image>
			<view class="row text">
				你好！我是<view style="font-weight: 700;">元AI</view>
			</view>
			<view class="text">我可以回答你的任何问题</view>
			
			<view class="tips">违规微信社区规定发言将会被限制对话</view>
		</view>
		
		<view @click="toLogin" class="inputLogin">
			<view class="showText">请先登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toLogin(){
				uni.showToast({
					title:'登录'
				})
			}
		}
	}
</script>

<style>
page{
	background-color: #f6f6f6;
}
.showText{
	font-size: 30rpx;
	color: #898D99;
	background-color: white;
	border-radius: 12rpx;
	padding: 20rpx;
}
.inputLogin{
	background: #E5EBF1;
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 10rpx 20rpx;
}
.main{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.tips{
	font-size: 24rpx;
	color: #898D99;
	margin-top: 30rpx;
}
.logoImg{
	width: 210rpx;
	height: 210rpx;
}
.text{
	font-size: 44rpx;
	color:#3387FF ;
	margin-top: 20rpx;
}
	.row {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		width: 100%;

	}

</style>
