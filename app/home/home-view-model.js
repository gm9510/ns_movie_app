const core = require("@nativescript/core");
const { apiUrl, apiKey } = require("./../config");


function HomeViewModel() {
    const viewModel = core.fromObject({
        /* Add your view model properties here */
        Title: "Pelicula",
        Year: "2000",
        Director: "Alguien",
        Runtime: "90 min",
        Poster: "Link",
    });

    viewModel.requestMovie = async() => {
        const URL = `${apiUrl}?t=avatar&apikey=${apiKey}`;
        const response = await fetch(URL);
        const { Title, Year, Director, Runtime, Poster } = await response.json();

        console.log({Title});

        viewModel.set("Title",Title);
        viewModel.set("Year",Year);
        viewModel.set("Director",Director);
        viewModel.set("Runtime",Runtime);
        viewModel.set("Poster",Poster);
    };

    return viewModel;
}

module.exports = HomeViewModel;
