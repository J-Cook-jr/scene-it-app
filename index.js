let myForm = document.getElementById('search-form');

function saveToWatchlist(imdbID) {
    let movie = movieData.find((currentMovie) => currentMovie.imdbID == imdbID);

    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}


myForm.addEventListener('submit', e => {
    e.preventDefault();
    createHTML =[]
    let value = $('#search-string').val();
    let urlEncodedSearchString = encodeURIComponent(value);

    axios.get("http://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString)
            .then(function(response) {
                console.log(response.data)
                
                createHTML.push(response.data.Search);
                document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(response.data.Search);
            })
    






    function renderMovies(movieArray) {
        let movieHTMLArray = movieArray.map(function (currentMovie) {
            return `
            <div class="col-4 mb-4">
                <div class="card h-100">
                    <img src="${currentMovie.Poster}" class="card-img-top" alt="Card image cap">
                    <div class="card-body">
                        <h5>${currentMovie.Title}<span class="badge badge-secondary">${currentMovie.Year}</span></h5>
                    </div>
                    <div class="card-footer">
                        <button onclick="saveToWatchlist('${currentMovie.imdbID}')"
                        type="button" class="btn btn-outline-success">Save</button>
                    </div>
                </div>
            </div>
            `

        });
        return movieHTMLArray.join('');
    }
    const moviesContainer = document.querySelector('.movies-container')
    const moviesRow = document.querySelector('.row')

    moviesContainer.innerHTML = renderMovies(movieData);

});