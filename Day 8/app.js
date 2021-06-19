document.addEventListener("DOMContentLoaded", function (event) {
  var mainBox = document.getElementById("main-box");


  for (let i = 0; i < 1000; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = "20px";
    gridDiv.style.height = "20px";
    gridDiv.classList.add('teal');
    gridDiv.addEventListener("click", () => {
      gridDiv.classList.toggle("white");
      console.log("class changed!");
    });

    mainBox.appendChild(gridDiv);
  }
});
