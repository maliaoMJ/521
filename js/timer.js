(function(){
  var digit=[
	[//digit 0
	[0,1,1,1,1,1,0],
	[1,1,1,1,1,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[1,1,1,1,1,1,1],
	[0,1,1,1,1,1,0]
	],

	[//digit 1
	[0,0,0,1,1,0,0],
	[0,0,1,1,1,0,0],
	[0,1,1,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,1,1,1,1,1,0],
	[0,1,1,1,1,1,0]
	],

	[//digit 2
	[0,0,1,1,1,0,0],
	[0,1,1,0,1,1,0],
	[1,1,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[0,0,0,0,1,1,0],
	[0,0,0,1,1,0,0],
	[0,0,1,1,0,0,0],
	[0,1,1,0,0,0,1],
	[1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1]
	],

	[//digit 3
	[0,0,1,1,1,0,0],
	[0,1,1,0,1,1,0],
	[1,1,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[0,0,0,1,1,1,0],
	[0,0,0,1,1,1,0],
	[0,0,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,0,1,1,0],
	[0,0,1,1,1,0,0]
	],

	[//digit 4
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,1,0,1,0,0],
	[0,1,1,0,1,0,0],
	[1,1,0,0,1,0,0],
	[1,1,1,1,1,1,1],
	[1,1,1,1,1,1,1],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0]
	],

	[//digit 5
	[0,1,1,1,1,1,0],
	[0,1,1,1,1,1,0],
	[0,1,1,0,0,0,0],
	[0,1,1,1,1,0,0],
	[0,0,0,0,1,1,0],
	[0,0,0,0,0,1,1],
	[0,0,0,0,0,1,1],
	[0,0,0,0,1,1,0],
	[0,1,1,0,1,1,0],
	[0,1,1,1,1,0,0]
	],

	[//digit 6
	[0,0,1,1,1,0,0],
	[0,1,1,0,1,1,0],
	[0,1,1,0,0,0,0],
	[0,1,1,0,0,0,0],
	[0,1,1,1,1,1,0],
	[0,1,1,0,1,1,0],
	[0,1,1,0,0,1,1],
	[0,1,1,0,0,1,1],
	[0,1,1,0,1,1,0],
	[0,0,1,1,1,0,0]
	],

	[//digit 7
	[0,1,1,1,1,0,0],
	[1,1,1,1,1,1,0],
	[1,1,0,0,1,1,0],
	[1,1,0,0,1,1,0],
	[0,0,0,1,1,0,0],
	[0,0,0,1,1,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0],
	[0,0,1,1,0,0,0]
	],

	[//digit 8
	[0,0,1,1,1,0,0],
	[0,1,1,0,1,1,0],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,1,1,1,0],
	[0,1,1,1,1,1,0],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,0,1,1,0],
	[0,0,1,1,1,0,0]
	],

	[//digit 9
	[0,0,1,1,1,0,0],
	[0,1,1,0,1,1,0],
	[1,1,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,0,0,1,1],
	[0,0,1,1,1,1,1],
	[0,0,0,0,0,1,1],
	[1,1,0,0,0,1,1],
	[0,1,1,0,0,1,1],
	[0,0,1,1,1,1,0]
	],

	[//char :
	[0,0,0,0],
	[0,0,0,0],
	[0,1,1,0],
	[0,1,1,0],
	[0,0,0,0],
	[0,0,0,0],
	[0,1,1,0],
	[0,1,1,0],
	[0,0,0,0],
	[0,0,0,0]
	]
];

      var leftTime = (new Date(2017,04,12,05,20,00)) - (new Date()); //计算剩余的毫秒数
      var dayst = parseInt(leftTime / 1000 / 60 / 60 / 24 , 10); //计算剩余的天数
      var hourst = parseInt(leftTime / 1000 / 60 / 60 % 24 , 10)+dayst*24; //计算剩余的小时
      var minutest = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟
      var secondst = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数


   



var R=10,
    D=R*2+2,

    W=screen.availWidth,
    H=Math.min(screen.availHeight,window.innerHeight),
    MARGIN_LEFT=W*0.1,
    MARGIN_TOP=H/10,
    SPACE=((W*0.8)-D*50)/7,
    curTime=hourst*60*60+minutest*60+secondst,
    counter=0,
    balls=[],
    PI2=Math.PI*2,
    _timer,
    cvs=document.querySelector("canvas"),
    ctx=cvs.getContext("2d");
    var ballColor=["#33b5e5","#0099cc","#aa66cc","#9933cc","#9900cc",
	 				"#669900","#ffbb33","#ff8800","#ff4444","#cc0000"],
          ballColorLen=ballColor.length;

    cvs.width=W;
    cvs.height=H;

    function Ball(x,y,color){
      this.x=x;
      this.y=y;
      this.color=color;
      this.vx=((Math.random()*4-2)>>31)*10+5;
      this.vy=-5;
      this.g=Math.random()+0.5;
    }

    Ball.prototype.draw=function(ctx){

       this.x+=this.vx;
       this.vy+=this.g;
       this.y+=this.vy;

       if(this.y>H-this.radius)
       {
         this.y=H-this.radius;
         this.vy*=-0.8;
       }

       if(this.x<-this.radius||this.x>W+this.radius)
       {
        return false;
       }
       ctx.fillStyle=this.color;
       ctx.beginPath();
       ctx.arc(this.x,this.y,this.radius,PI2,0,true);
       ctx.closePath();
       ctx.fill();

       return true;
    };
    Ball.prototype.radius=R;

    function disposeBall(x,y,num,ctx,isColorBall){
       var dig=digit[num],fn;
       if(isColorBall){
         fn=addBall;
       }
       else
      {
        ctx.fillStyle="red";
        fn=drawBall;
      }
       for(var i=0,j,ii=dig.length,jj,d;i<ii;i++)
      {
        for(j=0,d=dig[i],jj=d.length;j<jj;j++)
        {
           d[j]===1&&fn(x+D*j,y+D*i,ctx);
        }
      }
    }

    function addBall(x,y){
        balls.push(new Ball(x,y,ballColor[Math.random()*ballColorLen>>0]));
    }
    function drawBall(x,y,ctx){
      ctx.beginPath();
      ctx.arc(x,y,R,0,PI2,true);
      ctx.closePath();
      ctx.fill();
    }


    function drawDigit(){
      var nextTime,now,hour,minute,seconds,nextHour,nextMinute,nextSeconds;

         now=curTime;
         hour=now/3600>>0;
         now-=hour*3600;
         minute=now/60>>0;
         now-=minute*60;
         seconds=now;

         disposeBall(MARGIN_LEFT,MARGIN_TOP,hour/10>>0,ctx);
         disposeBall(MARGIN_LEFT+D*7+SPACE,MARGIN_TOP,hour%10,ctx);

         disposeBall(MARGIN_LEFT+D*14+SPACE*2,MARGIN_TOP,10,ctx);

         disposeBall(MARGIN_LEFT+D*18+SPACE*3,MARGIN_TOP,minute/10>>0,ctx);
         disposeBall(MARGIN_LEFT+D*25+SPACE*4,MARGIN_TOP,minute%10,ctx);

         disposeBall(MARGIN_LEFT+D*32+SPACE*5,MARGIN_TOP,10,ctx);

         disposeBall(MARGIN_LEFT+D*36+SPACE*6,MARGIN_TOP,seconds/10>>0,ctx);
         disposeBall(MARGIN_LEFT+D*43+SPACE*7,MARGIN_TOP,seconds%10,ctx);

       if(curTime>0&&++counter===60)
      {
         counter=0;

         nextTime=curTime-1;

         now=nextTime;
         nextHour=now/3600>>0;
         now-=nextHour*3600;
         nextMinute=now/60>>0;
         now-=nextMinute*60;
         nextSeconds=now;

        if(hour/10>>0!==nextHour/10>>0)
        {
          disposeBall(MARGIN_LEFT,MARGIN_TOP,hour/10>>0,ctx,true);
        }
        if(hour%10!==nextHour%10)
        {
          disposeBall(MARGIN_LEFT+D*7+SPACE,MARGIN_TOP,hour%10,ctx,true);
        }

        if(minute/10>>0!==nextMinute/10>>0)
        {
          disposeBall(MARGIN_LEFT+D*18+SPACE*3,MARGIN_TOP,minute/10>>0,ctx,true);
        }
        if(minute%10!==nextMinute%10)
        {
           disposeBall(MARGIN_LEFT+D*25+SPACE*4,MARGIN_TOP,minute%10,ctx,true);
        }

        if(seconds/10>>0!==nextSeconds/10>>0)
        {
          disposeBall(MARGIN_LEFT+D*36+SPACE*6,MARGIN_TOP,seconds/10>>0,ctx,true);
        }

        disposeBall(MARGIN_LEFT+D*43+SPACE*7,MARGIN_TOP,seconds%10,ctx,true);


        curTime--;
      }

    }

    function dragBall(){
      balls=balls.filter(function(ball){
          return ball.draw(ctx);
      });
    }

    function drawFrame(){

      if(curTime===0&&balls.length===0)
      {
        clearTimeout(_timer);
        return;
      }

       ctx.clearRect(0,0,W,H);

       drawDigit();
       dragBall();


       _timer=setTimeout(drawFrame,1000/60);
    }

    drawFrame();
})();