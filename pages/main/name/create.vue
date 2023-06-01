<template>
	<view class="page">
		<block v-if="index == 0">
			<view class="viewBox bs" v-for="(v,i) in list" :key="i" v-if="i < xz">
				<view class="viewGroup">
					<view class="viewList">
						<view class="viewItems">
							<view class="viewItem c-info bold" style="flex: 1;font-size: 1.4rem;">
								{{v.ci}}
								<u-tag class="u-m-l-10 u-m-b-15" :text="v.detail" type="warning" v-if="v.detail" />
							</view>
						</view>
					</view>
				</view>
				<view class="viewGroup u-m-t-20">
					<view class="viewList" style="flex: 1;">
						<u-line-progress active-color="#fa3534" :percent="v.re_du" :striped="true"
							:striped-active="true"></u-line-progress>
					</view>
					<view class="viewList" style="flex:1;">
						<view class="viewItem c-info" style="justify-content: flex-end;flex: 1;">
							<text>是否注册过：</text>
							<text class="c-error bold" v-if="v.zhu_ce_guo == 1">是</text>
							<text class="c-success bold" v-else>否</text>
						</view>
					</view>
				</view>
				<view class="viewGroup u-m-t-20" v-if="Object.keys(v.zhu_ce_lei_bie).length > 0">
					<view class="viewList">
						<view class="viewItems" style="align-items: center;">
							<text class="bold u-m-b-10">已注册分类：</text>
							<block v-for="(vv,ii) in v.zhu_ce_lei_bie" :key="ii" v-if="vv">
								<u-tag class="u-m-r-10 u-m-b-10" :text="vv" />
							</block>
						</view>
					</view>
				</view>
			</view>
		</block>

		<block v-if="index == 1">
			<view class="viewBox bs" v-for="(v,i) in list" :key="i" v-if="i < xz">
				<view class="viewGroup">
					<view class="viewList">
						<view class="viewItems">
							<view class="viewItem c-info bold" style="flex: 1;font-size: 1.4rem;">
								<u-parse :html="v.quancheng"></u-parse>
							</view>
						</view>
					</view>
				</view>
				<view class="viewGroup u-m-t-20">
					<view class="viewList" style="flex: 1;">
						<view class="viewItems" style="flex: 1;">
							<view class="viewItem c-info" v-for="(vv,ii) in v.de_fen" :key="ii">
								<image src="/static/images/xing.png" mode="aspectFit" class="xing"></image>
							</view>
						</view>
					</view>
					<view class="viewList" style="flex:1;">
						<view class="viewItem c-info" style="justify-content: flex-end;flex: 1;">
							<text>评分：</text>
							<text class="c-warning bold" v-if="v.ji_xiong == 1">吉</text>
							<text class="c-error bold" v-else>凶</text>
						</view>
					</view>
				</view>
				<view class="viewGroup u-m-t-20">
					<view class="viewList">
						<view class="viewItems">
							<u-tag class="u-m-r-10 u-m-b-10" text="诗词" type="primary" v-if="v.shi_ci" />
							<u-tag class="u-m-r-10 u-m-b-10" text="成语" type="success" v-if="v.cheng_yu" />
							<block v-for="(vv,ii) in v.zi_yi" :key="ii">
								<u-tag class="u-m-r-10 u-m-b-10" :text="vv" type="warning" />
							</block>
						</view>
					</view>
				</view>
			</view>
		</block>

		<block v-if="index == 2">
			<view class="viewBox bs" v-for="(v,i) in list" :key="i" v-if="i < xz">
				<view class="viewGroup">
					<view class="viewList">
						<view class="viewItems">
							<view class="viewItem c-info" style="font-size: 0.8rem;width: 75rpx;"
								v-for="(vv,ii) in v.pin_yin.xing" :key="ii">{{vv}}</view>
							<view class="viewItem c-info" style="font-size: 0.8rem;width: 75rpx;"
								v-for="(vv,ii) in v.pin_yin.ming" :key="ii">{{vv}}</view>
						</view>
						<view class="viewItems">
							<view class="viewItem" style="font-size: 2rem;width: 75rpx;" v-for="(vv,ii) in v.xing_ming"
								:key="ii">{{vv}}
							</view>
						</view>
					</view>
					<view class="viewList" style="flex: 1;">
						<view class="viewItems" style="justify-content:flex-end;flex: 1;">
							<view class="viewItem c-info" v-for="(vv,ii) in v.de_fen" :key="ii">
								<image src="/static/images/xing.png" mode="aspectFit" class="xing"></image>
							</view>
						</view>
						<view class="viewItem c-info" style="justify-content:flex-end;flex: 1;">
							重名率{{v.chong_ming}}
						</view>
					</view>
				</view>

				<view class="viewGroup u-m-t-20" v-for="(vv,ii) in v.han_yi" :key="ii">
					<view class="viewList">
						<view class="gezi">
							<image src="/static/images/gz.png"></image>
							<view class="zi">{{vv.zi}}</view>
						</view>
					</view>
					<view class="viewList">
						<view class="hanyi u-line-2">{{vv.yi}}</view>
					</view>
				</view>

				<view class="viewGroup u-m-t-20">
					<view class="viewList">
						<view class="viewItems">
							<u-tag class="u-m-r-10 u-m-b-10" text="诗词" type="primary" v-if="v.shi_ci" />
							<u-tag class="u-m-r-10 u-m-b-10" text="成语" type="success" v-if="v.cheng_yu" />
							<block v-for="(vv,ii) in v.zi_yi" :key="ii">
								<u-tag class="u-m-r-10 u-m-b-10" :text="vv" type="warning" />
							</block>
						</view>
					</view>
				</view>
			</view>
		</block>

		<!-- <view class="shape-btn" v-if="Object.keys(userinfo).length > 0">
			<u-button type="error" :disabled="paystatus" @click="pay">
				支付<text class="bold">￥{{price.toFixed(2)}}</text>元，再看<text class="bold">{{num}}</text>个名字
			</u-button>
		</view> -->
		<view class="shape-btn" v-if="Object.keys(list).length > 0 && Object.keys(userinfo).length > 0">
			<u-button type="primary" open-type="share">分享给朋友再解锁{{num}}个名字</u-button>
		</view>
		<view class="shape-btn" v-if="Object.keys(list).length > 0 && Object.keys(userinfo).length <= 0">
			<u-button type="success" @click="showLogin = true">登录授权可看{{num}}个名字</u-button>
		</view>
		<!-- #ifdef MP -->
		<!-- 小程序才有的弹窗授权 -->
		<ff-show-login :showLogin="showLogin"></ff-show-login>
		<!-- #endif -->
	</view>
</template>

<script>
	const app = getApp();
	export default {
		data() {
			return {
				showLogin: false,
				xz: 2,
				paystatus: false,
				price: 0.99,
				num: 10,
				userinfo: app.globalData.userinfo,
				title: '',
				index: 0,
				param: [],
				list: [],
				topBar: [{
						name: '商标起名'
					},
					{
						name: '公司起名'
					},
					{
						name: '宝宝起名'
					}
				]
			}
		},
		onLoad(e) {
			let that = this;
			if (typeof e.param !== 'undefined') {
				that.param = JSON.parse(decodeURI(e.param));
				that.index = that.param.index;
				//动态设置内容也标题
				uni.setNavigationBarTitle({
					title: that.param.title + '结果'
				});
			} else {
				uni.reLaunch({
					url: '/pages/index/index'
				});
				//隐藏分享按钮
				uni.hideShareMenu();
			}

		},
		onShow() {
			let that = this;
			that.userinfo = app.globalData.userinfo;
			that.getList();
			uni.$on('login', function(res) {
				that.showLogin = res.showLogin;
				that.userinfo = res.userinfo;
				that.getList();
			});
		},
		onShareAppMessage(e) {
			//分享
			let that = this;
			if (e.from === 'menu' || e.from === 'button') {
				return {
					title: app.globalData.title,
					path: '/pages/index/index'
				}
			}
		},
		onShareTimeline(e) {
			//分享到朋友圈
			let that = this;
			if (e.from === 'menu' || e.from === 'button') {
				return {
					title: app.globalData.title,
					path: '/pages/index/index'
				}
			}
		},
		onHide(e) {
			this.removeCache();
		},
		onUnload() {
			uni.$off('login');
		},
		methods: {
			removeCache() {
				let that = this;
				switch (that.index) {
					case 0:
						uni.removeStorageSync('sb' + that.param.zi + that.param.zishu);
						break;
					case 1:
						uni.removeStorageSync('gs' + that.param.diqu + that.param.hangye + that.param.zishu);
						break;
					case 2:
						uni.removeStorageSync('bb' + that.param.xing + that.param.sex + that.param.zi + that.param.dan);
						break;
				}
			},
			getList() {
				let that = this;
				if (Object.keys(that.userinfo).length > 0) {
					that.xz = 10;
				} else {
					that.xz = 2;
				}
				switch (that.index) {
					case 0:
						//商标起名
						that.list = uni.getStorageSync('sb' + that.param.zi + that.param.zishu);
						if (that.list.length <= 0) {
							that.post('/shang_biao/qi_ming', {
								zi: that.param.zi,
								zi_shu: that.param.zishu
							}, function(res) {
								if (res.data.length > 0) {
									that.list = res.data;
									uni.setStorageSync('sb' + that.param.zi + that.param.zishu, that.list);
								} else {
									that.showMsg('查询失败');
									return false;
								}
							});
						}
						break;
					case 1:
						//公司起名
						that.list = uni.getStorageSync('gs' + that.param.diqu + that.param.hangye + that.param.zishu);
						if (that.list.length <= 0) {
							that.post('/qi_ming/gong_si', {
								industry: that.param.hangye,
								san: that.param.zishu,
								limit: that.param.limit
							}, function(res) {
								if (res.list.length > 0) {
									that.list = res.list;
									that.list.forEach((v, i) => {
										that.list[i].quancheng = that.param.diqu +
											'<text class="c-error">' + v
											.ming_zi + '</text>' + that.param.hangye + '有限公司';
									});
									uni.setStorageSync('gs' + that.param.diqu + that.param.hangye + that.param
										.zishu, that.list);
								} else {
									that.showMsg('查询失败');
									return false;
								}
							});
						}
						break;
					case 2:
						//宝宝起名
						that.list = uni.getStorageSync('bb' + that.param.xing + that.param.sex + that.param.zi + that.param
							.dan);
						if (that.list.length <= 0) {
							that.post('/qi_ming/bao_bao', {
								xing: that.param.xing,
								shiChen: that.param.shiChen,
								sex: that.param.sex,
								dan: that.param.dan,
								zi: that.param.zi,
								limit: that.param.limit
							}, function(res) {
								if (res.list.length > 0) {
									that.list = res.list;
									uni.setStorageSync('bb' + that.param.xing + that.param.sex + that.param.zi +
										that.param.dan, that.list);
								} else {
									that.showMsg('查询失败');
									return false;
								}
							});
						}
						break;
				}
			},
			// pay() {
			//	//微信支付功能
			// 	let that = this;
			// 	that.paystatus = true;
			// 	that.post(app.globalData.api_url + '/api/kuaiqiming/createorder', {
			// 		title: that.topBar[that.index].name,
			// 		price: that.price,
			// 		userinfo: JSON.stringify(that.userinfo)
			// 	}, function(res) {
			// 		uni.requestPayment({
			// 			provider: 'wxpay',
			// 			timeStamp: res.data.timeStamp,
			// 			nonceStr: res.data.nonceStr,
			// 			package: res.data.package,
			// 			signType: res.data.signType,
			// 			paySign: res.data.paySign,
			// 			success: function(res) {
			// 				that.showMsg('支付成功', 'success', function() {
			// 					that.removeCache();
			// 					that.getList();
			// 				});
			// 			},
			// 			fail: function(err) {
			// 				that.showMsg('支付失败');
			// 			},
			// 			complete: function() {
			// 				that.paystatus = false;
			// 			}
			// 		});
			// 	}, 'post');
			// }
		}
	}
</script>

<style>

</style>
