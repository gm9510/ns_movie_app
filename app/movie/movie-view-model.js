const core = require("@nativescript/core");
const { apiUrl, apiKey } = require("./../config");

const film_title = ["superbad", "titanic", "avatar", "suspiria", "furious+7", "anabelle", "pirates+of+the+caribbean", "mulholland+drive","Interstellar", "being+john+malkovich"]; 

function MovieViewModel() {
    const viewModel = core.fromObject({
        /* Add your view model properties here */
        index: 0,
        imdbId_list: ["tt1201607","tt0241527"],
        Title: "Pelicula",
        Year: "2000",
        Director: "Alguien",
        Runtime: "90 min",
        Genre: "Acción",
        Poster: "Link",
        isLoading: false,
    });


    viewModel.requestMovie = async() => {
        let index = viewModel.get("index");
        let imdbId_list = viewModel.get("imdbId_list");

        if( index < 0 ) index = film_title.length -1;
        else if ( index >= film_title.length ) index = 0; 

        const URL = `${apiUrl}?i=${imdbId_list[index]}&apikey=${apiKey}`;
        const response = await fetch(URL);
        const { Title, Year, Director, Runtime, Genre, Poster } = await response.json();

        viewModel.set("Title",Title);
        viewModel.set("Year",Year);
        viewModel.set("Director",Director);
        viewModel.set("Runtime",Runtime);
        viewModel.set("Genre",Genre);
        viewModel.set("Poster",Poster);
        viewModel.set("index",index);
    };

    viewModel.pickId = ( id ) =>{
        let index = viewModel.get("imdbId_list").indexOf( id ); 
        viewModel.set("index", index);
    };

    return viewModel;
}

module.exports = MovieViewModel;
