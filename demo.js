// document.getElementById("call-btn-national").addEventListener("click",function(){
//     const serviceName=document.getElementById("service-name-national").innerText
//     const serviceNumber=document.getElementById("service-number-national").innerText
//     alert(serviceName+" "+serviceNumber)

//     const coin=document.getElementById("coin").innerText
//     const coinNumber=parseInt(coin)
    
//     if(coin<20){
        
//         alert("you dont have enought coin")
//         return
//     }   
//     const newCoin=coinNumber-20;
//     document.getElementById("coin").innerText=newCoin
// // for time

//     const now=new Date();
//     const time=now.toLocaleTimeString("en-US",{
//         hour12:false,
//         hour:"2-digit",
//         minute:"2-digit",
//         second:"2-digit"

//     })

//     const historyList=document.getElementById("history-list");
//     historyList.innerHTML+=`
//         <div class="flex justify-between items-center p-5 mb-2 rounded-lg bg-gray-200 mx-6">
//             <div>
//                 <p class="font-semibold">${serviceName}</p>
//                 <p class="text-sm font-semibold text-gray-600">${serviceNumber}</p>
//             </div>
//             <div class="text-xl text-gray-700">${time}</div>
//         </div>
//     `;
    
//     const callHistoryBox = document.querySelector(".call-history");
//     callHistoryBox.classList.remove("bg-white");
//     callHistoryBox.classList.add("bg-gray-100");
    
    

// })

