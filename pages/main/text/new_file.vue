<template>
	<view>
		<button @click="abc()"></button>
	</view>

</template> 

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				bigIdx: 1,
				welfare: [{
						icon: '/static/userCenter/icon_signin.png',
						name: '今日打卡'
					},
					{
						icon: '/static/userCenter/icon_profile.png',
						name: '邀请好友'
					},
					{
						icon: '/static/userCenter/icon_friend.png',
						name: '获取积分'
					}
				]

			}
		},
		onLoad() {

		},
		methods: {
			abc(e) {
					wx.login({
					  success (res) {
						  console.log(res.code)
						if (res.code) {
							 res.code;
						} else {
						  console.log('登录失败！' + res.errMsg)
						}
					  }
					})
			}
		}
	}
</script>

<style>
</style>
<style lang="scss" scoped>
</style>
