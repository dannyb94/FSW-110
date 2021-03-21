var movies = ["Snow White", "Cinderella", "Little Mermaid", "Princess and the Frog"];
var games = ["Assasins Creed", "Ghost of Tsushima", "Cyberpunk 2077", "A Plague Tale"];

module.exports = function entertainment(){
    games.pop();
    movies.shift();
    var newArr = movies.concat(games);
    return newArr;
};