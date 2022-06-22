
//app.js
$(function (){

    //시간 재생 - 1초마다 재생
    setInterval(function(){
        
    let d = new Date(); /*.getHours*/
    let h = d.getHours(); //시간변수
    let m = d.getMinutes(); //분
    let s = d.getSeconds(); //초
    let ap = d.getHours();

    // console.log(h,m,s);

    //0~9까지는 앞에 0을 표시 ?
    
    if(h < 10){
        h = '0'+ h;
     }
    
    
    if(m < 10){
       m = '0'+ m;
    }

    if(s < 10){
        s = '0'+ s;
     }

   

    //과제 : 오전 오후 표시 - 24시간제 if ()
     if (ap >= 12, ap++) {
        ap = 'pm';
     } else {
        ap = 'am';
     }


    //과제 : 50분이 되면 '휴식시간' 경고창 띄우기
    if (m ==50 && s==1) {
        alert('휴식시간');
    }

 
 



    //시간표시
    $('.hour').html(h);
    $('.min').html(m);
    $('.sec').html(s);
    $('.amPm').html(ap).css('font-size','16px');
    },1000);




});
