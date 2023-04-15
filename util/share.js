export default {
    data() {
        return {
            // 默认的全局分享内容
            share: {
                title: '感受AI新世界',
                path: '/pages/main/index/index?intivateCode='+ uni.getStorageSync('userInfo').invitationCode    // 全局分享的路径，比如 首页
            }
        }
    },
    // 定义全局分享
    // 1.发送给朋友
    onShareAppMessage(res) {
        return {
            title: this.share.title,
            path: this.share.path,
        }
    },
    //2.分享到朋友圈
    onShareTimeline(res) {
        return {
            title: this.share.title,
            path: this.share.path,
            // imageUrl: this.share.imageUrl,
        }
    },
}
