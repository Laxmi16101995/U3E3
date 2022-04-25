// Store the wallet amount to your local storage with key "amount"
let rupee;
document.querySelector("#wallet").innerText=JSON.parse(localStorage.getItem("amount"))||0
function addtowalet() {
  

  if (rupee !== null) {
    let addedAlready = JSON.parse(localStorage.getItem("amount"))|| 0;
    rupee = document.querySelector("#amount").value;
    let total = +(addedAlready )+ +(rupee);
    document.querySelector("#wallet").innerText = total;
    localStorage.setItem("amount", JSON.stringify(total));
    //location.reload();
  }
  document.querySelector("#amount").value=""
}

