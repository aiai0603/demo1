/*
*   作者：张帅
*   完成日期：2020/11/8
*   attentionTest-3.js
*/

//获取应用实例
const app = getApp()  
//计时器初始化文件
var intt;
Page({
  data:{
    //页面显示参数
    showButton:true,
    showTable:false,
    selectedNumber:0,

    //计时器参数
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    timecount: '00:00:00',
    cost: 0,
    flag: 1,
    endtime: "",

    //游戏数据
    question:[],
  },

 //测试开始
  testStart:function() {
    var i;
    var questionTemp=[];
    //随机生成数值并存入函数
    for(i=0;i<20;i++){
      var temp={
        number:Math.floor(Math.random()*10),
        font:400,
        color:"white"
      }
      questionTemp.push(temp);
      this.setData({
          question:questionTemp
      })
    }

    //随机生成三个黑体数值
    var flag1=false;
    var flag2=false;
    var flag3=false;
    while(!flag1){
      var now=Math.floor(Math.random()*20);
      if( this.data.question[now].font==400){
        this.setData({
          [`question[${now}].font`] : 1000,
        
        });
          flag1=true;
      }
    }

    while(!flag2){
      var now=Math.floor(Math.random()*20);
      if( this.data.question[now].font==400){
        this.setData({
          [`question[${now}].font`] : 1000
        });
          flag2=true;
      }
    }

    while(!flag3){
      var now=Math.floor(Math.random()*20);
      if( this.data.question[now].font==400){
        this.setData({
          [`question[${now}].font`] : 1000
        });
          flag3=true;
      }
    }
        this.setData({
          showButton:false,
          showTable:true
        });
        //开始计时
        this.start();  
  },

//点击数字
clickNumber:function(e){
  //获取点击数值的结构体
  var index=e.currentTarget.dataset.click;
  var selected=this.data.selectedNumber;
  //黑体数值则将背景变为橙色
  if(this.data.question[index].font==1000&&this.data.question[index].color!="orange"){
    this.setData({
      [`question[${index}].color`] : "orange",
      selectedNumber:selected+1
    });
  }
  //判断是否全部点击完毕，完毕则停止
  if(this.data.selectedNumber==3){
        this.stop();
  }
},

//开始计时
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
  //暂停计时
  stop: function () {
    clearInterval(intt);
  },
  
  //计时运行程序
  timer: function () {
    var that = this;
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

