/*
*   作者：张帅
*   完成日期：2020/11/1
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
    answer:{},
    //游戏数据
    question:[],
    allColor:["red","chartreuse","skyblue","yellow","white","orange","purple","grey","green","blue"]
    //红，浅绿，浅蓝，黄色，白色，橙色，紫色，灰色,绿色,深蓝
  },

 //测试开始
  testStart:function() {
    var i;
    var questionTemp=[];
    if(this.data.selectedNumber<4)
    {
      var signal={
        number:Math.floor(Math.random()*5),
        font:400,
        color:this.data.allColor[Math.floor(Math.random()*4)]
      }
      for(i=0;i<20;i++){   
        do{
            var temp={
              number:Math.floor(Math.random()*5),
              font:400,
              color:this.data.allColor[Math.floor(Math.random()*4)]
            }
        }while(temp.number==signal.number&&temp.color==signal.color)
        
          questionTemp.push(temp);
         
        }
    }else if(this.data.selectedNumber<8){
      var signal={
        number:Math.floor(Math.random()*5),
        font:400,
        color:this.data.allColor[Math.floor(Math.random()*6)]
      }
      for(i=0;i<20;i++){   
        do{
            var temp={
              number:Math.floor(Math.random()*5),
              font:400,
              color:this.data.allColor[Math.floor(Math.random()*6)]
            }
        }while(temp.number==signal.number&&temp.color==signal.color)
        
          questionTemp.push(temp);
         
        }
    }else if(this.data.selectedNumber<12){
      var signal={
        number:Math.floor(Math.random()*10),
        font:400,
        color:this.data.allColor[Math.floor(Math.random()*8)]
      }

      for(i=0;i<20;i++){   
        do{
            var temp={
              number:Math.floor(Math.random()*10),
              font:400,
              color:this.data.allColor[Math.floor(Math.random()*8)]
            }
        }while(temp.number==signal.number&&temp.color==signal.color)
        
          questionTemp.push(temp);
         
        }
    }else if(this.data.selectedNumber<16){
      var signal={
        number:Math.floor(Math.random()*10),
        font:400,
        color:this.data.allColor[Math.floor(Math.random()*10)]
      }
      for(i=0;i<20;i++){   
        do{
            var temp={
              number:Math.floor(Math.random()*10),
              font:400,
              color:this.data.allColor[Math.floor(Math.random()*10)]
            }
        }while(temp.number==signal.number&&temp.color==signal.color)
        
          questionTemp.push(temp);
         
        }
    }
   

    this.setData({
        answer:signal
    })

    //随机生成数值并存入函数
    
    var index=Math.floor(Math.random()*20)

    this.setData({
      question:questionTemp
    })
    this.setData({
      [`question[${index}]`] :signal
    })

        this.setData({
          showButton:false,
          showTable:true
        });

        if(this.data.selectedNumber==0)
        this.start();
         
  },

//点击数字
clickNumber:function(e){
  //获取点击数值的结构体
  var index=e.currentTarget.dataset.click;
  var seleted=this.data.selectedNumber;
  //黑体数值则将背景变为橙色
  if(this.data.answer.color==this.data.question[index].color&&this.data.answer.number==this.data.question[index].number&&this.data.selectedNumber<=15){

    if(this.data.selectedNumber==15)
    this.stop();
    else
    this.testStart();

    this.setData({
      selectedNumber:seleted+1
    })

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

