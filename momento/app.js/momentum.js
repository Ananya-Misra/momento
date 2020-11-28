//DOM Elements
let time=document.getElementById("time"),
greet=document.getElementById("greet"),
focus2=document.getElementById("focus2"),
name=document.getElementById("name");
//Show time
console.log(focus2);
console.log(name);
focus2.innerHTML="[Enter Focus]";
console.log(focus2);

function showTime(){
    let timer=new Date(),
    hours=timer.getHours(),
    minutes=timer.getMinutes(),
    seconds=timer.getSeconds();
   
    
    //Am or PM
    let a=hours<=12? 'AM':'PM';
    //12 Hours format
    if(hours>12){
        hours=hours%12;
    } 
    time.innerHTML =`${hours}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} ${a}`;
    
    
  
    setTimeout(showTime,1000);
}
function addZero(n)
{
 if(n<10)
 return '0'+n;
   else
return n;
}//Background set
function setBg(){
    let timo=new Date(),
    hours1=timo.f=timo.getHours();
    
    if(hours1>=4 && hours1<12){
        document.body.style.backgroundImage="url('images/morning2.jpg')";
        greet.innerHTML=`Good Morning, `;
        //  console.log("higuyftydytd");
     }else if(hours1>=12 && hours1<18)
     {
         document.body.style.backgroundImage="url('images/morning.jpg')";
         greet.innerHTML=`Good Afternoon, `;
         
     }
     else{
         document.body.style.backgroundImage="url('images/night2.jpg')";
        greet.innerHTML=`Good Night, `;
     }
   
}
function defName(){
    
    if(localStorage.getItem("name")=="")
    {name.innerHTML="[Enter Name]";
    console.log(name);
    }
     else{
    name.textContent=localStorage.getItem("name");
     }
}
function defFocus(){
    console.log(localStorage.getItem("focus2"));
    if(localStorage.getItem("focus2")==null||localStorage.getItem("focus2")=="")
    {focus2.innerHTML="[Enter Focus]";
    console.log(focus2);
    }
    else{
         focus2.textContent=localStorage.getItem("focus2");
         console.log("fuch");
         
     }
}
function finalName(e){
    if(e.type==="keypress")
    {
        if(e.keyCode==13){
            console.log(e.target.innerHTML !== "");
            // if(e.target.innerHTML !== null)
            console.log(e);
               localStorage.setItem("name",e.target.innerHTML);
            name.blur();
            // else{
            //     name.innerHTML="[Enter Focus]";
            // }
        }
    }
    else{
        localStorage.setItem("name",e.target.innerHTML);
    }
}
function finalFocus(e){
    
    if(e.type==="keypress")
    {
        if(e.keyCode==13){
            console.log(e.target.innerHTML !=="");
            //if(e.target.innerHTML !==""){
            localStorage.setItem("focus2",e.target.innerHTML);
            focus2.blur();
            
        // else
        // { focus2.blur();
        //     console.log(localStorage.getItem("focus"));
        //     console.log(localStorage.getItem("focus"));
        //    focus2.innerHTML="[Enter Focus]";
        //     }

        }
    }
    else{
        localStorage.setItem("focus2",e.target.innerHTML);
    }
}

name.addEventListener("keypress",finalName);
name.addEventListener("blur",finalName);
focus2.addEventListener("keypress",finalFocus);
focus2.addEventListener("blur",finalFocus);
 defName();
 defFocus();
setBg();
showTime();
