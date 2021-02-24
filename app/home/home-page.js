const HomeViewModel = require("./home-view-model");

var home = new HomeViewModel();

function onNavigatingTo(args) {
    const page = args.object;
    console.log("Page Loaded");
    home.set("isLoading", true);
    home.requestMovie().then( () =>{
        home.set("isLoading", false);
    });
    page.bindingContext = home;
}

exports.onNavigatingTo = onNavigatingTo;

function onSwipe(args) {
    let index = home.get("index");
    switch (args.direction){
        case 1:
            //home.rightSwipe();
            home.set("index",index-1);
            home.set("isLoading", true);
            home.requestMovie().then( () =>{
                home.set("isLoading", false);
            });
            console.log("right");
            break;
        case 2:
            //home.leftSwipe();
            home.set("index",index+1);
            home.set("isLoading", true);
            home.requestMovie().then( () =>{
                home.set("isLoading", false);
            });
            console.log("left");
            break;
    }
}

exports.onSwipe = onSwipe;



