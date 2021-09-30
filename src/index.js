import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  /*document.getElementById("app").innerHTML = "<h1>Hello!</h1>";*/
  let newDiv = document.createElement("div");
  let newHeader = document.createElement("h1");
  console.log(newDiv);
  console.log(newHeader);
  newDiv.classList.add("Luokka");
}
