<template>
	<view class="page">		
		<!-- #ifdef MP -->
		<!-- 小程序才编译 -->
<!-- 		<view class="tips" :style="tipsShow ? '' : 'display:none;'" @click="closeTips">
			<view class="tipsJT"></view>
			<view class="tipsText">添加到我的小程序</view>
			<view class="tipsClose">X</view>
		</view> -->
		<!-- #endif -->
		<view class="u-text-center bold" style="margin-top:70rpx;font-size: 1.5rem; margin-left: 30rpx;">{{title}}</view>
		<view class="soBox bs">
<!-- 			<u-subsection :list="topBar" :current="index" @change="topBarChange" mode = "button" bg-color="#2979ff" button-color="#2979ff"
				active-color="#2979ff" inactive-color="#fff" bold="true"></u-subsection> -->

			<block v-if="index == 0">
				<view class="soInput u-m-t-30 u-m-b-30">
					<u-input v-model="zi" maxlength="3" :clearable="false" placeholder="请输入指定字(至少1个字)"
						 font-size="15px" placeholder-style="font-size : 15px;color : #CCCCCC" />
				</view>
				<view class="soInput u-m-b-30">
					<view class="content">取名字数最小长度：</view>
					<u-number-box v-model="zishu" @change="zishuChange"></u-number-box>
				</view>
				<u-button type="primary" class="bold" @click="getList">{{title}}</u-button>
				<view class="soInfo u-m-t-30">
					<view class="content">当消费者在了解公司的内容之前最先接触到的就是公司的名称，一个好听的公司名字就起到了非常重要的作用。</view>
				</view>
			</block>

			<block v-if="index == 1">
				<view class="soInput u-m-t-30 u-m-b-30">
					<u-input v-model="diqu" :clearable="false" placeholder="请输入地区,如:惠州,广州,深圳"
						 font-size="15px" placeholder-style="font-size : 15px;color : #CCCCCC" />
				</view>
				<view class="soInput u-m-b-30">
					<u-input v-model="hangye" :clearable="false"
						placeholder="请输入行业词,如:科技,家具,软件,女装,五金,酒水,餐厅,奶茶等等"  font-size="15px" placeholder-style="font-size : 15px;color : #CCCCCC"/>
				</view>
				<view class="soInput u-m-b-30">
					<view class="content">取名字数最小长度：</view>
					<u-number-box v-model="zishu" @change="zishuChange"></u-number-box>
										
				</view>
				<view class="soInput u-m-b-30">
					<u-button type="primary" class="bold" @click="getList">{{title}}</u-button>
				</view>
				<view class="soInfo u-m-t-30">
					<view class="content">当消费者在了解公司的内容之前最先接触到的就是公司的名称，一个好听的公司名字就起到了非常重要的作用。</view>
				</view>
			</block>

			<block v-if="index == 2">
				<view class="soInput u-m-t-30 u-m-b-30">
					<u-input v-model="xing" clearable="false" placeholder="请输入您的姓氏"  font-size="15px" placeholder-style="font-size : 15px;color : #CCCCCC" />
					<view class='soSex'>
						<view :class="sex == 1 ? 'soSexItem active' : 'soSexItem'" @click="radioChange('sex',1)">男
						</view>
						<view :class="sex == 0 ? 'soSexItem active' : 'soSexItem'" @click="radioChange('sex',0)">女
						</view>
					</view>
				</view>
				<view class="soInput u-m-b-30">
					<u-input v-model="shijianLabel" @focus="showDatePicker" :auto-blur="false" placeholder="出生日期(公历,精确到小时可算八字)"  font-size="15px" placeholder-style="font-size : 15px;color : #CCCCCC"/>
					<u-datetime-picker :show="shijianShow" v-model="shijianValue" mode="datetime" closeOnClickOverlay="true" @confirm="shijianChange" @cancel="shijianShow = false" @close="shijianShow = false">
					</u-datetime-picker>
				</view>
				<view class="soInput u-m-b-30">
					<u-input v-model="zi" @blur="getZi" :clearable="false" placeholder="有指定字?(1个字 可不填)" :disabled="ziStatus" font-size="15px" placeholder-style="font-size : 15px;color : #CCCCCC" />
					<view class='soSex'>
						<view :class="dan == 0 ? 'soSexItem active' : 'soSexItem'" @click="radioChange('dan',0)">双
						</view>
						<view :class="dan == 1 ? 'soSexItem active' : 'soSexItem'" @click="radioChange('dan',1)">单
						</view>
					</view>
				</view>
				<view class="soInput u-m-b-30">
					<textarea v-model="buchong" :clearable="false" placeholder="其他信息,比如你希望这个名字有什么寓意,偏好古风还是洋气范等等(可不填)" placeholder-style="font-size : 15px;color : #CCCCCC"  class="buchongtxt" />
				</view>
				<view class="soInfo u-m-t-30">
					<u-button type="primary"  class="soButton" @click="getList">{{title}}</u-button>
				</view>
				<view class="soInfo u-m-t-30">
					<view class="content">父母给孩子起名，具有强烈的期望意义，希望孩子健康长寿，幸福快乐，凭借吉祥名字表达对美好生活的追求。</view>
				</view>
			</block>
			
			<block v-if="index == 3">
				<view class="soInputArea u-m-b-30">
					<textarea v-model="buchong" :clearable="false" placeholder="描述其他信息,比如你希望这个名字有什么寓意,偏好古风还是洋气范等等(建议补充更多信息)" placeholder-style="font-size : 15px;color : #CCCCCC"  class="buchongtxt"  />
				</view>
				<view class="soInfo u-m-t-30">
				
					<u-button type="primary"  class="soButton" @click="getList">{{title}}</u-button>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import util from "../../../util/util.js";
	
	const app = getApp();
	export default {
		data() {
			return {
				tipsShow: true,
				appName: app.globalData.title,
				//通用变量
				title: '',
				zi: '',
				buchong:'',
				zishu: 2,
				zishuShow: false,
				zishuList: [{
						label: '2个字名',
						value: 2
					},
					{
						label: '3个字名',
						value: 3
					},
					{
						label: '4个字名',
						value: 4
					},
					{
						label: '5个字名',
						value: 5
					},
					{
						label: '6个字名',
						value: 6
					}
				],
				index: 3,
				//公司起名变量
				diqu: '',
				hangye: '',
				//宝宝起名变量
				dan: 0,
				ziStatus: false,
				sex: 1,
				xing: '',
				shijianLabel: '',
				shijianValue: Number(new Date()),
				shijianShow: false,
				shijianParam: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: false,
					second: false
				},
				topBar: [{
						name: '商标起名'
					},
					{
						name: '公司起名'
					},
					{
						name: '宝宝起名'
					},
					{
						name: '其他'
					}
				]
			}
		},
		onLoad(options) {
			this.title = options.msg;
			for (var i = 0; i < this.topBar.length; i++) {
				var name = this.topBar[i].name;
				if (this.title.includes(name, 1)) {
					this.index = i;
					
				}
				
			}
			console.log(this.title)
		},
		methods: {
			getList() {
				let that = this;
				switch (that.index) {
					case 0:
						if (!that.zi) {
							util.message('请输入至少一个指定字');
							return false;
						}
						var msg = '现在你的身份是世界顶尖的起名大师，我要注册个商标，帮我起名字（先起10个）'+ (that.zishu > 0 ? ('，字数长度超过' + that.zishu + '个'):'')+ (util.isNotBlank(that.zi) ?('，包含字：' + that.zi ) : '');
	
						uni.navigateTo({
							url: '/pages/main/chat/index?msg=' + msg
							
						});
						break;
					case 1:
						if (!that.hangye) {
							util.message('请输入行业等补充信息');
							return false;
						}
						if (!that.diqu) {
							util.message('请输入公司地区信息');
							return false;
						}
						var msg = '现在你的身份是世界顶尖的起名大师，我要给我新开的公司起名字（先起10个）'+ (that.zishu > 0 ? ('，字数长度超过' + that.zishu + '个'):'')+ (util.isNotBlank(that.diqu) ?('，公司成立在' + that.diqu ) : '') + (util.isNotBlank(that.hangye) ?('，公司其他补充信息：' + that.hangye) : '') + "，谢谢！";
						console.log(msg);
						uni.navigateTo({
							url: '/pages/main/chat/index?msg=' + msg
							
						});
						break;
					case 2:
						if (!that.xing) {
							util.message('请输入您的姓氏');
							return false;
						}
						if (!that.shijianValue) {
							util.message('请选择出生日期(公历)');
							return false;
						}
						var msg = '现在你的身份是世界顶尖的起名大师，需要你给我家宝宝起名字（先起10个），宝宝性别：'+ (that.sex == 1 ? '男，姓：' : '女，姓：') + that.xing +'，生日：' + that.shijianLabel + '，给起' + (that.dan == 0 ? '双' : '单') + '字名' + (util.isNotBlank(that.zi) ?('，名字里还需含有' + that.zi + '这个字') : '') +'，名字要符合孩子年龄段的宝宝的起名的特点，还要有些内涵又有些深度，你回答的时候要把姓和名都写上，并解释起名理由（如：寓意和含义）'+ (util.isNotBlank(that.buchong) ?('，补充信息：' + that.buchong) : '');
						uni.navigateTo({
							url: '/pages/main/chat/index?msg=' + msg
							
						});
						break;
					case 3:
							if (!that.buchong) {
								util.message('请输入行业等补充信息');
								return false;
							}

							var msg = '现在你的身份是世界顶尖的起名大师，我要'+ that.title + (util.isNotBlank(that.buchong) ?('，其他补充信息：' + that.buchong) : '') + "，先帮我起10个名，答案中包含的你起名的理由和解释，如果信息不充分，你可以再答案最后一段追问我一个补充信息，谢谢！";
							console.log(msg);
							uni.navigateTo({
								url: '/pages/main/chat/index?msg=' + msg
								
							});
							break;
				}
			},
			topBarChange(e) {
				//通用初始化参数
				this.index = e;
				this.title = this.topBar[e].name;
				this.zi = '';
				this.zishu = 2;
				//公司起名初始化参数
				this.diqu = '';
				this.hangyi = '';
				//宝宝起名初始化参数
				this.dan = 0;
				this.ziStatus = false;
				this.sex = 1;
				this.xing = '';
				this.shijianLabel = '';
				this.shijianValue = '';
				this.shijianShow = false;
			},
			radioChange(k, v) {
				if (k == 'sex') {
					this.sex = v;
				}

				if (k == 'dan') {
					this.dan = v;
					if (v == 1) {
						this.zi = '';
						this.ziStatus = true;
					} else {
						this.ziStatus = false;
					}
				}
			},
			shijianChange(e) {
				var time = e.value
				this.shijianLabel = this.timestampToTime(time)
				this.shijianValue = this.timestampToTime(time);
				this.shijianShow = false;
			},
			zishuChange(e) {
				console.log(e.value)
				this.zishu = e[0].value;
			},
			timestampToTime(timestamp) {
			     var date = new Date(timestamp);//时间戳为10位需*1000，13位的话不需要
			     var Y = date.getFullYear() + "年";
			     var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
			     var D = date.getDate() + "日";
				 var H = date.getHours() +'时';
				 var m = date.getMinutes() + '分'
			     return Y+M+D+H +m;
			},
			showDatePicker(e) {
				this.shijianShow = true;
				setTimeout(() => {
					uni.hideKeyboard();
					plus.key.hideSoftKeybord();
				}, 300)
			},
			getZi(e) {
				console.log(e);
				if (util.isNotBlank(e)) {
					this.zi = e.charAt(0);
					uni.hideKeyboard();
				}
			}
		}
	}
</script>

<style>
	/**
	 * 主题色	#2979ff
	 * 字体色	#424242
	 * 副字体	#767676
	 * 背景色	#F5F5F9
	 * 线色		#BAC0C3
	 */
	.page {
		display: flex;
		box-sizing: border-box;
		width: 100vw;
		min-height: 100vh;
		max-height: 100%;
		color: #424242;
		font-size: 1rem;
		flex-direction: column;
		background-color: #F5F5F9;
		position: relative;
	}
	
	/* 字体大小 */
	.f-2 {
		font-size: 2rem;
	}
	
	/* 蓝色标题左边表框 */
	.l-b-t-primary {
		border-left: 5px solid #2979ff;
		padding-left: 10rpx;
	}
	
	/* 绿色标题左边表框 */
	.l-b-t-success {
		border-left: 5px solid #19be6b;
		padding-left: 10rpx;
	}
	
	/* 橙色标题左边表框 */
	.l-b-t-warning {
		border-left: 5px solid #ff9900;
		padding-left: 10rpx;
	}
	
	/* 灰色标题左边表框 */
	.l-b-t-info {
		border-left: 5px solid #909399;
		padding-left: 10rpx;
	}
	
	/* 红色标题左边表框 */
	.l-b-t-error {
		border-left: 5px solid #fa3534;
		padding-left: 10rpx;
	}
	
	
	/* 空两格 */
	.k2 {
		text-indent: 2em;
	}
	
	/* 蓝背景色 */
	.bg-primary {
		background-color: #2979ff;
	}
	
	/* 绿背景色 */
	.bg-success {
		background-color: #19be6b;
	}
	
	/* 橙背景色 */
	.bg-warning {
		background-color: #ff9900;
	}
	
	/* 灰背景色 */
	.bg-info {
		background-color: #909399;
	}
	
	/* 红背景色 */
	.bg-error {
		background-color: #fa3534;
	}
	
	/* 白背景色 */
	.bg-white {
		background-color: #fff;
	}
	
	/* 绿色字 */
	.c-success {
		color: #19be6b;
	}
	
	/* 蓝色字 */
	.c-primary {
		color: #2979ff;
	}
	
	/* 橙色字 */
	.c-warning {
		color: #ff9900;
	}
	
	/* 灰色字 */
	.c-info {
		color: #909399;
	}
	
	/* 深灰色 */
	.c-info-dark {
		color: #82848a;
	}
	
	/* 红色字 */
	.c-error {
		color: #fa3534;
	}
	
	/* 白色字 */
	.c-white {
		color: #fff;
	}
	
	/* 阴影 */
	.bs {
		box-shadow: 2px 3px 4px rgb(0 0 0 / 20%);
	}
	
	/* 截取,超出显示... */
	.cut {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	/* 副标题颜色 */
	.subtitle {
		color: #BAC0C3;
	}
	
	.subtitle2 {
		color: #767676;
	}
	
	/* 加粗 */
	.bold {
		font-weight: 600;
	}
	
	/* 提示框 - 橙色 */
	.tips-warning {
		width: 90%;
		margin: 20rpx auto;
		line-height: 1.5rem;
		border: 1px solid #FCBE71;
		background-color: #FDF6ED;
		padding: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	
	/* 提示框 - 蓝色 */
	.tips-primary {
		width: 90%;
		margin: 20rpx auto;
		line-height: 1.5rem;
		border: 1px solid #A0CFFF;
		background-color: #EDF5FF;
		padding: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	
	/* 提示框 - 绿色 */
	.tips-success {
		width: 90%;
		margin: 20rpx auto;
		line-height: 1.5rem;
		border: 1px solid #71D5A2;
		background-color: #DBF1E2;
		padding: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	
	/* 提示框 - 红色 */
	.tips-error {
		width: 90%;
		margin: 20rpx auto;
		line-height: 1.5rem;
		border: 1px solid #FAB7B6;
		background-color: #FEF0F0;
		padding: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	
	/* 提示框 - 灰色 */
	.tips-info {
		width: 90%;
		margin: 20rpx auto;
		line-height: 1.5rem;
		border: 1px solid #C8C9CC;
		background-color: #F4F4F5;
		padding: 20rpx;
		border-radius: 10rpx;
		box-sizing: border-box;
	}
	
	/* 右上角提示框 开始 */
	.tips {
		font-size: 0.8rem;
		position: absolute;
		box-sizing: border-box;
		z-index: 10000;
		top: 20rpx;
		right: 0;
		width: 265rpx;
		padding: 6rpx 0rpx;
		display: flex;
		border-radius: 30rpx;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background-color: #a0cfff;
		color: #fff;
	}
	
	/* 提示框三角形箭头 */
	.tipsJT {
		position: absolute;
		top: -38rpx;
		right:111rpx;
		width: 0;
		height: 0;
		border-width: 20rpx;
		border-style: solid;
		border-color: transparent transparent #a0cfff;
		font-size: 0;
		line-height: 0;
	}
	
	/* 提示框内文字 */
	.tipsText {
		margin-left: 20rpx;
	}
	
	/* 提示框关闭按钮 */
	.tipsClose {
		width: 30rpx;
		height: 30rpx;
		font-size: 0.8rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20rpx;
		border: 1px solid #fff;
		border-radius: 50%;
	}
	/* 右上角提示框 结束 */
	
	u-input {
		width: 100%;
	}
	
	.soBox {
		background-color: #fff;
		width: 90%;
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		margin: 50rpx auto;
		border-radius: 10rpx;
	}
	
	.soInput {
		position: relative;
		margin-top:5px;
		width: 100%;
		font-size: 10rpx;
	}
	.soInputArea {
		position: relative;
		margin-top:5px;
		margin-bottom:5px;
		width: 100%;
		font-size: 10rpx;
		border-color: red;
		border-width: 10px 10px 10px 10px;
	}
	
	.soSex {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 10000;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	
	.soSexItem {
		font-size: 30rpx;
		width: 70rpx;
		height: 70rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		color: #fff;
		background-color: #CCCCCC;
		border-radius: 50%;
		margin-right: 20rpx;
	}
	
	.active {
		background-color: #2979ff;
	}
	
	.soInfo {
		padding: 20rpx;
		border-radius: 10rpx;
		line-height: 1.8rem;
		background-color: #F8F8F8;
		color: #999999;
	}
	
	.viewBox {
		background-color: #fff;
		width: 90%;
		display: flex;
		flex-direction: column;
		padding: 30rpx;
		margin: 30rpx auto 20rpx auto;
		border-radius: 10rpx;
	}
	
	.viewGroup {
		display: flex;
		flex-direction: row;
	}
	
	.viewList {
		display: flex;
		flex-direction: column;
	}
	
	.viewItems {
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
	}
	
	.viewItem {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.xing {
		width: 50rpx;
		height: 50rpx;
	}
	
	.gezi {
		width: 90rpx;
		height: 90rpx;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20rpx;
	}
	
	.gezi image {
		width: 90rpx;
		height: 90rpx;
	}
	
	.zi {
		position: absolute;
		z-index: 10000;
		font-size: 2rem;
	}
	
	.shape-btn {
		width: 90%;
		margin: 20rpx auto 50rpx auto;
	}
	
	.userBox{
		display: flex;
		flex-direction: row;
		padding: 30rpx 20rpx;	
		background-color: #FFFFFF;
	}
	
	.userAvatar{
		width: 100rpx;
		height: 100rpx;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 20rpx;
		background-color: #C8C9CC;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.userAvatar image{
		width: 80rpx;
		height: 80rpx;
	}
	
	.userInfo{
		display: flex;
		flex-direction: column;
	}
	
	/* 登录弹窗 */
	.showLogin {
		display: flex;
		width: 600rpx;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding: 60rpx 30rpx;
		background: #fff;
		border-radius: 5%;
	}
	
	.showLogin_title {
		font-size: 1rem;
		font-weight: 600;
	}
	
	.showLogin_des {
		font-size: 0.7rem;
		padding-top: 20rpx;
		color: #98999B;
	}
	
	.showLogin image {
		display: flex;
		width: 360rpx;
		height: 360rpx;
	}
	
	.showLogin_btn {
		box-sizing: border-box;
		display: flex;
		width: 90%;
		margin: 0 auto 0 auto;
		justify-content: space-between;
	}
	.content {
		font-size: 25rpx;
		color: #626262;
		margin-top: 20rpx;
		line-height: 20px;
		/* margin: 3.2%; */
		letter-spacing: 1px;
	}
	.soButton {
		font-size: 25rpx;
		position: relative;
		margin-top : 25rpx; 
	}
	.buchongtxt {
		position: relative;
		margin-top:5px;
		width: 100%;
		height: 60px;
		font-size: 15px;
		border:  1rpx solid #cccccc;
		border-radius: 5rpx;
	}

</style>
