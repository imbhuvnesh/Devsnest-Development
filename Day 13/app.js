const URL = "https://meme-api.herokuapp.com/gimme";
let main = document.getElementById("main");
let meme = document.createElement("div");
meme.style.width = "100vh";
meme.style.height = "80vh";
meme.style.backgroundRepeat = "no-repeat";
meme.style.backgroundSize = "100%";
meme.style.height = "250vh";

fetch(URL)
  .then((response) => response.json())
  .then((res) => {
    showData(res);
  });

function showData(res) {
  meme.style.backgroundImage = `url(${res.url})`;
  main.appendChild(meme);
}

let nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.onclick = next;
main.appendChild(nextBtn);

function next() {
  location.reload();
}
