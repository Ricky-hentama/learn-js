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
        success: function (detail) {
          console.log(detail);
        },
      });
    });
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
