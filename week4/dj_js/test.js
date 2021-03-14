let jsdom = require("jsdom").JSDOM,
uri = "/Users/iluvmacncheese/Development/Bryan_University/FSW-110/week4/dj_js/dj.js",
options = {
    resources: "usable"
};

jsdom.fromFile(uri, options).then(function(dom){ console.log(dom)
    let window = dom.window,
    document = window.document;

//stuff here

}).catch(function(e){
    console.log(e);
});