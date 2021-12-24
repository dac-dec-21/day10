let counter = 0;

function addMovieReview() {
  let parent = document.querySelector("#parent");
  let prevChildTags = parent.innerHTML;

  let movieName = "Abcdef";
  let movieStory = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                    laboriosam sint hic est dolores assumenda deleniti quod!
                    Maiores, suscipit. Similique, nulla? Sint dolores labore alias
                    quasi adipisci velit nulla quam.`;

  counter += 1;
  let movieImageDimension = 300 + counter;

  let newChild = `<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card-header">${movieName}</div>
                        <div class="card-body p-2">
                            <img
                                src="https://picsum.photos/${movieImageDimension}"
                                alt=""
                                style="width: 100%; height: 200px; object-fit: cover"
                            />

                            <div class="my-2">
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
}
