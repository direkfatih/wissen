const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "be5e94fe4fmsh805e0ab9b4dfec1p1e61d0jsn2790371f9977",
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

document.getElementById("filmGetir").addEventListener("click", filmGetirFunc);

function filmGetirFunc() {
  fetch("https://imdb-top-100-movies.p.rapidapi.com/", options)
    .then((res) => res.json())
    .then((data) => {
      let output =
        "<h1 class='text-center text-success'>IMDB TOP100 FİLM LİST</h1><div class='row'>";
      data.map(
        (api) =>
          (output += `
          
          <div class="col-3">
          <div class="card" style="width: auto;">
            <img src="${api.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${api.title}</h5>
        <p class="card-text">${api.description}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Rank : ${api.rank} </li>
            <li class="list-group-item">Genre : ${api.genre}</li>
            <li class="list-group-item">Year : ${api.year}</li>
            <li class="list-group-item">Rating : ${api.rating}</li>
        </ul>
        <div class="card-body">
        <a class="card-link">Watch Now</a>
  </div>
</div>
          </div>
  
  
          `)
      );
      document.getElementById("cikti").innerHTML = output + "</div>";
    });
}


const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'be5e94fe4fmsh805e0ab9b4dfec1p1e61d0jsn2790371f9977',
		'X-RapidAPI-Host': '1mdb-data-searching.p.rapidapi.com'
	}
};



document
  .getElementById("diziGetir")
  .addEventListener("click", diziGetirFunc);

  function diziGetirFunc() {
    fetch('https://1mdb-data-searching.p.rapidapi.com/om?i=tt1285016', options1)
    .then((res) => res.json())
    .then((data) => {
      let output =
        "<h1 class='text-center text-success'>IMDB TOP100 TV SERİES LİST</h1><div class='row'>";
      data.map(
        (api) =>
          (output += `
          
          <div class="col-3">
          <div class="card" style="width: auto;">
            <img src="${api.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-center">${api.Title}</h5>
        <p class="card-text">${api.Plot}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">Awards : ${api.Awards} </li>
            <li class="list-group-item">Genre : ${api.Genre}</li>
            <li class="list-group-item">Year : ${api.Year}</li>
            <li class="list-group-item">Rating : ${api.imdbRating}</li>
        </ul>
        <div class="card-body">
        <a class="card-link">Watch Now</a>
  </div>
</div>
          </div>
  
  
          `)
      );
      document.getElementById("cikti").innerHTML = output + "</div>";
    });
  }