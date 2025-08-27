
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




document.getElementById("callBtnNaEm").addEventListener("click", function(){
  const coin = parseInt(document.getElementById("totalCoin").innerText);
  const deta={
    header: "National Emergency Number",
    number:"999",
    date:new Date().toLocaleDateString()
  }
  if(coin >= 20){
    const newCoin = coin - 20;
    document.getElementById("totalCoin").innerText = newCoin;
    alert(callingInfo("headerNaEm","NumberNaEm"))

    let div = document.createElement("div")
    div.innerHTML=`
      <div class="flex justify-between items-center bg-[#fafafa] p-4">
          <div>
              <h1 class="font-semibold">${deta.header}</h1>
              <span class="text-gray-500">${deta.number}</span>
          </div>
          <span>
              ${deta.date}
          </span>
      </div>
    `
    document.getElementById("histroy").appendChild(div);
  }
  else{
    alert("You do not have enough coins to call, you need at least 20 coins.")
  }
})
























// const callButtons = document.getElementsByClassName("callBtn");
// for (let i = 0; i < callButtons.length; i++) {
//     callButtons[i].addEventListener("click", function() {
//     alert(callingInfo('callHeader','cllNumber'));
//   });
// }

