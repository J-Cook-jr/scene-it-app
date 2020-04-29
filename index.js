const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function (e) {
    e.preventDefault();
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
                        <button type="button" class="btn btn-outline-success">Save</button>
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
})