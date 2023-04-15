<template>
	<view class="container">
		<view class="bg"></view>
		<view class="form">
			<view class="header">
				<view class="title">看看你的私密小屋</view>
			</view>
			<view v-if="qList.length<=0" style="margin-top: 200rpx;">
				<u-empty mode="data" icon="http://cdn.uviewui.com/uview/empty/data.png" text="暂无数据">
				</u-empty>
			</view>
			
			<block v-for="(item,index) in qList">
				<view class="panel" :class="'panel'+index">
					<view class="head">
						<view class="title">问：{{item.anserTitle}}</view>
					</view>
					<view class="content" :class="[{'example':cIndex===index}]" @click="onClickContent(index)">
						<rich-text :nodes="item.anserContent"></rich-text>
					</view>
					<view class="bottom">
						官方回答时间：{{item.createTime}}
					</view>
				</view>
			</block>
		</view>
		<view style="padding-bottom: 30px;margin-top: 30px;" v-if="isLoaddingFinash" class="u-demo-block">
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
	export default {
		data() {
			return {
				cIndex: '',
				pageScrollTop: 0,
				qList: [],
				isUseOffical:'',
				useOfficalUrl:'',
				isLoaddingFinash:false,
				page: 1,
				size: 10,
				totalPage:0,
			};
		},
		onLoad() {
			this.getListDatas();
		},
		onPageScroll(e) {
			this.pageScrollTop = e.scrollTop;
		},
		methods: {
			onSubmit() {
				uni.navigateTo({
					url: '/pages/main/answer/index'
				})
			},
			onClickContent(index) {
				if (this.cIndex === index) {
					this.cIndex = ''
				} else {
					this.cIndex = index
				}
				this.$nextTick(() => {
					this.getElementScollTop(index)
				})
			},
			getElementScollTop(index) {
				const query = uni.createSelectorQuery()
				query.select(`.panel${index}`).boundingClientRect((data) => {
					this.pageScrollTop = this.pageScrollTop + Math.round(data.top)
					uni.pageScrollTo({
						scrollTop: this.pageScrollTop, //滚动的距离
						duration: 500, //过渡时间
					})
				}).exec()

			},
			getListDatas(){
				let data = {
					pageNum:this.page,
					pageSize:this.size
					
				}
				request('', '/cricleai/employ/list', 'GET', data, {}).then(res => {
					if (res.code == 200) {
						if (this.page == 1) {
							this.qList = res.rows
							//处理整数部分
							this.totalPage = Math.floor(res.total/this.size)+1
						} else {
							this.qList = [...this.qList, ...res.rows];
						}
						
					} else{
						uni.showToast({
							title: '请求错误',
							icon: 'error',
							duration: 2000
						});
					}
					uni.stopPullDownRefresh();
				})
			}
		},
		// 触底的事件
		onReachBottom() {
			if(this.totalPage==this.page){
				this.isLoaddingFinash=true
			}
			if(this.totalPage>this.page){
				this.page = this.page + 1
				this.getListDatas()
			}
		},
		// 页面下拉时触发，与 onLoad 等生命周期函数平级
		onPullDownRefresh() {
			this.page = 1
			this.getListDatas()
		},
	}
</script>

<style lang="scss" scoped>
	/* 动画代码 */
	@keyframes example {
		0% {
			height: 100rpx;
		}

		100% {
			height: auto;
		}
	}

	.form {
		width: 90%;
		margin: 0 auto;
		z-index: 999;

		.header {
			margin-bottom: 30rpx;

			.title {
				text-align: center;
				color: #fff;
				margin: 30rpx 0rpx;
			}
		}

		.panel {
			padding: 30rpx;
			background-color: #fff;
			border-radius: 15rpx;
			box-shadow: 0rpx 10rpx 10rpx #eee;
			margin-bottom: 15rpx;

			.bottom {
				font-size: 24rpx;
			}

			.head {
				border-bottom: 1rpx solid #eee;
				padding-bottom: 30rpx;

				.title {
					font-weight: bolder;
					font-size: 30rpx;
				}
			}

			.content {
				margin: 30rpx 0rpx;
				height: 118rpx;
				display: -webkit-box;
				overflow: hidden;
				white-space: normal !important;
				text-overflow: ellipsis;
				word-wrap: break-word;
				-webkit-line-clamp: 3;
				line-clamp: 3;
				-webkit-box-orient: vertical;
			}

			.example {
				animation-name: example;
				animation-duration: 1s;
				position: relative;
				overflow: auto;
				text-overflow: inherit;
				-webkit-line-clamp: inherit;
				line-clamp: inherit;
				height: auto;
			}

			.bottom {
				background-color: #f1f9ff;
				color: #3388fe;
				padding: 15rpx;
				border-radius: 10rpx;
			}
		}

		.ad-box {
			margin: 20rpx 0;
		}
	}

	.bg {
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		width: 100%;
		background-color: #3388fe;
		min-height: 200rpx;
		border-radius: 0rpx 0rpx 140rpx 140rpx;
		z-index: -1;
	}
</style>