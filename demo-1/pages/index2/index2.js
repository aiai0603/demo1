//index.js
//获取应用实例
const app = getApp()

var intt;
Page({
  data:{
    show:false,
    showq:false,
    showbu:true,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '00:00:00',
    cost: 0,
    flag: 1,
    endtime: "",
    dis:true,

    ask:"    ",
    askcolor:"green",
   question :[
     {
        src:"../测试.mp3",
        q:"音频里出现了几个1？",
        choose:["4","5"],
        true:1
     },{
        src:"../测试.mp3",
        q:"音频里出现了几个1？",
        choose:["4","5","6"],
        true:1
     },{
      src:"../测试.mp3",
      q:"音频里出现了几个1？",
      choose:["4","5","6","7"],
      true:1
     }
   ],
   indexq:2,

  },
  bindViewTap: function() {
   
  },
  onLoad: function () {
  
   
  },
  getUserInfo: function(e) {
  },


  show:function() {
    wx.playBackgroundAudio({
      dataUrl: "../测试.mp3",
      title: '测试.mp3',
    
  })
   
        this.setData({
          show:true,
        });
        var that=this;
        setTimeout(function () {
          that.setData({
            dis:false
          });
        that.start();
         }, 11000) //延迟时间 这里是1秒

      
  },

  click:function(e){
      var index=e.currentTarget.dataset.index;
      var item=e.currentTarget.dataset.item.true;
      this.stop();
     
      if(item==index){
        this.setData({
          ask:"答案正确"
         });
      }else{
        this.setData({
          ask:"答案错误",
          askcolor:"red"
         });
      }
 
        this.setData({
         dis:true,
        });


    
},


  start:function () {
    var that = this;
    //停止（暂停）
    clearInterval(intt);
    //时间重置
    that.setData({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    })
    intt = setInterval(function () { that.timer() }, 50);
  },
  //暂停
  stop: function () {
    clearInterval(intt);
  },
  //停止
  Reset: function () {
    var that = this
    clearInterval(intt);
    that.setData({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
      timecount: '00:00:00',
    })
  },
  timer: function () {
    var that = this;
    console.log(that.data.millisecond)
    that.setData({
      millisecond: that.data.millisecond + 5
    })
    if (that.data.millisecond >= 100) {
      that.setData({
        millisecond: 0,
        second: that.data.second + 1
      })
    }
    if (that.data.second >= 60) {
      that.setData({
        second: 0,
        minute: that.data.minute + 1
      })
    }
 
    if (that.data.minute >= 60) {
      that.setData({
        minute: 0,
        hour: that.data.hour + 1
      })
    }
    that.setData({
      timecount: that.data.hour + ":" + that.data.minute + ":" + that.data.second + ":" + that.data.millisecond
    })
  },


  
})
