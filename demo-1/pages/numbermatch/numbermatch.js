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
    first:0,
    first:0,
   

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
    number:[],
    question:[],

    //点击
    index1:-1,
    index2:-1
  },

 //测试开始
  testStart:function() {
    var i;
    var numberTemp=[];
    //随机生成数值并存入函数
    for(i=0;i<10;i++){
      var temp={
        number:Math.floor(Math.random()*10),
        font:400,
        color:"white"
      }
      numberTemp.push(temp);
      this.setData({
        number:numberTemp
      })
      
    }
    for(i=0;i<20;i++){
      this.setData({
        [`question[${i}]`]:-1,
      });
    }

    
    for(i=0;i<10;i++){
      var flag=0;
     

      var temp1={
        number:this.data.number[i].number,
        font:400,
        color:"white"
      }

      var temp2={
        number:this.data.number[i].number,
        font:400,
        color:"white"
      }
       
      
      while(flag!=1)
      {
        var index=Math.floor(Math.random()*20);
        if(this.data.question[index]==-1){
          this.setData({
            [`question[${index}]`]:temp1,
          });
          flag++;
        }
      }

      while(flag!=2)
      {
        var index=Math.floor(Math.random()*20);
        if(this.data.question[index]==-1){
          this.setData({
            [`question[${index}]`]:temp2,
          });
          flag++;
        }
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
  console.log(this.data.question)
 if(this.data.question[index].color=="white")
{


    if(this.data.index1==-1)
    {
      this.setData({
        [`question[${index}].color`] : "orange",
        index1:index,
     });
    }
    else
    {
      if(this.data.question[index].number!=this.data.question[this.data.index1].number)
      {
        this.setData({
          [`question[${this.data.index1}].color`] : "white",
          index1:-1,
        });
      }
      else{
        this.setData({
          [`question[${index}].color`] : "orange",
          index1:-1,
          selectedNumber:selected+1
        });
      }
   }


  }

  //判断是否全部点击完毕，完毕则停止
  if(this.data.selectedNumber==10){
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

