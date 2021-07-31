const start=document.querySelector('#btn-1');
const st=document.querySelector('#btn-2');
const hrs=document.querySelector('.hrs');
const min=document.querySelector('.min');
const sec=document.querySelector('.sec');
var second=0;
var minute=0;
var hour=0;
const seconds=()=>{
     timeRef=setInterval(function(){
        if(second==60){
            second=0;
            sec.innerHTML=`0${second}`;
            minute+=1;
            if(hour<10){
                min.innerHTML=`0${minute}`;
            }else{
                min.innerHTML=`${minute}`;
            } 
        }
        if(minute==60){
            minute=0;
            min.innerHTML=`0${minute}`;
            hour=hour+1;
            if(hour<10){
                hrs.innerHTML=`0${hour}`
            }else{
                hrs.innerHTML=`${hour}`;
            } 
        }
        second=second+1;
        if(second<10){
            sec.innerHTML=`0${second}`
        }else{
        sec.innerHTML=`${second}`;
        }
    },1000);
}
start.addEventListener("click",seconds);
const stop_interval=()=>{
    clearInterval(timeRef);
}
st.addEventListener("click",stop_interval);