<template>
	<view class="contant">
		<view class="notice-c">
			<view class="padd">
				<u-notice-bar bgColor="#F7FBFF" color="#3387FF" fontSize="12" :text="weichat_notice"></u-notice-bar>
			</view>
		</view>
		<view class="main">
			<view v-if="itemList.length<=0" style="margin-top: 20px;">
				<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text="暂无起名项目">
				</u-empty>
			</view>
			
			<view v-else class="role-model">
				<view v-for="(item,index) in itemList" :key="index" class="role">
					<view style="width: 331rpx;height: 254rpx;" @click="checkContent(index,item)">
						<view v-if="item.check" class="itemSelect">
							<view class="title">{{lengthLimitText(item.modelName,7)}}</view>
							<view class="content">{{lengthLimitText(item.modelContent,36)}}</view>
							<view class="itemCheck">开始起名</view>
						</view>
						<view v-if="!item.check" class="itemUnSelect">
							<view class="title">{{item.modelName}}</view>
							<view class="content">{{lengthLimitText(item.modelContent,36)}}</view>
						</view>
					</view>
			
				</view>
			</view>
			

		</view>
		<view class="rule">违规微信社区规定发言将会被限制对话</view>
		<!--  #ifdef H5 -->
		<view class="beian">
		<uni-link href="https://beian.miit.gov.cn/" text="您的备案号:"></uni-link>
		<uni-link href="https://beian.miit.gov.cn/" text="京ICP备2023013810号"></uni-link>
		</view>
		<!--  #endif -->
	</view>
</template>

<script>
	import request from "../../../request/request.js";
	import util from "../../../util/util.js";
	export default {
		data() {
			return {
				weichat_notice: uni.getStorageSync('baseConfig').weichat_notice,
				isLoaddingFinash:false,
				page: 1,
				size: 10,
				totalPage:0,
				historyParam:{},
				modelInfo: {},
				popShow: false,
				content: '', //可以询问问题-无法联系对话
				//顶部tag
				tagsList: [],
				//内容item
				itemList: [],
				//往期对话列表List
				historyDigList: [],
				modalShow: false,
				digTitle: "",
			}
		},
		onLoad(options) {
			uni.setStorageSync('invitationCode', options.intivateCode);
			// #ifndef MP-WEIXIN
			
			let url = window.location.href; 
			// 获取url中的参数部分 
			let params = url.split('?')[1]; 
			// 将参数部分转换为对象 
			let paramsObj = {}; 
			if (params) { 
			  params.split('&').forEach(item => { 
			    let arr = item.split('='); 
			    paramsObj[arr[0]] = arr[1]; 
			  }); 
			} 
			let jsCode = paramsObj['code']; 
			if(util.isNotBlank(jsCode) && util.isBlank(uni.getStorageSync('authorization'))){
				
				this.wxH5loginJwt(jsCode)
			}
			// #endif
			this.getTabList()
		},
		onHide() {
			this.modalShow = false
			this.popShow = false
			this.historyDigList = []
		},
		methods: {
			startDig() {
				uni.navigateTo({
					url:'/pages/main/name/name'
				})
				
			},
			/**微信H5登录
			 * @param {Object} jsCode
			 */
			wxH5loginJwt(jsCode) {
				console.log("开始登陆",jsCode)
				let param = {
					'jsCode': jsCode,
					'inviteCode': uni.getStorageSync('invitationCode')
				}
				request('', '/authorization/wx/h5/registerOrLogin', 'POST', param, {}).then(res => {
					if (res.code == 200) {
						uni.setStorageSync('authorization', res.data.token)
						uni.setStorageSync('userInfo', res.data.userInfo)
						// this.toUserCenter()
						util.message("登录成功");
					} else {
						util.message("登录失败,请重试", 'error')
					}
					uni.hideLoading()
				})
			},
			modalShowClick() {
					this.modalShow = true
					this.popShow = false
				},
				modalColse() {
					this.modalShow = false
				},
				confirmDigModel(item) {
					const modelInfoTemp = Object.assign({}, item)
					modelInfoTemp.modelName = item.modelName
					if (util.isBlank(modelInfoTemp.modelName)) {
						util.message("对话主题不可为空", "error")
					} else {
						this.creatNewDig(modelInfoTemp);
					}
				},
				closePopShow() {
					this.historyDigList = [];
					this.popShow = false;
					this.isLoaddingFinash=false;
					this.page= 1;
					this.size= 10;
					this.totalPage=0;
					this.historyParam={};
				},
				openPopShow() {
					this.popShow = true;
				},
				comitQuestion() {
					uni.navigateTo({
						url: '/pages/main/replyquestion/replyquestion'
					})
					uni.showToast({
						title: '提交问题啊吧啊吧'
					})
				},
				checkItem(index, item) {
					for (var i = 0; i < this.tagsList.length; i++) {
						this.tagsList[i].check = false
					}
					this.tagsList[index].check = true
					this.$forceUpdate()
					this.getModelList(item.id)
				},
				checkContent(index, item) {
					for (var i = 0; i < this.itemList.length; i++) {
						this.itemList[i].check = false
					}
					this.itemList[index].check = true
					this.modelInfo = item;
					this.checkHaveDigHistory(item.id);
				},
				checkHaveDigHistory(dialogueRoleIdP) {
					if (util.isBlank(dialogueRoleIdP) &&util.isBlank(this.historyParam.dialogueRoleId) ) {
						util.message("模型ID为空")
					} else {
						this.popShow = true
						this.historyParam = {
							dialogueRoleId: dialogueRoleIdP,
							pageNum: this.page,
							pageSize: this.size
						}
						request('', '/cricleai/diglogue/creatDigFlag', 'GET', this.historyParam, {}).then(res => {
							if (res.code == 200) {
								
								if (this.page == 1) {
									this.historyDigList = res.rows
									//处理整数部分
									this.totalPage = Math.floor(res.total/this.size)+1
								} else {
									this.historyDigList = [...this.historyDigList, ...res.rows];
								}
								//设置当前日期
								let todayDate = new Date().setHours(0,0,0,0);//把今天的日期时分秒设置为00：00：00，返回一个时间戳, 
								let visitedDate = uni.getStorageSync('visitedDate');
								uni.setStorageSync('visitedDate', todayDate);
								
								let isToday=(todayDate===visitedDate);//时间戳相同时 True 就为今天 

								if(this.historyDigList.length < 1 || !isToday) {
									this.confirmDigModel(this.modelInfo)
										
								} else {
									this.conDig(this.historyDigList[0])									
								}
								
							} else {
								util.message("查询错误", 'error')
							}
							
						})
			
					}
					uni.stopPullDownRefresh();
				},
				pasteContent() {
					let that = this
					uni.getClipboardData({
						success: function(res) {
							that.content = res.data
						}
					});
				},
				conDig(item) {
					uni.setStorageSync('digId', item.id);
					// uni.$emit('digId', item.id)
					var askMsg = this.modelInfo.modelName;
					uni.navigateTo({
						url: '/pages/main/name/name?msg=' + askMsg
						
					})
				},
				getTabList() {
					request('', '/cricleai/roleChange/list', 'POST', {}, {}).then(res => {
						if (res.code == 200) {
							this.tagsList = [];
							var newArr = []
							newArr = res.data
							if (util.isNotBlank(newArr)) {
								for (var i = 0; i < newArr.length; i++) {
									var item = newArr[i]
									if(item.roleName.includes('起名')){
										this.tagsList.push(item)
									}
								}
							}
							
							if (util.isNotBlank(this.tagsList)) {
								this.tagsList[0].check = true
								this.getModelList(this.tagsList[0].id);
							}
						} else {
							util.message("查询错误", 'error')
						}
					})
				},
				getModelList(dRoleId) {
					if (util.isBlank(dRoleId)) {
						util.message("查询错误", 'error')
					} else {
						request('', '/cricleai/usermodel/list?dRoleId=' + dRoleId, 'POST', {}, {}).then(res => {
							if (res.code == 200) {
								this.itemList = res.data
								if (this.itemList.length > 0) {
									this.itemList[0].check = true
								}
			
							} else {
								util.message("查询错误", 'error')
							}
						})
					}
				},
				lengthLimitText(text, num) {
					return util.lengthLimit(text, num);
				},
				preStop() {
					return
				},
				creatNewDig(modelInfoTemp) {
					request('', '/cricleai/diglogue/creatNewDig', 'POST', modelInfoTemp, {}).then(res => {
						if (res.code == 200) {
							this.digTitle = ''
							this.modalShow = false;
							this.historyDigList.unshift(res.data)
							var askMsg = modelInfoTemp.modelName;
							uni.navigateTo({
								url: '/pages/main/name/name?msg=' + askMsg 
							})
						} else {
							util.message("查询错误", 'error')
						}
					})
				},
				deteleDig(item, index) {
					request('', '/cricleai/diglogue/deteleDig?id=' + item.id, 'POST', {}, {}).then(res => {
						if (res.code == 200) {
							this.historyDigList.splice(index, 1)
							
							// this.checkHaveDigHistory(this.historyParam.dialogueRoleId)
							util.message("删除成功")
							// this.checkHaveDigHistory(item.dialogueRoleId)
						} else {
							util.message("删除失败", 'error')
						}
					})
				},
				askto(){
					if(util.isBlank(this.content)){
						util.message("对话内容不允许为空", 'error')
					}else{
						let param = {
							askContent:this.content
						}
						uni.navigateTo({
							url:'/pages/main/replyquestion/replyquestion?askContent='+encodeURIComponent(JSON.stringify(param))
						})
					}
			
				}
			},
			// 触底的事件
			onReachBottom() {
				if(this.totalPage==this.page){
					this.isLoaddingFinash=true
				}
				if(this.totalPage>this.page){
					this.page = this.page + 1
					this.checkHaveDigHistory(this.historyParam.dialogueRoleId)
				}
			},
			// 页面下拉时触发，与 onLoad 等生命周期函数平级
			onPullDownRefresh() {
				// console.log('refresh');
				// this.page = 1
				// this.getData()
			
			}
		}
		
</script>

<style>
	page {
		background-color: #fff;
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
		margin-top: 10rpx;
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
		margin-top: 5px;
		width: 90%;
		border: 1px solid #3387FF;
		border-radius: 10px;
	}

	.padd {
		padding: 1px;
	}
	.loginIndex{
		margin-top: 60rpx;
	}
	
	.title {
		font-size: 25rpx;
		font-weight: 700;
		color: #000000;
	}
	
	.content {
		font-size: 25rpx;
		color: #626262;
		margin-top: 20rpx;
		line-height: 20px;
		/* margin: 3.2%; */
		letter-spacing: 1px;
	}
	
	.itemCheck {
		background-color: #3387FF;
		border-radius: 0rpx 12rpx 0rpx 12rpx;
		padding: 7rpx 13rpx;
		padding-left: 13rpx;
		padding-right: 13rpx;
		padding-top: 5rpx;
		padding-bottom: 9rpx;
		font-size: 18rpx;
		color: white;
		width: max-content;
		position: absolute;
		top: 0;
		right: 0;
	}
	
	.itemSelect {
		background-color: #F2F8FF;
		position: relative;
		padding: 31rpx 22rpx;
		width: 100%;
		height: 100%;
		border: 1rpx solid #3387FF;
		border-radius: 15rpx;
	}
	
	.itemUnSelect {
		background-color: #F2F8FF;
		position: relative;
		padding: 42rpx 22rpx;
		width: 100%;
		height: 100%;
		border: 1rpx solid #F2F8FF;
		border-radius: 15rpx;
	
	}
	
	.role-model {
		display: flex;
		flex-direction: row;
		/* justify-content: center; */
		flex-wrap: wrap;
		align-items: center;
	}
	
	.role-model .role {
		width: 42%;
		/* display: flex; */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 7px 12px;
		position: relative;
	}
	
	.select {
		background-color: #3387FF;
		color: white;
		margin-bottom: 30rpx;
		font-size: 32rpx;
		display: flex;
		justify-content: center;
		width: 154rpx;
		align-items: center;
		height: 62rpx;
		text-align: center;
		font-weight: 700;
		margin-top: 30rpx;
		border-radius: 10rpx;
	}
	
	.unselect {
		color: #494A4C;
		width: 154rpx;
		margin-bottom: 30rpx;
		font-size: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 62rpx;
		text-align: center;
		font-weight: 400;
		margin-top: 30rpx;
		border-radius: 10rpx;
	}
	
	.fwarp {
		white-space: nowrap;
		flex-wrap: nowrap;
		margin-left: 30rpx;
	}
	
	.pasteBtn {
		border: 0.6rpx solid #3387FF;
		border-radius: 50rpx;
		padding: 10rpx 50rpx;
		font-size: 35rpx;
		color: #3387FF;
		font-weight: 500;
	}
	
	.comitBtn {
		border: 0.6rpx solid #3387FF;
		border-radius: 50rpx;
		padding: 10rpx 50rpx;
		font-size: 35rpx;
		margin-left: 60rpx;
		color: #ffffff;
		background-color: #3387FF;
		font-weight: 500;
	}
	
	.center {
		justify-content: center;
		margin-top: 30rpx;
	}
	
	.row {
	
		display: flex;
		flex-direction: row;
		align-items: center;
	
		width: 100%;
	
	}
	
	.textInput {
		border: 1rpx solid #3387FF;
		border-radius: 10rpx;
		width: -webkit-fill-available;
		padding: 20rpx;
		font-size: 28rpx;
		color: #000000;
	}
	
	.textInputPlaceholder {
		font-size: 28rpx;
		color: #898D99;
	}
	
	.topRound {
		margin: 30rpx;
		box-shadow: 0rpx 0rpx 6rpx 6rpx rgba(0, 0, 0, 0.05);
		border-radius: 13rpx;
		padding: 30rpx;
	}
	
	.page-main {
		height: 800rpx;
	}
	
	.elegant-list {
		width: 100%;
		padding: 32rpx 0;
		/* height: auto; */
		border: 1px solid #3389ff;
		position: relative;
		background: #F1F9FF;
		margin-top: 10px;
		border-radius: 12px;
	}
	
	.page-main .elegant-list:first-child {
		margin-top: 0px;
	}
	
	.card-user {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding: 0 32rpx;
	}
	
	.user-info {
		margin-left: 16rpx;
	}
	
	.user-name {
		font-size: 23rpx;
		line-height: 44rpx;
		font-weight: bold;
		color: #191919;
	}
	
	.user-time {
		font-size: 24rpx;
		line-height: 36rpx;
		color: #999999;
	
	}
	
	.user-img {
		width: 72rpx;
		height: 72rpx;
		border-radius: 72rpx;
		border: solid #f0f0f0 1px;
	}
	
	.dig-list {
		font-weight: 700;
		font-size: 20px;
		padding: 10px;
		margin: 0 auto;
	}
	
	.countie-dig {
		font-size: 20rpx;
		width: 113rpx;
		background: #3389ff;
		padding: 5px;
		color: #FFFFFF;
		border-radius: 12px;
		margin: auto;
		text-align: center;
		margin-right: 0px;
	}
	
	.left-new {
		background-color: #3389ff;
		border-radius: 12rpx 0rpx 12rpx 0rpx;
		padding: 7rpx 13rpx;
		padding-left: 13rpx;
		padding-right: 13rpx;
		padding-top: 5rpx;
		padding-bottom: 9rpx;
		font-size: 18rpx;
		color: white;
		width: -webkit-max-content;
		width: max-content;
		position: absolute;
		top: 0;
		left: 0
	}
	
	.closeImg {
		right: 0;
		width: 18rpx;
		height: 18rpx;
		position: absolute;
		top: 12rpx;
		right: 12rpx;
	}
	.beian {
		margin: 0 auto;
		margin-top: 100px;
		width: 90%;
		text-align: center;
	}
</style>
