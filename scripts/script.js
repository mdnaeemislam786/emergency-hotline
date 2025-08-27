
// heart count function 
const heartButtons = document.getElementsByClassName("heartClickBtn");
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function() {
    const heartCountValue = parseInt(document.getElementById("heartCount").innerText);
    document.getElementById("heartCount").innerText = heartCountValue + 1;
  });
}




function callingInfo(callHeader, callNumber){
  const callheader = document.getElementById(callHeader).innerText;
  const callnumber = document.getElementById(callNumber).innerText;
  return ("Calling " + callheader + " " + callnumber + "...");
}

// common function
function handleCall(btnId, headerId, numberId){
  document.getElementById(btnId).addEventListener("click", function(){
    const coin = parseInt(document.getElementById("totalCoin").innerText);
    const deta = {
      header: document.getElementById(headerId).innerText,
      number: document.getElementById(numberId).innerText,
      date: new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
      })
    }

    if(coin >= 20){
      document.getElementById("totalCoin").innerText = coin - 20;
      alert(callingInfo(headerId, numberId));

      let div = document.createElement("div")
      div.innerHTML = `
        <div class="flex justify-between items-center bg-[#fafafa] p-4">
            <div>
                <h1 class="font-semibold">${deta.header}</h1>
                <span class="text-gray-500">${deta.number}</span>
            </div>
            <span>${deta.date}</span>
        </div>
      `;
      document.getElementById("histroy").appendChild(div);
    }
    else{
      alert("You do not have enough coins to call, you need at least 20 coins.")
    }
  });
}


handleCall("callBtnNaEm", "headerNaEm", "NumberNaEm");
handleCall("callBtnPolice", "headerPolice", "NumberPolice");
handleCall("callBtnFire", "headerFire", "Numberfire");
handleCall("callBtnAmb", "headerAmb", "numberAbb");
handleCall("callBtnWnC", "headerWnC", "numberWnC");
handleCall("callBtnAnCo", "headerAnCo", "numberAnCo");
handleCall("callBtnElc", "headerElc", "numberElc");
handleCall("callBtnBrac", "headerBrac", "numberBrac");
handleCall("callBtnRail", "callHeader", "cllNumber");

















