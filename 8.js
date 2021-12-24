function addMovieReview() {
  let parent = document.querySelector("#parent");
  let prevChildTags = parent.innerHTML;

  let newChild = `<div class="col-6 col-md-3">
                    <div class="card">
                        <div class="card-header">Abcd</div>
                        <div class="card-body p-2">
                            <img
                                src="https://picsum.photos/300"
                                alt=""
                                style="width: 100%; height: 200px; object-fit: cover"
                            />

                            <div class="my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                                laboriosam sint hic est dolores assumenda deleniti quod!
                                Maiores, suscipit. Similique, nulla? Sint dolores labore alias
                                quasi adipisci velit nulla quam.
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
