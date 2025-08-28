// functionality for heart icon click and heart count
function getTheHeartCount(){
    const heartCount=document.getElementById("heart-count")
    const heartCountNumber=parseInt(heartCount.innerText);
    const newHeartCount=heartCountNumber+1;

    heartCount.innerText=newHeartCount;


}

document.getElementById("heart-icon").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-police").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-fire").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-ambulance").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-womenChild").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-antiCourrption").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-electricity").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-brac").addEventListener("click",getTheHeartCount)
document.getElementById("heart-icon-railway").addEventListener("click",getTheHeartCount)