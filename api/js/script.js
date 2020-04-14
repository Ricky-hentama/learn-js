$.ajax({
  type: "post",
  url: "http://www.omdbapi.com/?apikey=84244aeb&s=avengers ",
  data: "json",
  success: (data) => {
    const film = data.Search;
    let card = "";
    film.forEach((e) => {
      card += ` <div class="col-md-4 my-5">
        <div class="card"">
            <img src="${e.Poster}" class=" card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${e.Title}</h5>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Tipe : ${e.Type}</li>
                <li class="list-group-item">Tahun : ${e.Year}</li>
                
              </ul>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>`;
      console.log(e);
    });

    $(".movie-card").html(card);
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
