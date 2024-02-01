var main=document.querySelector(".main")
var c=document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
c.style.left=dets.x+"px"
c.style.top=dets.y+"px"

})

var emailaddress=document.querySelector(".email-signup")
var button=document.querySelector(".btn")
button.addEventListener("onClick",function(){
    console.log("your email address is: emailaddress") 
})