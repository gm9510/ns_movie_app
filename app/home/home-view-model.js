const core = require("@nativescript/core");
const { apiUrl, apiKey } = require("./../config");

const film_title = ["superbad", "titanic", "avatar", "suspiria", "furious+7", "anabelle"]; 

function HomeViewModel() {
    const viewModel = core.fromObject({
        /* Add your view model properties here */
        index: 0,
        Title: "Pelicula",
        Year: "2000",
        Director: "Alguien",
        Runtime: "90 min",
        Genre: "Acción",
        Poster: "Link",
        isLoading: false
    });

    viewModel.requestMovie = async() => {
        var index = viewModel.get("index");
        console.log(index);

        const URL = `${apiUrl}?t=${film_title[index]}&apikey=${apiKey}`;
        const response = await fetch(URL);
        const { Title, Year, Director, Runtime, Genre, Poster } = await response.json();

        console.log({Title});

        viewModel.set("Title",Title);
        viewModel.set("Year",Year);
        viewModel.set("Director",Director);
        viewModel.set("Runtime",Runtime);
        viewModel.set("Genre",Genre);
        viewModel.set("Poster",Poster);
    };


    viewModel.requestMovie = async(dir) => {
        let index = viewModel.get("index");

        if( index < 0 ) index = film_title.length -1;
        else if ( index >= film_title.length ) index = 0; 

        viewModel.set("index",index);

        const URL = `${apiUrl}?t=${film_title[index]}&apikey=${apiKey}`;
        const response = await fetch(URL);
        const { Title, Year, Director, Runtime, Genre, Poster } = await response.json();

        console.log({Title});

        viewModel.set("Title",Title);
        viewModel.set("Year",Year);
        viewModel.set("Director",Director);
        viewModel.set("Runtime",Runtime);
        viewModel.set("Genre",Genre);
        viewModel.set("Poster",Poster);
    };

    return viewModel;
}

module.exports = HomeViewModel;
