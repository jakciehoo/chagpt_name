<template>
	<view>
		<view class="topRound">
			<textarea maxlength="-1" v-model="content" class="textInput" placeholder="填写您的问题，支持长按粘贴您的问题(不支持连续对话)"
				placeholder-class=""></textarea>

			<view class="row center">
				<view @click="pasteContent" class="pasteBtn">粘贴问题</view>
				<view @click="askto" class="comitBtn">提交问题</view>
			</view>
		</view>

		<scroll-view scroll-x="true">
			<view class="row fwarp">
				<view v-for="(item,index) in tagsList" :key="index">
					<view @click="checkItem(index,item)">
						<view v-if="item.check" class="select">{{item.roleName}}</view>
						<view v-if="!item.check" class="unselect">{{item.roleName}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<view v-if="itemList.length<=0" style="margin-top: 20px;">
			<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text="暂无模型">
			</u-empty>
		</view>

		<view v-else class="role-model">
			<view v-for="(item,index) in itemList" :key="index" class="role">
				<view style="width: 331rpx;height: 254rpx;" @click="checkContent(index,item)">
					<view v-if="item.check" class="itemSelect">
						<view class="title">{{item.modelName}}</view>
						<view class="content">{{item.modelContent}}</view>
						<view class="itemCheck">建立对话</view>
					</view>
					<view v-if="!item.check" class="itemUnSelect">
						<view class="title">{{item.modelName}}</view>
						<view class="content">{{item.modelContent}}</view>
					</view>
				</view>

			</view>
		</view>

		<u-popup customStyle="border-radius: 15px;padding: 10px;width: 650rpx;" mode="center" :show="popShow"
			@close="closePopShow" :zoom="false" @open="openPopShow" @touchmove.stop.prevent="preStop()">
			<view class="dig-list">
				对话列表
			</view>
			<u-divider></u-divider>
			<scroll-view scroll-y="true" bindscrolltolower="onReachBottom">
				<view class="page-main">
					<view class="elegant-list" style="margin-bottom: 10px;">

						<view class="card-user">
							<view class="user-info">
								<view class="user-name">新建对话</view>
								<view class="user-time">现在</view>
							</view>
							<view @click="modalShowClick()" class="countie-dig">
								新建对话
							</view>
						</view>
					</view>
					<view v-if="historyDigList.length<=0">
						<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text="暂无对话">
						</u-empty>
					</view>

					<view v-if="historyDigList.length>0">
						<view class="elegant-list" v-for="(item,index) in historyDigList" :key="index">
							<view v-if="index==0" class="left-new">NEW</view>
							<image @click="deteleDig(item,index)" class="closeImg" src="../../../static/close_icon.png">
							</image>
							<view class="card-user">
								<view class="user-info">
									<view class="user-name">{{lengthLimitText(item.dialogueName,15)}}</view>
									<view class="user-time">{{item.createTime}}</view>
								</view>
								<view @click="conDig(item)" class="countie-dig">
									进入对话
								</view>
							</view>
						</view>
					</view>


				</view>
				<view v-if="isLoaddingFinash" class="u-demo-block">
					<view class="u-demo-block__content">
						<u-loadmore
							:line="true"
							status="nomore"
						></u-loadmore>
					</view>
				</view>
			</scroll-view>
		</u-popup>
		<u-modal @confirm="confirmDigModel()" @cancel="modalColse()" @touchmove.stop.prevent="preStop()"
			showCancelButton="true" :show="modalShow" :zoom="true">
			<view>
				<u--form>
					<u-form-item labelWidth="80px" label="对话备注" borderBottom>

						<u--input v-model="digTitle" placeholder="请输入对话主题" border="none"></u--input>
					</u-form-item>
				</u--form>
			</view>
		</u-modal>
	</view>
</template>

<script>
	import request from "../../../request/request.js";
	import util from "../../../util/util.js";
	export default {

		data() {
			return {				
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
		onHide() {
			this.modalShow = false
			this.popShow = false
			this.historyDigList = []
		},
		methods: {
			modalShowClick() {
				this.modalShow = true
				this.popShow = false
			},
			modalColse() {
				this.modalShow = false
			},
			confirmDigModel() {
				const modelInfoTemp = Object.assign({}, this.modelInfo)
				modelInfoTemp.modelName = this.digTitle
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
				uni.switchTab({
					url: '/pages/main/chat/index'
				})
			},
			getTabList() {
				request('', '/cricleai/roleChange/list', 'POST', {}, {}).then(res => {
					if (res.code == 200) {
						this.tagsList = res.data
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
						uni.setStorageSync('digId', res.data.id);
						uni.switchTab({
							url: '/pages/main/chat/index'
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
		onLoad() {

		},
		onShow() {
			this.getTabList()
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

		},
	}
</script>

<style>
	page {
		background-color: #ffffff;
	}

	.title {
		font-size: 32rpx;
		font-weight: 700;
		color: #000000;
	}

	.content {
		font-size: 25rpx;
		color: #626262;
		margin-top: 20rpx;
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
		padding: 42rpx 22rpx;
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
</style>
