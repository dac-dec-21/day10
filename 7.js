let counter = 0;
document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    let parentDiv = document.querySelector("#parent");
    let prevChildTags = parentDiv.innerHTML;
    if (counter % 5 == 0) {
      let newChildTag = `<div class="alert alert-danger">Lets boycot #83 Movie</div>`;
      parentDiv.innerHTML = `${newChildTag} ${prevChildTags}`;
    } else {
      let newChildTag = `<div class="alert alert-secondary">Lets celebrate #83 Movie</div>`;
      parentDiv.innerHTML = `${newChildTag} ${prevChildTags}`;
    }

    counter++;
  }, 1000);
});

function tweetHere() {
  let parentDiv = document.querySelector("#parent");

  // get the existing children
  let prevChildTags = parentDiv.innerHTML;

  // Read the input :: input :: form elements :: .value
  let inputValue = document.querySelector("#input").value;

  if (inputValue.length > 3) {
    // new tag
    let newChildTag = `<div class="alert alert-secondary">${inputValue}</div>`;

    // concatnation
    parentDiv.innerHTML = `${newChildTag} ${prevChildTags} `;

    // clear the input box
    document.querySelector("#input").value = "";
  } else {
    // alert("The minimum char for tweet should be greater than 3!");
    // document.querySelector("#input").style.border = "1px solid red";
    document.querySelector("#input").classList.add("border-3");
    document.querySelector("#input").classList.add("border-danger");
  }
}

function validateBorder() {
  let inputValue = document.querySelector("#input").value;
  if (inputValue.length > 3) {
    document.querySelector("#input").classList.remove("border-danger");
  }
}
