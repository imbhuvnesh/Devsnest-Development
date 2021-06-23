document.addEventListener("DOMContentLoaded", function (event) {
  var mainBox = document.getElementById("main-box");
  var count = 400;
  var booked = 0;
  document.getElementById("total-seats").innerText = `Total Seats: ${count}`;
  document.getElementById("booked-seats").innerText = `Booked Seats: ${booked}`;

  for (let i = 0; i < 400; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.width = "20px";
    gridDiv.style.height = "20px";
    gridDiv.classList.add("teal");
    gridDiv.addEventListener("click", () => {
      if (gridDiv.className === "teal") {
        booked += 1;
        count -= 1;
      } else {
        booked -= 1;
        count += 1;
      }
      gridDiv.classList.toggle("dark-teal");

      document.getElementById(
        "total-seats"
      ).innerText = `Total Seats: ${count}`;
      document.getElementById(
        "booked-seats"
      ).innerText = `Booked Seats: ${booked}`;
    });

    mainBox.appendChild(gridDiv);
  }
});
