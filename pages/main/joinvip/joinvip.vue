<template>
	<view>
		<view>
			<image class="topBg" mode="aspectFill" src="../../../static/mine_top_bg.png"></image>
			<view class="position_top">
				<view class="header">
					<!-- <view class="top"></view> -->
					<view class="row position"
						:style="[statusBarHeight<40?{marginTop:2.6*statusBarHeight+'rpx'}:{marginTop:2.3*statusBarHeight+'rpx'}]">
						<view class="title">
							<image @click="backPage" class="backImg" src="../../../static/back_icon.png"></image>会员充值
						</view>
						<view class="mineInfo">
							<view class="row userRow">
								<u-avatar :src="userInfo.avatar" shape="circle" size="80px"></u-avatar>
								<view style="margin-left: 30rpx; text-align: left;">
									<view class="row">
										<view class="userName">{{userInfo.nickName}}
										</view>

										<view class="vipTip">
											<image src="../../../static/mine_vip_icon.png"
												style="width: 132rpx;height: 38rpx;">
											</image>
											<view v-if="baseConfig.is_open_num=='0'" class="vipText">限时免费</view>
											<view v-else-if="userInfo.vipType==1" class="vipText">按次计算</view>
											<view v-else-if="userInfo.vipType==2" class="vipText">按时计算</view>

										</view>
									</view>
									<view v-if="baseConfig.is_open_num=='0'" class="userDes">问答:无限制</view>
									<view v-else-if="userInfo.vipType==1" class="userDes">问答次数:{{userInfo.blanceNum}}
									</view>
									<view v-else-if="userInfo.vipType==2" class="userDes">
										问答时长(分钟):{{blanceDateNum(userInfo.blanceDate)}}</view>
								</view>
							</view>


							<view class="row">
								<view class="topCheck" @click="changeType(1)">
									<view v-if="type==1" class=" surText">
										超级VIP
									</view>
									<view v-if="type==2" class=" unsurText">
										超级VIP
									</view>
								</view>
								<view class="topCheck" @click="changeType(2)">
									<view v-if="type==2" class=" soText">
										普通VIP
									</view>
									<view v-if="type==1" class=" unsoText">
										普通VIP
									</view>
								</view>
							</view>

							<view class="topRound">
								<view class="role-model">
									<!-- 	<view v-for="(item,index) in priceList" class="role" :key="index">
									<view @click="checkItem(index)">
											<view v-if="item.check" class="selectItem">
												<view class="itemTitle">
													{{item.title}}
												</view>
												<view class="row selectprice">
													<view style="font-size: 36rpx;">￥</view>
													<view class="priceNum">{{item.price}}</view>
												</view>
												<view class="oldPirce">原价￥{{item.oldprice}}元</view>
											</view>
											<view v-if="!item.check" class="unselectItem">
												<view class="itemTitle">
													{{item.title}}
												</view>
												<view class="row unselectprice">
													<view style="font-size: 36rpx;">￥</view>
													<view class="priceNum">{{item.price}}</view>
												</view>
												<view class="oldPirce">原价￥{{item.oldprice}}元</view>
											</view>
										</view>
									</view> -->
		<!-- 							<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text="暂无套餐">
									</u-empty> -->
								</view>

								<!-- <view class="tips">不限次聊天, 元Al协助工作更快落地</view> -->

								<view class="line"></view>

								<view class="cardTitle">卡密充值</view>

								<view class="cardInput row">
									<input class="cardInputText" placeholder="请输入32位卡密"
										placeholder-class="cardInputPlace" v-model="intivateCard" />
									<view class="getBtn" @click="useIntivateCard">充值</view>
								</view>

								<button hover-class="none" open-type="contact" class="row kfRow" @click="aboutUs">
									<image src="../../../static/aboutus_icon.png" class="kfImg"></image>
									<view class="aboutUs">请联系客服获取（Q群:575451625）</view>
								</button>

								<!-- 								<view class="row kfRow" @click="aboutUs">
									<image src="../../../static/aboutus_icon.png" class="kfImg"></image>
								
									<view class="aboutUs">请联系客服获取</view>
								</view> -->
							</view>

							<view  @click="useIntivateCard" class="bule_btn">确认充值</view>
						</view>
					</view>
				</view>

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
				type: 1,
				statusBarHeight: 0,
				priceList: [{
					title: '半月会员',
					price: 88,
					oldprice: 99,
					check: false
				}, {
					title: '半月会员',
					price: 88,
					oldprice: 99,
					check: false
				}, {
					title: '半月会员',
					price: 88,
					oldprice: 99,
					check: false
				}, {
					title: '半月会员',
					price: 88,
					oldprice: 99,
					check: false
				}],
				userInfo: {
					'nickName': '未登录',
					'avatar': util.defaultAvatar(),
					'userId': '-1',
					'blanceNum': '-',
					'vip_type': '-'
				},
				baseConfig: {},
				intivateCard:''
			}
		},
		onLoad() {
			this.getStatusBarHeight()
			this.priceList[0].check = true
		},
		onShow() {
			this.initbaseConfig();
			this.getUserInfo();
		},
		methods: {
			initbaseConfig() {
				util.getbaseConfig()
				this.baseConfig = uni.getStorageSync('baseConfig')
			},
			getUserInfo() {
				request('', '/user/getUserInfo', 'GET', {}, {}).then(res => {
					if (res.code == 200) {
						this.userInfo = res.data
						uni.setStorageSync('userInfo', this.userInfo)
					} else {
						util.message("个人信息获取失败", 'error')
					}
				})
			},
			backPage() {
				uni.navigateBack({
					delta: 1
				})
			},
			getStatusBarHeight() {
				this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			},
			checkItem(index) {
				for (var i = 0; i < this.priceList.length; i++) {
					this.priceList[i].check = false
				}
				this.priceList[index].check = true
				this.$forceUpdate()
			},
			aboutUs() {
				let text = this.baseConfig.groupdesc
				if(util.isBlank(this.baseConfig.groupdesc)){
					text = "Q群:575451625";
				}
				uni.setClipboardData({
				  data:text,//要被复制的内容
				  success:()=>{//复制成功的回调函数
					uni.showToast({//提示
					  title:`复制成功`,
					  icon:'success'
					})
				  }
				},true);
			},
			getVip() {
				uni.showToast({
					title: '领取卡密'
				})
			},
			changeType(type) {
				this.type = type
			},
			blanceDateNum(dateStr) {
				var date = new Date(dateStr);
				let blance = date.getTime() / 1000;
				let now = (new Date().getTime()) / 1000;
				if ((blance - now) > 0) {
					//转换成时
					let hourNum = (blance - now) / 60
					return hourNum.toFixed(1);
				} else {
					return '已过期';
				}
			
			},
			useIntivateCard() {
				if(util.isNotBlank(this.intivateCard)){
					
					request('', '/cricleai/rechargeablecardprocess/use?cardNumber='+this.intivateCard, 'POST', {}, {}).then(res => {
						if (res.code == 200) {
							util.message("激活成功", 'success')
							this.getUserInfo()
						} else {
							util.message(res.msg, 'error')
						}
					})
				}else{
						util.message("激活码不可为空", 'error')
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #f6f6f6;
	}

	.bule_btn {
		width: -webkit-fill-available;
		padding: 28rpx;
		font-size: 38rpx;
		font-weight: 700;
		text-align: center;
		margin-left: 50rpx;
		margin-right: 50rpx;
		color: white;
		background-color: #3387FF;
		border-radius: 12rpx;
		margin-top: 88rpx;
	}

	.aboutUs {
		font-size: 24rpx;
		color: #494A4C;
		margin-left: 20rpx;
	}

	.kfRow {
		margin-top: 20rpx;
		/* margin-left: 20rpx; */
	}

	.kfImg {

		width: 40rpx;
		height: 40rpx;
	}

	.getBtn {
		height: 72rpx;
		color: white;
		background-color: #3387FF;
		border: 1rpx solid #3387FF;
		width: 140rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		right: 0;
		border-radius: 0rpx 12rpx 12rpx 0rpx;
	}

	.cardInputPlace {
		font-size: 30rpx;
		color: #898D99;

	}

	.cardInputText {
		font-size: 30rpx;
		color: #000000;
		width: 259px;
	}

	.cardInput {
		height: 72rpx;
		margin-left: 20rpx;
		margin-top: 20rpx;
		border: 1rpx solid #3387FF;
		border-radius: 12rpx;
		position: relative;
		padding-left: 20rpx;
		margin-right: 20rpx;
	}

	.cardTitle {
		font-size: 30rpx;
		color: #000000;
		font-weight: 700;
		margin-left: 20rpx;
		margin-top: 10rpx;
	}

	.tips {
		font-size: 24rpx;
		color: #494A4C;
		margin-top: 20rpx;
		margin-left: 20rpx;
	}

	.line {
		width: 100%;
		height: 1rpx;
		background-color: #E9E7E7;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.oldPirce {
		font-size: 22rpx;
		color: #494A4C;
		text-decoration: line-through
	}

	.priceNum {
		font-size: 76rpx;
		font-weight: 700;
	}

	.unselectprice {
		color: #000000;
		margin-top: 20rpx;
	}

	.selectprice {
		color: #F7B66A;
		margin-top: 20rpx;
	}

	.itemTitle {
		font-size: 30rpx;
		font-weight: 700;
		color: #000000;
	}

	.selectItem {
		border: 1rpx solid #F7B66A;
		background-color: #FFF4EA;
		border-radius: 12rpx;
		padding: 12rpx;
	}

	.unselectItem {
		border: 1rpx solid #CDD1D9;
		background-color: #F7FBFF;
		border-radius: 12rpx;
		padding: 12rpx;
	}

	.role-model {
		display: flex;
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
		align-items: center;
	}

	.role-model .role {
		width: 25%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* margin: 7px 12px; */
		position: relative;
	}

	.topRound {
		margin: 30rpx;
		box-shadow: 0rpx 0rpx 6rpx 6rpx rgba(0, 0, 0, 0.05);
		border-radius: 13rpx;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}

	.surText {
		color: #14171A;
		background: linear-gradient(#FFCD95 0%, #FFE9D0 100%);
		border-radius: 36rpx 0rpx 0rpx 0rpx;
		font-size: 50rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		font-weight: 700;
	}

	.unsoText {
		background: #89AFE5;
		border-radius: 0rpx 36rpx 0rpx 0rpx;
		color: #D9DDE5;
		font-size: 50rpx;
		justify-content: center;
		height: 100%;
		display: flex;
		align-items: center;
		font-weight: 700;

	}

	.unsurText {
		color: #D9DDE5;
		background: #89AFE5;
		border-radius: 36rpx 0rpx 0rpx 0rpx;
		font-size: 50rpx;
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		font-weight: 700;
	}

	.soText {
		background: linear-gradient(#FFCD95 0%, #FFE9D0 100%);
		border-radius: 0rpx 36rpx 0rpx 0rpx;
		color: #14171A;
		font-size: 50rpx;
		justify-content: center;
		display: flex;
		align-items: center;
		height: 100%;
		font-weight: 700;

	}

	.topCheck {
		width: 50%;
		text-align: center;
		height: 112rpx;
	}

	.numDesText {
		font-size: 25rpx;
		color: #1B1B1B;
		margin-top: 10rpx;
	}

	.numText {
		font-size: 40rpx;
		font-weight: 500;
		color: #AF691D;
	}

	.vipTip {
		margin-left: 13rpx;
		text-align: center;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.vipText {
		color: white;
		font-size: 24rpx;
		position: absolute;
		top: 0;
		font-weight: 600;
	}

	.userDes {
		font-size: 26rpx;
		height: 26rpx;
		color: #ffffff;
		margin-top: 10rpx;
	}

	.userName {
		font-size: 38rpx;
		font-weight: 700;
		color: #FFCD95;
	}

	.userRow {
		height: 70%;
		margin-bottom: 30rpx;
		margin-left: 20rpx;
		margin-right: 20rpx;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;

	}

	.position {
		position: relative;
		width: 100%;
		height: 50rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
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

	.position_top {
		//#ifndef MP-WEIXIN
		margin-top: 20px;
		// #endif
		position: absolute;
		top: 0;
		width: 100%;
		/* padding-top: 90rpx; */
	}



	.mineInfo {
		width: -webkit-fill-available;
		height: 306rpx;
		position: relative;

		margin-top: 45rpx;
	}

	.header {
		width: 100%;
		position: relative;
		z-index: 999;
	}

	.topBg {
		width: 100%;
		height: 470rpx;
	}

	.height90 {
		height: 95rpx;
	}

	.height45 {
		height: 50rpx;
	}

	button::after {
		border: none;
	}
</style>
