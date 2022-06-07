

const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});

//Tournaments page slide show

let imagesArray=[
    './style/static/slideshow/cwc1983.webp',
    './style/static/slideshow/img2011cwc.jpg',
    './style/static/slideshow/asia.jpg',
    './style/static/slideshow/asia2.jpg',
    './style/static/slideshow/icc.webp'
]
let image=$('.imgs')

let i=0;
setInterval(function(){
    i = (i+1)% imagesArray.length;
    $(document).ready(function(){
    image.fadeOut(1000,()=>{
        image.attr('src',imagesArray[i]);
        image.attr('height','400px');
        image.attr('width','500px');
        image.fadeIn(1000);
    });
});


});

let nameNode=document.getElementById('name');
let emailNode=document.getElementById('email');
let phoneNode=document.getElementById('phone');
let messageNode=document.getElementById('message');

let errorNode1=document.getElementById('error1');
let errorNode2=document.getElementById('error2');
let errorNode3=document.getElementById('error3');
let errorNode4=document.getElementById('error4');
let errorborder="2px solid red";
let successborder="2px solid green";

function validateForm(){
    let s1=validate1();
    let s2=validate2();
    let s3=validate3();
    let s4=validate4();
 

    return(s1 && s2 && s3 && s4 )
}

function validate1(){
    let name=nameNode.value;
    errorNode1.innerHTML="";
    if (name==="") {
        errorNode1.innerHTML="Your name is required";
        nameNode.style.border=errorborder;
        return false;
    } else {
        nameNode.style.border=successborder;
        return true;
    }
}

function validate2(){
    let email=emailNode.value;
    errorNode2.innerHTML="";
    let ss1=email.substring(0,email.indexOf("@"));
    let ss2=email.substring(email.indexOf("@")+1);
    //let index=email.indexOf('@');
    // if(email==0 || index===email.length-1)
    console.log(ss1);
    console.log(ss2);
    if(email===''){
        errorNode2.innerHTML="Email id is required";
        emailNode.style.border=errorborder;
        return false;

    }
    else if(!email.includes('@')){
        errorNode2.innerHTML="Email id should contain @";
        emailNode.style.border=errorborder;
        return false;

    }
    else if(ss1==='' || ss2===''){
        errorNode2.innerHTML="Invalid Email id";
        emailNode.style.border=errorborder;
        return false;

    }
    else{
        emailNode.style.border=successborder;
        return true;

    }
}
// about page

$(document).ready(function(){
    let var1=$("#history").mouseover(function(){
      var1.html('<h2>The 1983 world cup changes the mindset of indian peoples</h2>');
    });
    $("#history").mouseout(function(){
      $("#history").html('<h1>Tournament History</h1>');
    });
    let var2=$('#indteam').mouseover(function(){
        var2.css('background-color','yellow');
    });
    let var3=$('#indteam').mouseout(function(){
        var3.css('background-color','white');
    });
  });

  //home page
  function imageChange() {
    var Image_Id = document.getElementById('crickimg');
    if (Image_Id.src.match("./style/static/downloadteam.jpg")) {
        Image_Id.src = "./style/static/IndianCricketTeam_Facebook_17112020_1200x800.jpg";
    }
    else {
        Image_Id.src = "./style/static/downloadteam.jpg";
    }
}
function validate3(){
    let myphone=phoneNode.value;
    let regExp =new RegExp("^[0-9]{10}$");
    errorNode3.innerHTML="";
    console.log(regExp.test(myphone));
        if(myphone===''){
        errorNode3.innerHTML="mobile number is required";
        phoneNode.style.border=errorborder;
        return false;

    }
    
    else if(regExp.test(myphone)==false){
        errorNode3.innerHTML="Please enter a valid phone number";
        phoneNode.style.border=errorborder;
        return false;

    }
    else{
        phoneNode.style.border=successborder;
        return true;

    }
}

function validate4(){
    let message=messageNode.value;
    
    errorNode4.innerHTML="";
    if (message==="") {
        errorNode4.innerHTML="Message is required";
        messageNode.style.border=errorborder;
        return false;

        
    } 
    else if(message.length<10){
        errorNode4.innerHTML="message contains atleast 10 characters";
        messageNode.style.border=errorborder;
        return false;

    }
    
    else {
        messageNode.style.border=successborder;
        return true;

    }
}

// let colorArray=["orange","white","green","yellow","pink"];
// i=0;

// let interval=setInterval(()=>{
//     document.getElementById('cricketId').style.backgroundColor=colorArray[i];
//     if(i==colorArray.length)
//         clearInterval(interval)
//     else
//         i++;
// },1000)

// setTimeout(1000);



// $(document).ready(function(){
// let newImgNode=$('#yuvrajimg').mouseover(function(){

//     newImgNode.attr('src','./style/static/yuvrajnew.jpg');
// });

// });
// $(document).ready(function() {
//     let yuvipa=$("#yuvrajimg");
//     yuvipa.mouseover(function() {
//         console.log(yuvipa);
//         // Change src attribute of image
//         $("#yuvrajimg").attr("src", "./style/static/yuvrajnew.jpg");
//       });
//   });

// players page script

function imagefun() {
    var Image_Id = document.getElementById('getImage');
    if (Image_Id.src.match("./style/static/players/yuvi.jpg")) {
        Image_Id.src = "./style/static/players/yuvrajnew.jpg";
    }
    else {
        Image_Id.src = "./style/static/players/yuvi.jpg";
    }
}