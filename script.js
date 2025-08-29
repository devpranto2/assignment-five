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

//for main section funtionality

function callMake(serviceNameId,serviceNumberId){
    const serviceName=document.getElementById(serviceNameId).innerText
    const serviceNumber=document.getElementById(serviceNumberId).innerText

    alert(serviceName + " " + serviceNumber);

    const coin=document.getElementById("coin").innerText;
    const coinNumber=parseInt(coin);

    if(coinNumber<20){
        alert("you dont have enough coin");
        return;
    }

    const newcoin=coinNumber-20;
    document.getElementById("coin").innerText=newcoin;


    const now=new Date();
    const time=now.toLocaleTimeString("en-US",{
        hour12:false,
        hour:"2-digit",
        minute:"2-digit",
        second:"2-digit"

    })

    const historyList=document.getElementById("history-list");
    historyList.innerHTML+=`
        <div class="flex justify-between items-center p-5 mb-2 rounded-lg bg-gray-200 mx-6">
            <div>
                <p class="font-semibold">${serviceName}</p>
                <p class="text-sm font-semibold text-gray-600">${serviceNumber}</p>
            </div>
            <div class="text-xl text-gray-700">${time}</div>
        </div>
    `;
    
    const callHistoryBox = document.querySelector(".call-history");
    callHistoryBox.classList.remove("bg-white");
    callHistoryBox.classList.add("bg-gray-100");
}

// apply for every cart
//for national emergency
document.getElementById("call-btn-national").addEventListener("click",function(){
    callMake("service-name-national","service-number-national")
})
// police help line
document.getElementById("call-btn-police").addEventListener("click",function(){
    callMake("service-name-police","service-number-police")
})
//fire service
document.getElementById("call-btn-fire").addEventListener("click",function(){
    callMake("service-name-fire","service-number-fire")
})

//ambulance
document.getElementById("call-btn-ambulance").addEventListener("click",function(){
    callMake("service-name-ambulance","service-number-ambulance")
})

//womenChild

document.getElementById("call-btn-womenChild").addEventListener("click",function(){
    callMake("service-name-womenChild","service-number-womenChild")
})

//anti corruption

document.getElementById("call-btn-anti").addEventListener("click",function(){
    callMake("service-name-anti","service-number-anti")
})

//electricity

document.getElementById("call-btn-electricity").addEventListener("click",function(){
    callMake("service-name-electricity","service-number-electricity")
})

//brac

document.getElementById("call-btn-brac").addEventListener("click",function(){
    callMake("service-name-brac","service-number-brac")
})

//railway
document.getElementById("call-btn-railway").addEventListener("click",function(){
    callMake("service-name-railway","service-number-railway")
})


document.getElementById("clear-btn").addEventListener("click",function(){
    const historydlt=document.getElementById("history-list");
    historydlt.innerHTML="";
})


//copy cart number

async function numberOfservice(copyNumberid, copyCountid) {
    const copyCount = document.getElementById(copyCountid);
    const serviceNumberId = document.getElementById(copyNumberid);

    if (!copyCount || !serviceNumberId) return;

    const textCopy = serviceNumberId.innerText.trim();

   
    alert(`Copying the number: ${textCopy}`);

    
    const newCopyCount = parseInt(copyCount.innerText) || 0;
    copyCount.innerText = newCopyCount + 1;

    // Copy to clipboard
    try {
        await navigator.clipboard.writeText(textCopy);
        console.log(textCopy);
    } catch (err) {
        const textarea = document.createElement('textarea');
        textarea.value = textCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

// Attach event listener to the national button
document.getElementById("copy-btn-national").addEventListener("click", function() {
    numberOfservice("service-number-national", "copy-count");
});

//copy count for police

document.getElementById("copy-btn-police").addEventListener("click", function() {
    numberOfservice("service-number-police", "copy-count");
});

//copy cpount for fireservice

document.getElementById("copy-btn-fire").addEventListener("click", function() {
    numberOfservice("service-number-fire", "copy-count");
});

//copy cpount for ambulance

document.getElementById("copy-btn-ambulance").addEventListener("click", function() {
    numberOfservice("service-number-ambulance", "copy-count");
});


//copy cpount for WomenChild

document.getElementById("copy-btn-womenChild").addEventListener("click", function() {
    numberOfservice("service-number-womenChild", "copy-count");
});


//copy cpount for anti

document.getElementById("copy-btn-anti").addEventListener("click", function() {
    numberOfservice("service-number-anti", "copy-count");
});


//copy cpount for electricity

document.getElementById("copy-btn-electricity").addEventListener("click", function() {
    numberOfservice("service-number-electricity", "copy-count");
});


//copy cpount for brac

document.getElementById("copy-btn-brac").addEventListener("click", function() {
    numberOfservice("service-number-brac", "copy-count");
});

//copy cpount for railway

document.getElementById("copy-btn-railway").addEventListener("click", function() {
    numberOfservice("service-number-railway", "copy-count");
});


