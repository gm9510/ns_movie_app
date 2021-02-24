const HomeViewModel = require("./home-view-model");

var home = new HomeViewModel();

function onNavigatingTo(args) {
    const page = args.object;
    console.log("Page Loaded");
    home.requestMovie();
    page.bindingContext = home;
}

exports.onNavigatingTo = onNavigatingTo;
