function tweetHere() {
  let parentDiv = document.querySelector("#parent");

  // get the existing children
  let prevChildTags = parentDiv.innerHTML;

  // Read the input :: input :: form elements :: .value
  let inputValue = document.querySelector("#input").value;

  // let newChildTag = `<h1>Tweet 1</h1>`;
  let newChildTag = `<h1>${inputValue}</h1>`;

  // parentDiv.innerHTML = prevChildTags + newChildTag;
  parentDiv.innerHTML = `${prevChildTags} ${newChildTag}`;

  // clear the input box
  document.querySelector("#input").value = "";
}
