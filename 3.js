console.log("Hello JS");

function tweetHere() {
  // Accessing the Parent Div
  let parentDiv = document.querySelector("div");

  // All the children in string form ::  GET from parent innerHtml
  let prevTags = parentDiv.innerHTML;

  // this is new tweet
  let newTag = `<h1 class="alert alert-secondary">Tweet 1</h1>`;

  // Parent DIV :: Update the parent Div :: Update the Object
  // SET on parent innerhtml :: Concatnate
  parentDiv.innerHTML = newTag + prevTags;
}
