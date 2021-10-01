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
  newDiv.classList.add("wiki-item");
  document.body.appendChild(newDiv);

  let newHeader = document.createElement("h1");
  newHeader.classList.add("wiki-header");
  newDiv.appendChild(newHeader);

  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("wiki-content");

  let newPar = document.createElement("p");
  newPar.classList.add("wiki-text");
  newDiv2.appendChild(newPar);

  console.log(newHeader);
  console.log(newPar);
}
