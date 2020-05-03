document.addEventListener("DOMContentLoaded", function () {

    let watchList = JSON.parse(localStorage.getItem('watchlist'));

    function renderMovies(movieArray) {

        function saveWatchlist(currentMovie) {
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

        };

        let saveWatchlist = [];

        saveWatchlist.push(movieArray.map(createHTML))
        return saveWatchlist.join("");
    }

    document.getElementsByClassName('movies-container')[0].innerHTML = renderMovies(watchList);

});