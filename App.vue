<script>
	import util from "@/util/util.js";
	export default {
		onLaunch: function() {
			this.updateVersion()
			util.getbaseConfig()
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{

			updateVersion(){
				const updateManager = wx.getUpdateManager()
				updateManager.onCheckForUpdate(function (res) {
				  // 请求完新版本信息的回调
				  console.log(res.hasUpdate)
				})
				updateManager.onUpdateReady(function () {
				  wx.showModal({
				    title: '更新提示',
				    content: '新版本已经准备好，是否重启应用？',
					showCancel:false,//隐藏取消按钮
				    success: function (res) {
				      if (res.confirm) {
				        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
				        updateManager.applyUpdate()
				      }
				    }
				  })
				})
				updateManager.onUpdateFailed(function () {
					 // 新的版本下载失败
					  wx.showModal({
						  title: '已经有新版本了哟~',
						  content: '老版本不支持很多功能~，请您删除当前小程序，重新搜索打开!',
					  })
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "static/css/index-app.css";
	
	@import "uview-ui/index.scss";
	@import "cl-uni/index.scss";
	/* #ifdef H5 */ 
	
		uni-page-head { display: none; } 
	/* #endif */
</style>