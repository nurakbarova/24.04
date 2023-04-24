const pomodor=document.querySelector(".pomodoro")
const pomodoroTime=prompt("enter time");
const pomodoroSecond=pomodoroTime*60
const pomodoro=()=>{
    pomodor.innerHTML=pomodoroTime
    const minutes=Math.floor(pomodoroSecond/60)
    const second=pomodoroSecond%60 
    // pomodoroSeconds --
    if(pomodoroSecond>-1){
        pomodor.innerHTML=`${minutes>9?minutes:`0${minutes}`}:${second>9?second:`0${second}`}`
    }
    if(pomodoroSecond<=1){
        pomodor.innerHTML="time"
    }

}
setInterval(pomodoro,1000)