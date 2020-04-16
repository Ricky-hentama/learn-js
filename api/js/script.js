$.ajax({
  type: "post",
  url: "http://www.omdbapi.com/?apikey=84244aeb&s=avengers ",
  data: "json",
  success: (data) => {
    const film = data.Search;
    let card = "";
    film.forEach((e) => {
      card += ` <div class="col-sm-4  my-5">
        <div class="card">
            <img src="${e.Poster}"  >
            <div class="card-body">
                <h5 class="card-title">${e.Title}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Tahun : ${e.Year}</li>
                
              </ul>
              
                <a href="#"
                data-toggle="modal"
                data-imdbid="${e.imdbID}"
                data-target="#exampleModal"  class="btn btn-primary detail-button">Detail</a>
            </div>
        </div>
    </div>`;
    });

    $(".movie-card").html(card);

    $(".detail-button").click(function (e) {
      let imdb = e.target.dataset.imdbid;
      $.ajax({
        type: "post",
        url: "http://www.omdbapi.com/?apikey=84244aeb&i=" + imdb,
        data: "json",
        success: function (d) {
          let modal = "";
          modal += ` <div class="container-fluid">
                      <div class="row">
                        <div class="col-sm-3"> <img src="${d.Poster}" class="img-fluid">
                        </div>
                        <div class="col">
                          <ul class="list-group">
                            <li class="list-group-item"><strong>Genre :</strong> ${d.Genre}</li>
                            <li class="list-group-item"><strong>Released :</strong> ${d.Released}</li>
                            <li class="list-group-item">
                              <strong>Director : </strong> ${d.Director}
                            </li>
                            <li class="list-group-item">
                              <strong>Plot :</strong><br /> ${d.Plot}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>`;
          $(".modal-body").html(modal);
        },
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
