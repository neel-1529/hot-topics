const container = document.getElementById("content");
const links = document.querySelectorAll("nav a");

let url = "./partials/home.html";


const loadContent = (urlFeed) => {
  fetch(urlFeed)
    .then(response => response.text())
    .then(data => {
      container.innerHTML = data;
    })
    .catch(error => console.log(error));
};


const selectContent = (event) => {
  event.preventDefault();

  const urlFeed = event.target.getAttribute("href");

  loadContent(urlFeed);
};


links.forEach(link => {
  link.addEventListener("click", selectContent);
});

// INITIAL LOAD
loadContent(url);