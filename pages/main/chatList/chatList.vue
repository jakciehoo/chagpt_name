<template>
	<view class="main">
		<!--  #ifdef H5 -->
			<view>
				<!-- 2.0.19支持autoBack，默认为false -->
		        <u-navbar
		            title="对话记录"
		            :autoBack="true"
					:placeholder="true"
		        >
		        </u-navbar>
			</view>
			<!--  #endif -->
		<view v-if="chatList.length<=0" style="margin-top: 200rpx;">
			<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text="暂无数据">
			</u-empty>
		</view>

		<view v-for="(item,index) in chatList" :key="index">
			<view  class="chat row">
				<view>
					<view class="row">
						<view class="title">
						{{lengthLimitText('【'+item.modelName+'】'+item.dialogueName ,10) }}
						</view>
						<view class="chatCount">
							{{item.digNum}}条对话
						</view>
					</view>
					<view class="time">{{item.createTime}}</view>

				</view>

				<view class="right">
					<view  @click="conDig(item)"  class="toChat">进入对话</view>
					<view class="time">开始与元AI对话</view>
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
				chatList: [],
				chatOldList: [ {
					title: '你可以做什么？'
				} ]
			}
		},
		onLoad() {
			this.getData()
		},
		onShow() {
		},
		methods: {
			getData() {
				let param ={
					pageNum:this.page,
					pageSize:this.size
				}
				request('', '/cricleai/diglogue/creatDigFlag', 'GET', param, {}).then(res => {
					if (res.code == 200) {
						if (this.page == 1) {
							this.chatList = res.rows
							//处理整数部分
							this.totalPage = Math.floor(res.total/this.size)+1
						} else {
							this.chatList = [...this.chatList, ...res.rows];
						}
						
						
					} else {
						util.message("查询错误", 'error')
					}
				})
				uni.stopPullDownRefresh();
			},
			conDig(item) {
				uni.setStorageSync('digId', item.id);
				uni.$emit('digId', item.id)
				uni.navigateTo({
					url: '/pages/main/chat/index'
				})
			},
			lengthLimitText(text,num) {
				return util.lengthLimit(text,num);
			}

		},
		// 触底的事件
		onReachBottom() {
			if(this.totalPage==this.page){
				this.isLoaddingFinash=true
			}
			if(this.totalPage>this.page){
				this.page = this.page + 1
				this.getData()
			}
		},
		// 页面下拉时触发，与 onLoad 等生命周期函数平级
		onPullDownRefresh() {
			this.page = 1
			this.getData()

		},
	}
</script>

<style>
	.toChat {
		background-color: #3387FF;
		color: white;
		text-align: center;
		height: 32rpx;
		font-size: 20rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 15rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
	}

	.time {
		color: #494A4C;
		font-size: 20rpx;
		margin-top: 20rpx;
	}


	.newChat .title {
		font-size: 30rpx;
		color: #3387FF;
		font-weight: 700;
	}

	.newChat .chatCount {
		font-size: 20rpx;
		color: #3387FF;
		margin-left: 10rpx;
	}

	.newChat {
		background-color: #F1F9FF;
		padding: 46rpx;
		border: 1rpx solid #3387FF;

		border-radius: 16rpx;
		margin-bottom: 30rpx;
	}

	.chat {
		background-color: #F1F9FF;
		padding: 46rpx;
		border: 1rpx solid #ffffff;

		border-radius: 16rpx;
		margin-bottom: 30rpx;
	}

	.chat .title {
		font-size: 30rpx;
		color: #131719;
		font-weight: 700;
	}

	.chat .chatCount {
		font-size: 20rpx;
		color: #131719;
		margin-left: 10rpx;
	}

	.main {
		padding: 30rpx;

	}

	.right {
		position: absolute;
		right: 66rpx;
	}

	page {
		background-color: white;
	}

	.row {

		display: flex;
		flex-direction: row;
		align-items: center;

		width: 100%;

	}
</style>
