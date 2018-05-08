import wx from './util'

const WechatServie = function() {
  if (wx.isWeixin()) {
    const wx = import('weixin-js-sdk')
    let requestUrl = process.env.WX_API + '/wx/officialAccount/sign'
    this.$http.get(requestUrl).then(response => {
      let resData = response.data.data
      let wxConfig = {
        debug: false,
        appId: resData.appId,
        timestamp: resData.timestamp,
        nonceStr: resData.nonceStr,
        signature: resData.signature,
        jsApiList: [
          'onMenuShareAppMessage',
          'onMenuShareTimeline',
          'onMenuShareQQ',
          'onMenuShareWeibo',
          'onMenuShareQZone'
        ]
      }
      wx.config(wxConfig)
      // this.wxShare(this.WxShareInfo);
      if (this.WxShareInfo.link) {
        this.WxShareInfo.link += '&utm_term=wechat_share'
      } else {
        this.WxShareInfo.link = window.location.href + '&utm_term=wechat_share'
      }
      wx.ready(() => {
        wx.onMenuShareAppMessage(this.WxShareInfo)
        wx.onMenuShareTimeline(this.WxShareInfo)
        wx.onMenuShareQQ(this.WxShareInfo)
        wx.onMenuShareWeibo(this.WxShareInfo)
        wx.onMenuShareQZone(this.WxShareInfo)
      })
    })
  }
  console.log('wechat')
}
WechatServie()

export default WechatServie
