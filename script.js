const days1 = document.getElementById('days');
const hours1 = document.getElementById('hours');
const minutes1 = document.getElementById('minutes');
const seconds1 = document.getElementById('seconds');

const end ='31 Oct 2021';

function countdown(){
    const endDate = new Date(end);//passing countown date
    const currentDate =new Date();

    const tseconds=(endDate-currentDate)/1000;
    const days= Math.floor(tseconds/3600/24);
    const hours= Math.floor(tseconds/3600)%24;
    const minutes =(Math.floor(tseconds/60)%24 )%60;
    const seconds =Math.floor(tseconds%60);
    
    days1.innerHTML = formatTime(days);
    hours1.innerHTML =formatTime(hours);
    minutes1.innerHTML = formatTime(minutes);
    seconds1.innerHTML = formatTime(seconds);
    console.log(endDate - currentDate);
    console.log(days , hours, minutes, seconds);
    
}
function formatTime(time){
    return time<10? (`0${time}`) :time;
}
countdown();
setInterval(countdown,1000);//1sec