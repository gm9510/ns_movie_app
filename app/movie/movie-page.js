const Frame = require("@nativescript/core/ui/frame").Frame; 
const MovieViewModel = require("./movie-view-model");

var movie = new MovieViewModel();

function onNavigatingTo(args) {
    const page = args.object;
    var { imdbId_list } = args.context;
    console.log("Movie Page Loaded");
    movie.set("imdbId_list", imdbId_list);
    movie.set("isLoading", true);
    movie.requestMovie().then( () =>{
        movie.set("isLoading", false);
    });
    page.bindingContext = movie;
}

exports.onNavigatingTo = onNavigatingTo;

function onSwipe(args) {
    let index = movie.get("index");
    switch (args.direction){
        case 1:
            //movie.rightSwipe();
            movie.set("index",index-1);
            movie.set("isLoading", true);
            movie.requestMovie().then( () =>{
                movie.set("isLoading", false);
            });
            break;
        case 2:
            //movie.leftSwipe();
            movie.set("index",index+1);
            movie.set("isLoading", true);
            movie.requestMovie().then( () =>{
                movie.set("isLoading", false);
            });
            break;
    }
}

exports.onSwipe = onSwipe;

function onNavBtnTap(){
    console.log("Back btn tapped");
    Frame.goBack();
}

exports.onNavBtnTap = onNavBtnTap;
