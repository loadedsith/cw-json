// Handle the button click.
$('#show-games').on('click', function() {
  // json_data is a global variable that comes from the data.js
  // script. Pretend this data came from an AJAX call.
  var games = json_data.games;

  // Call the display_games function, passing in the games.
  display_games(games);
});

// Main function to display all the games.
var display_games = function(games) {
  var game;

  // Slide up (hide) the game list.
  $('#game-list').slideUp('fast', function() {
    // Empty the game list.
    $('#game-list').empty();

    // Loop through the array of games.
    for (var i = 0; i < games.length; i++) {
      // Set the game variable equal to the result of calling
      // the build_game function. Be sure to pass in the
      // game currently referenced by the loop.
      game = build_game(games[i]);

      // TODO: Add the recently built game to the list

    }
    // TODO: Slide down (show) the list of games

  });
};

// Sub function to build the markup for a game.
// The argument "game_data" should be a JavaScript object
// containing all the properties of a game.
var build_game = function(game_data) {
  // Create a variable called game and set equal to a new
  // div element.
  var game = $('<div>');

  // Give the new div a class of 'game'.
  game.attr('class', 'game');

  // TODO: Create variable called img and set it equal to a new
  // image element.

  // TODO: Set the src attribute of the new image elment to
  // the box_art property of the game_data object.

  // TODO: Append the new image to the new game div.

  // If the game has characters, add a <ul> to the div
  // with an li for each character.
  if (game_data.characters.length > 0) {
    // TODO: Create a variable named ul and set it equal to a
    // new <ul> element.

    // TODO: Add a class of 'characters' to the new <ul> element.

    // TODO: Create a variable named 'li' to use inside the
    // following loop.

    // TODO: Write a for loop to run once for each character within
    // game_data.
      // TODO: Set the variable named 'li' equal to a new <li>
      // element. Set the <li>'s text value to the name
      // of the current character.

      // TODO: Append the li variable to the <ul> created above.

    // TODO: Append the <ul> created above to the game div.

  }

  // Return the completed markup for the game.
  return game;
};