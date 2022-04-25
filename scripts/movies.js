// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let id;
document.querySelector("#wallet").innerText =
  JSON.parse(localStorage.getItem("amount")) || 0;
//https://www.omdbapi.com/?apikey=6a41ddca&s=

function FetchAndMap() {
  let input = document.querySelector("#search").value;
  fetch(`https://www.omdbapi.com/?apikey=2a24abf8&s=${input}`)
    .then(function (res) {
      return res.json();
      // console.log( res.json());
    })
    .then(function (res) {
      //console.log(res.Search);
      mapMovies(res.Search);
    })
    .catch(function (err) {
      console.log("err");
    });
  function mapMovies(data) {
    document.querySelector("#movies").innerHTML = null;
    data.map(function (e) {
      //console.log(data);
      let box = document.createElement("div");
      box.setAttribute("id", "box");

      let image = document.createElement("img");
      image.src = e.Poster;
      image.setAttribute("id", "image");

      let title = document.createElement("h2");
      title.innerText = e.Title;

      let button = document.createElement("button");
      button.setAttribute("class", "book_now");
      button.innerText = "Book now";
      button.addEventListener("click", function () {
        document.querySelector("#search").value=""
        GoToPage(e);

      });

      box.append(image, title, button);

      document.querySelector("#movies").append(box);
    });

    function GoToPage(e) {
      window.location.href = "../checkout.html";
      localStorage.setItem("movie", JSON.stringify(e));
    }
  }
}

function debounce(FetchAndMap, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    FetchAndMap();
  }, delay);
}
