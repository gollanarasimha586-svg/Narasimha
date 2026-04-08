var Ctime=document.querySelector('#Ctime')
var Cdate=document.querySelector('#Cdate')
var Cday=document.querySelector('#Cday')
function fun(){
    setInterval(() => {
        let hr,min,sec,status
        hr=new Date().getHours()
        min=new Date().getMinutes()
        sec=new Date().getSeconds()
        hr=hr<10?"0"+hr:hr
        min=min<10?"0"+min:min
        sec=sec<10?"0"+sec:sec
        status=hr<12? "AM":"PM"
        str=(`${hr} : ${min} : ${sec} ${status}`)
        Ctime.innerHTML=str
        Cdate.innerHTML=new Date().toLocaleDateString()
        var l=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
        Cday.innerHTML=l[new Date().getDay()]

    },1000);
}
fun()