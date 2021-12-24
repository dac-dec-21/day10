function tweetHere() {
  let parentDiv = document.querySelector("#parent");

  // get the existing children
  let prevChildTags = parentDiv.innerHTML;

  // Read the input :: input :: form elements :: .value
  let inputValue = document.querySelector("#input").value;

  if (inputValue.length > 3) {
    // new tag
    let newChildTag = `<h1>${inputValue}</h1>`;

    // concatnation
    parentDiv.innerHTML = `${newChildTag} ${prevChildTags} `;

    // clear the input box
    document.querySelector("#input").value = "";
  } else {
    // alert("The minimum char for tweet should be greater than 3!");
    document.querySelector("#input").style.border = "1px solid red";
  }
}

function validateBorder() {
  let inputValue = document.querySelector("#input").value;
  if (inputValue.length > 3) {
    document.querySelector("#input").style.border = "1px solid black";
  }
}
