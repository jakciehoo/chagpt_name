<template>
	<view>
		<image class="topBg" mode="aspectFill" src="../../../static/mine_top_bg.png"></image>
		<view class="position_top">
			<view class="header">
				<!-- <view class="top"></view> -->
				<view v-if="statusBarHeight<40" class="height45"></view>
				<view v-if="statusBarHeight>40" class="height90"></view>
				<view class="title">个人中心</view>

				<view class="mineInfo">
					<image style="width: -webkit-fill-available" src="../../../static/mine_info_bg.png"></image>
					<view class="top"></view>
					
					
					<!--  #ifndef H5 -->
					<view @click="updateUserInfoShow()" class="mini-setting">
						<image src="../../../static/setting.png" style="width: 34rpx;height: 34rpx;">
						</image>
					</view>
					<!--  #endif -->
					<view class="user">
						<view class="row userRow">
							<u--image shape="circle" :src="userInfo.avatar" width="80px" height="80px">
							</u--image>
							<view style="margin-left: 30rpx; text-align: left;">
								<view class="row">
									<view class="userName">{{userInfo.nickName}}
									</view>
									<view v-if="baseConfig.is_open_num=='0'" class="vipTip">
										<image src="../../../static/mine_vip_icon.png"
											style="width: 132rpx;height: 38rpx;">
										</image>
										<view class="vipText">限时免费</view>
									</view>
									<view v-else-if="userInfo.vipType==2" class="vipTip">
										<image src="../../../static/mine_vip_icon.png"
											style="width: 132rpx;height: 38rpx;">
										</image>
										<view class="vipText">按时计算</view>
									</view>
									<view v-else class="vipTip">
										<image src="../../../static/mine_vip_icon.png"
											style="width: 132rpx;height: 38rpx;">
										</image>
										<view class="vipText">按次计算</view>
									</view>
								</view>
								<view class="userDes">ID:{{userInfo.userId}}
								</view>
							</view>
						</view>

						<view class="userrowline"> </view>
						<view class="row num">
							<view v-if="baseConfig.is_open_num=='0'" style="width:33%;">
								<view class="numText">
									无限制
								</view>
								<view class="numDesText">
									问答次数
								</view>
							</view>
							<view v-else-if="userInfo.vipType==2" style="width:33%;">
								<view class="numText">
									{{blanceDateNum(userInfo.blanceDate) }}
								</view>
								<view class="numDesText">
									剩余分钟
								</view>
							</view>
							<view v-else style="width:33%;">
								<view class="numText">
									{{userInfo.blanceNum}}
								</view>
								<view class="numDesText">
									问答次数
								</view>
							</view>
							<view class="line"></view>
							<view style="width: 33%;">
								<view class="numText">
									{{statisticsList.dialogueCount}}
								</view>
								<view class="numDesText">
									累计问答
								</view>
							</view>
							<view class="line"></view>

							<view v-if="baseConfig.is_open_num=='0'" style="width:33%;">
								<view class="numText">
									未开启
								</view>
								<view class="numDesText">
									分享收益
								</view>
							</view>

							<view v-else style="width:33%;">
								<view class="numText">
									{{statisticsList.intivateCount}}
								</view>
								<view class="numDesText">
									分享收益
								</view>
							</view>

						</view>
					</view>
				</view>
			</view>
			<view class="itemBorderW">
				<view @click="modalshowOpen()" v-if="baseConfig.is_open_num=='1'" class="row itemrow">
					<image class="itemRowImgLeft" src="../../../static/mine_follow_icon.png"></image>
					<view class="itemRowCloum">
						<view class="row">
							计费方式
							<view v-if="userInfo.vipType===1" class="itemRowTextRight">按次计费</view>
							<view v-if="userInfo.vipType===2" class="itemRowTextRight">按时计费</view>
							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
						</view>

						<view class="rowline"></view>
					</view>
				</view>

				<view @click="gotoVip()" v-if="baseConfig.is_open_num=='1'" class="row itemrow">

					<image class="itemRowImgLeft" src="../../../static/mine_vipcard_icon.png"></image>
					<view class="itemRowCloum">
						<view class="row">
							会员充值
							<view v-if="userInfo.vipType==1" class="itemRowTextRight">有效次数：{{userInfo.blanceNum}}</view>
							<view v-if="userInfo.vipType==2" class="itemRowTextRight">
								有效期：{{blanceDate(userInfo.blanceDate)}}</view>
							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
						</view>
						<view class="rowline"></view>
					</view>
				</view>
				<!--  #ifndef H5 -->
				<view class="row itemrow">
					<image class="itemRowImgLeft" src="../../../static/mine_share_icon.png"></image>
					<view class="itemRowCloum">
						<!-- <view class="row"> -->
						<u-button hover-class="none" data-name="shareBtn" open-type="share" class="row"
							customStyle="border-style: unset;text">
							<text style="position: absolute;left: 0;">一键分享</text>

							<view v-if="baseConfig.is_open_intive_register_give_num=='1' && baseConfig.is_open_num=='1'"
								class="itemRowTextRight">+{{baseConfig.intive_give_num}}次</view>
							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
							<!-- </view> -->
						</u-button>
						<view class="rowline" style="margin-top: 0rpx;"></view>
					</view>
				</view>
				<!--  #endif -->
				<view @click="gohistory()" class="row itemrow">
					<image class="itemRowImgLeft" src="../../../static/history.png"></image>
					<view class="itemRowCloum">
						<view class="row">
							历史记录
							<view class="itemRowTextRight"></view>
							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
						</view>
						<view class="rowline"></view>
					</view>
				</view>
				<view @click="myAskAndAnswer()" class="row itemrow">

					<image class="itemRowImgLeft" src="../../../static/mine_message_icon.png"></image>
					<view  class="itemRowCloum">
						<view class="row">
							我的问答
							<view class="itemRowTextRight">经典问题收录</view>
							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
						</view>

						<view class="rowline"></view>
					</view>
				</view>


				<!--  #ifndef H5 -->	
				<view class="row itemrow">

					<image class="itemRowImgLeft" src="../../../static/mine_tophone_icon.png"></image>
					<view class="itemRowCloum">


						<u-button  hover-class="none"  open-type="contact" class="row button-none"
							customStyle="border-style: unset;text">
							<text style="position: absolute;left: 0;">联系客服</text>

							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
							<!-- </view> -->
						</u-button>

						<view class="rowline"></view>
					</view>
				</view>
				<!--  #endif -->
				
<!-- 				<view class="row itemrow">
					<image class="itemRowImgLeft" src="../../../static/mine_aboutus_icon.png"></image>
					<view class="itemRowCloum">
						<view class="row">
							关于我们
							<view class="itemRowTextRight"></view>
							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image>
						</view>
						<view class="rowline"></view>
					</view>
				</view> -->
				
				
				<view @click="exit()" class="row itemrow">
				
					<image class="itemRowImgLeft" src="../../../static/mine_email_icon.png"></image>
					<view class="itemRowCloum">
						<view class="row">
							立即退出
							<view class="itemRowTextRight"></view>
<!-- 							<image class="itemRowImgRight" src="../../../static/next_icon.png"></image> -->
						</view>
				
						<view class="rowline"></view>
					</view>
				</view>

			</view>
		</view>
		<view>
			<u-action-sheet :closeOnClickOverlay="true" :closeOnClickAction="true" :safeAreaInsetBottom="true"
				:actions="tiplist" title="更换计费方式" description="请在下方选择您的计费模式" @close="coloseActionSheet"
				:show="modalshow" @select="selectActionSheet"></u-action-sheet>

			<u-popup :round="15" :closeOnClickOverlay="false" :show="show" @close="close" @open="open" mode="center">

				<view class="dialog">
					<image  @click="close" class="closeImg" src="../../../static/close_icon.png"></image>

					<view class="head">

						<view class="photoBorder">
							<image class="photoIcon" src="../../../static/photo_icon.png"></image>
						</view>
						<button hover-class="none" class="avatar-wrapper" open-type="chooseAvatar"
							@chooseavatar="onChooseAvatar">
							<u--image shape="circle" :showLoading="true" :src="avatarUrl" width="80px" height="80px">
							</u--image>
						</button>
					</view>
					<input v-model="nickname" type="nickname" class="nikeName" placeholder="请输入昵称" />
					<view class="dialogComitBtn" @click="updateUserInfoFun">修改信息</view>
				</view>
				<view class="pop-bottom">
					<u-icon label="用于向用户提供具有辨识度的用户中心界面" name="checkmark-circle-fill" color="#3388ff" size="10"
						labelSize="10"></u-icon>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	import request from "../../../request/request.js";
	import util from "../../../util/util.js";
	export default {
		data() {
			return {
				tiplist: [{
						name: '按次计算',
						// subname: "选项一描述",
						loading: false,
						color: '#c78842',
						fontSize: '20',
						flagType: 1,
						disabled: false
					},
					{
						name: '按时计算', //开启后文字不显示
						loading: false,
						color: '#3288ff',
						fontSize: '20',
						flagType: 2,
						disabled: false
					}
				],
				avatarUrl: '',
				nickname: '',
				isSelectImage: false,
				show: false,
				modalshow: false,
				statusBarHeight: 0,
				userInfo: {
					'nickName': '未登录',
					'avatar': util.defaultAvatar(),
					'userId': '-1',
					'blanceNum': '-',
					'vip_type': '-'
				},
				baseConfig: {},
				statisticsList: {
					'dialogueCount': '-',
					'intivateCount': '-'
				},
				// 单选框数据
				activeRadio: '', //存的是单选按钮选中的value值
				radioGroup: ['按次数', '按时间']
			}
		},
		onLoad() {
			this.getStatusBarHeight()
		},
		onShow() {
			this.initbaseConfig();
			this.getUserInfo();
			this.statisticsData();
		},
		methods: {
			selectActionSheet(e) {
				util.message("切换中", "loadding")
				if (e.flagType != 1 && e.flagType != 2) {
					uni.hideLoading()
					util.message("会员类型不存在", "error")

				} else {
					if (util.isNotBlank(e.flagType)) {
						let param = {
							'vipType': e.flagType
						}
						this.updateUserVipType(param);
					}
				}
			},
			coloseActionSheet() {
				this.modalshow = false
			},
			onChooseAvatar(e) {
				this.avatarUrl = e.detail.avatarUrl
				this.isSelectImage = true
			},
			open() {
			},
			close() {
				this.show = false
			},
			updateUserInfoShow() {
				this.show = true
			},
			updateUserInfoFun() {
				util.message("修改中", "loadding")
				if (util.isNotBlank(this.nickname) && util.isNotBlank(this.avatarUrl)) {
					let param = {
						'nickName': this.nickname,
						'avatar': this.avatarUrl
					}
					this.updateUser(param);
				}else{
					util.message("名称或者头像不可为空")
					uni.hideLoading()
				}
			},
			updateUser(param) {
				request('', '/user/updateUserInfo', 'POST', param, {}).then(res => {
					uni.hideLoading()
					if (res.code == 200) {
						this.getUserInfo();
						this.userInfo.nickName = this.nickname
						this.userInfo.avatar = this.avatarUrl
						this.show = false;
						util.message("修改成功", 'success')
					} else {
						util.message("修改失败", 'error')
					}

				})
			},
			updateUserVipType(param) {
				request('', '/user/updateUserVipType', 'POST', param, {}).then(res => {
					uni.hideLoading()
					if (res.code == 200) {
						this.getUserInfo();
						this.userInfo.nickName = this.nickname
						this.userInfo.avatar = this.avatarUrl
						this.show = false;
					} else {
						util.message("切换失败", 'error')
					}

				})
			},
			changeSelect(e) {
				this.activeRadio = e.detail.value; //选中按钮的value值
			},
			modalshowOpen() {
				this.modalshow = true
			},
			modalshowClose() {
				this.modalshow = false
			},
			statisticsData() {
				request('', '/yuan/ai/w/stream/statisticsData', 'POST', {}, {}).then(res => {
					if (res.code == 200) {
						this.statisticsList = res.data
					} else {
						util.message("统计出错", 'error')
					}
				})
			},
			initbaseConfig() {
				util.getbaseConfig()
				this.baseConfig = uni.getStorageSync('baseConfig')
			},
			blanceDate(dateStr) {
				var date = new Date(dateStr);
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				var hour = date.getHours();
				var minute = date.getMinutes();
				var second = date.getSeconds();
				return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
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
			toLogin() {
				uni.navigateTo({
					url: '/pages/main/login/login'
				})
			},
			getStatusBarHeight() {
				this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			},
			getUserInfo() {
				request('', '/user/getUserInfo', 'GET', {}, {}).then(res => {
					if (res.code == 200) {
						this.userInfo = res.data
						uni.setStorageSync('userInfo', this.userInfo)
						this.changeTip(this.userInfo.vipType);
					} else {
						util.message("个人信息获取失败", 'error')
					}
				})
			},
			changeTip(vipType) {
				if (vipType == 1) {
					this.tiplist[0].disabled = true;
					this.tiplist[1].disabled = false;
				} else if (vipType == 2) {
					this.tiplist[0].disabled = false;
					this.tiplist[1].disabled = true;
				}
			},
			gotoVip() {
				util.navigategOTo("/pages/main/joinvip/joinvip")
			},
			gohistory(){
				util.navigategOTo("/pages/main/chatList/chatList")
			},
			myAskAndAnswer(){
				util.navigategOTo("/pages/main/answeEmploy/answeEmploy")
			},
			exit(){
				uni.removeStorageSync('authorization');
				uni.removeStorageSync('userInfo');
				uni.navigateTo({
					url:'/pages/main/login/login'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #F6F6F6;
	}

	.height90 {
		height: 95rpx;
	}

	.height45 {
		height: 50rpx;
	}

	.itemRowCloum {
		width: -webkit-fill-available;
		position: absolute;
		left: 0;
		margin-left: 92rpx;
		margin-top: 20rpx;
	}

	.topBg {
		width: 100%;
		height: 470rpx;
	}

	.rowline {
		width: -webkit-fill-available;
		height: 1rpx;
		margin-top: 20rpx;
		background-color: #E9E7E7;
	}

	.userrowline {
		width: -webkit-fill-available;
		height: 1rpx;
		background-color: #20494A4C;
	}

	.itemRowImgRight {
		width: 12rpx;
		height: 24rpx;
		position: absolute;
		right: 0;
	}

	.itemRowTextRight {
		position: absolute;
		right: 0;
		margin-right: 50rpx;
		font-size: 21rpx;
		color: #8A8E99;

	}

	.itemRowImgLeft {
		width: 79rpx;
		height: 79rpx;
		margin-right: 22rpx;
	}

	.itemrow {
		position: relative;
		font-size: 27rpx;
		color: #14171A;
		font-weight: 500;

		padding-bottom: 20rpx;
	}

	.itemBorderW {
		width: -webkit-fill-available;
		margin-left: 26rpx;
		margin-right: 26rpx;
		/* margin: 0 auto; */
		margin-top: 40px;
		background-color: #fff;
		padding: 18px;
		margin-bottom: 120rpx;
		border-radius: 8px;
	}

	.line {
		height: 53rpx;
		background-color: rgba(0, 0, 0, 0.3);
		width: 1rpx;
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
		font-size: 26rpx;
		position: absolute;
		top: 0;
		font-weight: 600;
	}

	.userDes {
		font-size: 26rpx;
		height: 26rpx;
		color: black;
		margin-top: 10rpx;
	}

	.userName {
		font-size: 38rpx;
		font-weight: 700;
		color: black;
	}

	.header .title {
		text-align: center;
		font-size: 31rpx;
		font-weight: 600;
		color: #FFFFFF;
		flex-direction: row;
		align-items: center;
		/*  padding-top: 33px;
		    padding-bottom: 40px; */
	}

	.position_top {
		position: absolute;
		top: 0;
		width: 100%;
		/* padding-top: 90rpx; */
	}



	.mineInfo {
		width: -webkit-fill-available;
		height: 406rpx;
		position: relative;
		margin-left: 13rpx;
		margin-right: 13rpx;
		margin-top: 45rpx;
	}

	.header {
		width: 100%;
		position: relative;
		z-index: 999;
	}

	.header .user {
		position: absolute;
		top: 0;
		padding:
			65rpx 40rpx;
		height: 100%;
		width: 100%;
	}

	.header .user .row {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}

	.row {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
	}

	.header .user .num {
		height: 20%;
		margin-top: 30rpx;
		width: 100%;
		text-align: center;
	}

	.userRow {
		height: 70%;
	}

	.switchType {
		width: 80vw;
		background-color: #ffffff;
		padding: 50rpx 32rpx;
		display: flex;
		border-radius: 18rpx;
		flex-direction: column;
		align-items: center;
		/* position: relative; */
	}

	.switchOp {
		padding: 50rpx 32rpx;
	}

	.mini-setting {
		z-index: 100;
		position: absolute;
		top: 35px;
		right: 4px;
		width: 50px;
		height: 50px;
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

	.closeImg {
		right: 0;
		width: 31rpx;
		height: 31rpx;
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

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

	.avatar-wrapper {
		background-color: rgba(0, 0, 0, 0.0);
	}

	.nikeName {
		margin-top: 43rpx;
		margin-bottom: 25rpx;
		border-radius: 6rpx;
		background: #f8f8f8;
		height: 56rpx;
		text-align: center;
		width: 320rpx;
		font-size: 27rpx;
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

	.pop-bottom {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	.head button::after {
		border: none;
	}
	.button-none :active{
		background-color: #ffe6fa;
	}
</style>
