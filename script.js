//Javascript Countdown Timer.
//set the amount of time click
//start timer and the clock will
//count down until it reaches zero 
//Jason Russo http://thescriptcenter.com
// Modified Jason Chan with sound
var message = "It's Time Now";
//do not edit below this line.//
var parselimit=0;
var st=0;
var limit,curhour,curmin,cursec;
function set_limit(strtstop) {
//prevent multiple settimeouts
if(st) { clearTimeout(st); }
 
if(document.getElementById("pause").value == 1) {
limit=document.getElementById("show_timer").innerHTML;
} else {
limit=document.getElementById("hours").value + ":" + document.getElementById("min").value + ":" + document.getElementById("sec").value;
}
parselimit=limit.split(":");
// take the minutes x 60 add it to the seconds;
parselimit=parselimit[0]*3600+parselimit[1]*60+parselimit[2]*1;
//exit if timer wasn't set. //
if(parselimit <= 0) { return; }
 
if(strtstop == 1) {
clearTimeout(st);
} else {
st = setTimeout("begintimer()",1000);
 }
}
 
function begintimer(){
if (parselimit==1) {
//ding ding ding
document.getElementById("show_timer").innerHTML = message;
$(".my_audio").trigger('play');
  alert(message);
  return;
} else{ 
parselimit-=1;
curhour=Math.floor(parselimit/3600);
//alert(parselimit)
/* greater than an hour divide by
60 but subtract the hours. */
if(parselimit > 3600) {
//first convert hours back into seconds
curmin = curhour * 3600;
//subtract that from total to get minutes left.
curmin = parselimit - curmin;
curmin = Math.floor(curmin/60);
//alert(curmin);
} else {
curmin = Math.floor(parselimit/60);
}
cursec=parselimit%60;
 
}
curmin += "";
 if(curmin.length == 1 || curmin==9) {
 curmin = "0" + curmin;
 }
cursec += "";
//alert(cursec);
 if(cursec.length == 1 || cursec==9) {
 cursec = "0" + cursec;
  }
curtime = curhour + ":" + curmin + ":" + cursec;
 
//alert(document.getElementById("show_timer").innerHTML);
document.getElementById("show_timer").innerHTML = curtime;
st=setTimeout("begintimer()",1000);
}
 
function add_time_clock(x,frmelm) {
var ter = document.getElementById(frmelm).value;
  /* add time */
 if(x==1) {
 ter = eval(ter) + 1;
   //if greater than 60 go to zero. i'm maxing out the hours at 60 too.
  if(ter >= 60) {
  ter='00';
   }
  } else {
  /* subtract time */
 ter = eval(ter)-1;
   //if greater than 60 go to zero. i'm maxing out the hours at 60 too.
  if(ter <= 0) {
  ter = '00';
   }
 }
ter = "" + ter;
if(ter.length == 1) { 
ter = "0" + ter;
}
 document.getElementById(frmelm).value = ter;
}
function rset_tmr() {
document.getElementById('show_timer').innerHTML = "00:00:00";
document.getElementById('pause').value=0;
 }
function show_hide(div) {
if(document.getElementById(div).style.display=='none') {
 document.getElementById(div).style.display='';
 } else {
 document.getElementById(div).style.display='none';
   }
 }
$(".my_audio").trigger('load');
function play_audio(task) {
      if(task == 'play'){
           $(".my_audio").trigger('play');
      }
      if(task == 'stop'){
           $(".my_audio").trigger('pause');
           $(".my_audio").prop("currentTime",0);
      }
 }