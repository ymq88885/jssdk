!function(e){function o(t){if(c[t])return c[t].exports;var n=c[t]={exports:{},id:t,loaded:!1};return e[t].call(n.exports,n,n.exports,o),n.loaded=!0,n.exports}var c={};return o.m=e,o.c=c,o.p="",o(0)}([function(e,o){wx.config({debug:!1,appId:"wxf8b4f85f3a794e77",timestamp:1421142450,nonceStr:"9hKgyCLgGZOgQmEI",signature:"bf7a5555f9ad0e7e491535f232349a40510a6f8f",jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","showMenuItems","hideAllNonBaseMenuItem","showAllNonBaseMenuItem","translateVoice","startRecord","stopRecord","onRecordEnd","playVoice","pauseVoice","stopVoice","uploadVoice","downloadVoice","chooseImage","previewImage","uploadImage","downloadImage","getNetworkType","openLocation","getLocation","hideOptionMenu","showOptionMenu","closeWindow","scanQRCode","chooseWXPay","openProductSpecificView","addCard","chooseCard","openCard"]}),wx.ready(function(){document.querySelector("#checkJsApi").onclick=function(){wx.checkJsApi({jsApiList:["getNetworkType","previewImage"],success:function(e){alert(JSON.stringify(e))}})},document.querySelector("#onMenuShareAppMessage").onclick=function(){wx.onMenuShareAppMessage({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",trigger:function(e){alert("用户点击发送给朋友")},success:function(e){alert("已分享")},cancel:function(e){alert("已取消")},fail:function(e){alert(JSON.stringify(e))}}),alert("已注册获取“发送给朋友”状态事件")},document.querySelector("#onMenuShareTimeline").onclick=function(){wx.onMenuShareTimeline({title:"互联网之子",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",trigger:function(e){alert("用户点击分享到朋友圈")},success:function(e){alert("已分享")},cancel:function(e){alert("已取消")},fail:function(e){alert(JSON.stringify(e))}}),alert("已注册获取“分享到朋友圈”状态事件")},document.querySelector("#onMenuShareQQ").onclick=function(){wx.onMenuShareQQ({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",trigger:function(e){alert("用户点击分享到QQ")},complete:function(e){alert(JSON.stringify(e))},success:function(e){alert("已分享")},cancel:function(e){alert("已取消")},fail:function(e){alert(JSON.stringify(e))}}),alert("已注册获取“分享到 QQ”状态事件")},document.querySelector("#onMenuShareWeibo").onclick=function(){wx.onMenuShareWeibo({title:"互联网之子",desc:"在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。",link:"http://movie.douban.com/subject/25785114/",imgUrl:"http://img3.douban.com/view/movie_poster_cover/spst/public/p2166127561.jpg",trigger:function(e){alert("用户点击分享到微博")},complete:function(e){alert(JSON.stringify(e))},success:function(e){alert("已分享")},cancel:function(e){alert("已取消")},fail:function(e){alert(JSON.stringify(e))}}),alert("已注册获取“分享到微博”状态事件")};var e={localId:"",serverId:""};document.querySelector("#translateVoice").onclick=function(){return""==e.localId?void alert("请先使用 startRecord 接口录制一段声音"):void wx.translateVoice({localId:e.localId,complete:function(e){e.hasOwnProperty("translateResult")?alert("识别结果："+e.translateResult):alert("无法识别")}})},document.querySelector("#startRecord").onclick=function(){wx.startRecord({cancel:function(){alert("用户拒绝授权录音")}})},document.querySelector("#stopRecord").onclick=function(){wx.stopRecord({success:function(o){e.localId=o.localId},fail:function(e){alert(JSON.stringify(e))}})},wx.onVoiceRecordEnd({complete:function(o){e.localId=o.localId,alert("录音时间已超过一分钟")}}),document.querySelector("#playVoice").onclick=function(){return""==e.localId?void alert("请先使用 startRecord 接口录制一段声音"):void wx.playVoice({localId:e.localId})},document.querySelector("#pauseVoice").onclick=function(){wx.pauseVoice({localId:e.localId})},document.querySelector("#stopVoice").onclick=function(){wx.stopVoice({localId:e.localId})},wx.onVoicePlayEnd({complete:function(e){alert("录音（"+e.localId+"）播放结束")}}),document.querySelector("#uploadVoice").onclick=function(){return""==e.localId?void alert("请先使用 startRecord 接口录制一段声音"):void wx.uploadVoice({localId:e.localId,success:function(o){alert("上传语音成功，serverId 为"+o.serverId),e.serverId=o.serverId}})},document.querySelector("#downloadVoice").onclick=function(){return""==e.serverId?void alert("请先使用 uploadVoice 上传声音"):void wx.downloadVoice({serverId:e.serverId,success:function(o){alert("下载语音成功，localId 为"+o.localId),e.localId=o.localId}})};var o={localId:[],serverId:[]};document.querySelector("#chooseImage").onclick=function(){wx.chooseImage({success:function(e){o.localId=e.localIds,alert("已选择 "+e.localIds.length+" 张图片")}})},document.querySelector("#previewImage").onclick=function(){wx.previewImage({current:"http://img5.douban.com/view/photo/photo/public/p1353993776.jpg",urls:["http://img3.douban.com/view/photo/photo/public/p2152117150.jpg","http://img5.douban.com/view/photo/photo/public/p1353993776.jpg","http://img3.douban.com/view/photo/photo/public/p2152134700.jpg"]})},document.querySelector("#uploadImage").onclick=function(){function e(){wx.uploadImage({localId:o.localId[c],success:function(n){c++,alert("已上传："+c+"/"+t),o.serverId.push(n.serverId),t>c&&e()},fail:function(e){alert(JSON.stringify(e))}})}if(0==o.localId.length)return void alert("请先使用 chooseImage 接口选择图片");var c=0,t=o.localId.length;o.serverId=[],e()},document.querySelector("#downloadImage").onclick=function(){function e(){wx.downloadImage({serverId:o.serverId[c],success:function(n){c++,alert("已下载："+c+"/"+t),o.localId.push(n.localId),t>c&&e()}})}if(0===o.serverId.length)return void alert("请先使用 uploadImage 上传图片");var c=0,t=o.serverId.length;o.localId=[],e()},document.querySelector("#getNetworkType").onclick=function(){wx.getNetworkType({success:function(e){alert(e.networkType)},fail:function(e){alert(JSON.stringify(e))}})},document.querySelector("#openLocation").onclick=function(){wx.openLocation({latitude:23.099994,longitude:113.32452,name:"TIT 创意园",address:"广州市海珠区新港中路 397 号",scale:14,infoUrl:"http://weixin.qq.com"})},document.querySelector("#getLocation").onclick=function(){wx.getLocation({success:function(e){alert(JSON.stringify(e))},cancel:function(e){alert("用户拒绝授权获取地理位置")}})},document.querySelector("#hideOptionMenu").onclick=function(){wx.hideOptionMenu()},document.querySelector("#showOptionMenu").onclick=function(){wx.showOptionMenu()},document.querySelector("#hideMenuItems").onclick=function(){wx.hideMenuItems({menuList:["menuItem:readMode","menuItem:share:timeline","menuItem:copyUrl"],success:function(e){alert("已隐藏“阅读模式”，“分享到朋友圈”，“复制链接”等按钮")},fail:function(e){alert(JSON.stringify(e))}})},document.querySelector("#showMenuItems").onclick=function(){wx.showMenuItems({menuList:["menuItem:readMode","menuItem:share:timeline","menuItem:copyUrl"],success:function(e){alert("已显示“阅读模式”，“分享到朋友圈”，“复制链接”等按钮")},fail:function(e){alert(JSON.stringify(e))}})},document.querySelector("#hideAllNonBaseMenuItem").onclick=function(){wx.hideAllNonBaseMenuItem({success:function(){alert("已隐藏所有非基本菜单项")}})},document.querySelector("#showAllNonBaseMenuItem").onclick=function(){wx.showAllNonBaseMenuItem({success:function(){alert("已显示所有非基本菜单项")}})},document.querySelector("#closeWindow").onclick=function(){wx.closeWindow()},document.querySelector("#scanQRCode0").onclick=function(){wx.scanQRCode({desc:"scanQRCode desc"})},document.querySelector("#scanQRCode1").onclick=function(){wx.scanQRCode({needResult:1,desc:"scanQRCode desc",success:function(e){alert(JSON.stringify(e))}})},document.querySelector("#chooseWXPay").onclick=function(){wx.chooseWXPay({timestamp:1414723227,nonceStr:"noncestr","package":"addition=action_id%3dgaby1234%26limit_pay%3d&bank_type=WX&body=innertest&fee_type=1&input_charset=GBK&notify_url=http%3A%2F%2F120.204.206.246%2Fcgi-bin%2Fmmsupport-bin%2Fnotifypay&out_trade_no=1414723227818375338&partner=1900000109&spbill_create_ip=127.0.0.1&total_fee=1&sign=432B647FE95C7BF73BCD177CEECBEF8D",paySign:"bd5b1933cda6e9548862944836a9b52e8c9a2b69"})},document.querySelector("#openProductSpecificView").onclick=function(){wx.openProductSpecificView({productId:"pDF3iY_m2M7EQ5EKKKWd95kAxfNw"})},document.querySelector("#addCard").onclick=function(){wx.addCard({cardList:[{cardId:"pDF3iY9tv9zCGCj4jTXFOo1DxHdo",cardExt:'{"code": "", "openid": "", "timestamp": "1418301401", "signature":"64e6a7cc85c6e84b726f2d1cbef1b36e9b0f9750"}'},{cardId:"pDF3iY9tv9zCGCj4jTXFOo1DxHdo",cardExt:'{"code": "", "openid": "", "timestamp": "1418301401", "signature":"64e6a7cc85c6e84b726f2d1cbef1b36e9b0f9750"}'}],success:function(e){alert("已添加卡券："+JSON.stringify(e.cardList))}})},document.querySelector("#chooseCard").onclick=function(){wx.chooseCard({cardSign:"97e9c5e58aab3bdf6fd6150e599d7e5806e5cb91",timestamp:1417504553,nonceStr:"k0hGdSXKZEj3Min5",success:function(e){alert("已选择卡券："+JSON.stringify(e.cardList))}})},document.querySelector("#openCard").onclick=function(){alert("您没有该公众号的卡券无法打开卡券。"),wx.openCard({cardList:[]})};var c={title:"微信JS-SDK Demo",desc:"微信JS-SDK,帮助第三方为用户提供更优质的移动web服务",link:"http://demo.open.weixin.qq.com/jssdk/",imgUrl:"http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRt8Qia4lv7k3M9J1SKqKCImxJCt7j9rHYicKDI45jRPBxdzdyREWnk0ia0N5TMnMfth7SdxtzMvVgXg/0"};wx.onMenuShareAppMessage(c),wx.onMenuShareTimeline(c)}),wx.error(function(e){alert(e.errMsg)})}]);