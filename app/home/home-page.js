const Frame = require("@nativescript/core/ui/frame").Frame; 
const HomeViewModel = require("./home-view-model");

var home = new HomeViewModel();

function onNavigatingTo(args) {
    const page = args.object;
    console.log("Page Loaded");
    home.emptyList();
    home.set("isLoading", true);
    home.searchMovie().then( () =>{
        home.set("isLoading", false);
    });
    page.bindingContext = home;
}

exports.onNavigatingTo = onNavigatingTo;

function onTap(args) {
    const movieStack = args.object;
    let id = movieStack.getChildAt(2).text;
    let imdbId_list = home.get("movieList").map( (movie) => movie.imdbId );
    const entryContext = {
        moduleName: "movie/movie-page",
        context: {
            id: id,
            imdbId_list: imdbId_list,
        },
        transition: {
            name: "slide",
            duration: 380,
            curve: "easeIn"
        }
    };
    Frame.topmost().navigate(entryContext);
}

exports.onTap = onTap;
