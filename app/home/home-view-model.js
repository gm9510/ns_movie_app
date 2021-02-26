const core = require("@nativescript/core");
const { apiUrl, apiKey } = require("./../config");

function HomeViewModel() {
    var movieList = new core.ObservableArray([]);
    const viewModel = core.fromObject({
        /* Add your view model properties here */
        movieList: movieList,
    });


    viewModel.searchMovie = async() => {

        const URL = `${apiUrl}?s=halloween&apikey=${apiKey}`;
        const response = await fetch(URL);
        const { Search }  = await response.json();

        Search.forEach( (movie)  => {
            let { imdbID, Title, Poster } = movie;
            console.log( { imdbID, Title, Poster } );

            viewModel.get("movieList").push({
                imdbId: imdbID, 
                title: Title,
                poster: Poster
            });
        });

    };

    viewModel.emptyList = () => {
        while (viewModel.get("movieList").length) {
            viewModel.get("movieList").pop();
        }
    };

    return viewModel;
}

module.exports = HomeViewModel;
