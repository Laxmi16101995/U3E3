// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
document.querySelector("#wallet").innerText =
  JSON.parse(localStorage.getItem("amount")) || 0;
let movie = JSON.parse(localStorage.getItem("movie"));
window.addEventListener("load", function () {
  map(movie);
});
function map(movie) {
  console.log(movie);
  //document.querySelector("#movies").innerHTML = null;
  let title = document.createElement("p");
  title.innerText = movie.Title;

  let image = document.createElement("img");
  image.src = movie.Poster;
  image.setAttribute("id", "image");
  document.querySelector("#movie").append(title,image );
}
function Calculate() {
  let seats = document.querySelector("#number_of_seats").value;
  let total = seats * 100;

  let wallet = JSON.parse(localStorage.getItem("amount")) || 0;
  let numberofwallet = +wallet;
  let expence = numberofwallet - total;
  console.log(expence);
  if (expence < 0) {
    alert("Insufficient Balance !");
  } else {
    localStorage.setItem("amount", JSON.stringify(expence));
    alert("Booking successful!");
    location.reload();
  }
}
