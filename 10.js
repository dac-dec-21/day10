let counter = 0;

function addMovieReview() {
  let parent = document.querySelector("#parent");
  let prevChildTags = parent.innerHTML;

  let movieName = document.querySelector("#movieName").value;
  let movieStory = document.querySelector("#movieStory").value;

  counter += 1;
  let movieImageDimension = 300 + counter;

  let newChild = `<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card-header text-capitalize h3">${movieName}</div>
                        <div class="card-body p-2">
                            <img
                                src="https://picsum.photos/${movieImageDimension}"
                                alt=""
                                style="width: 100%; height: 200px; object-fit: cover"
                            />

                            <div class="my-2" style="height:100px; overflow-y: auto">
                                ${movieStory}
                            </div>

                            <input
                                class="btn btn-warning w-100"
                                type="button"
                                value="Watch at Amazaon"
                            />
                        </div>
                    </div>
                </div>`;

  parent.innerHTML = prevChildTags + newChild;

  // Clear the input fields
  document.querySelector("#movieName").value = "";
  document.querySelector("#movieStory").value = "";
}
