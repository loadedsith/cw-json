// Handle the button click.
$('#show-games').on('click', function() {
  // json_data is a global variable that comes from the data.js
  // script. Pretend this data came from an AJAX call.
  var games = json_data.games;

  // Call the display_games function, passing in the games.
});

// Main function to display all the games.
var display_games = function(games) {
  var game;

  // Slide up (hide) the game list.
    // Empty the game list.

    // Loop through the array of games.
      // Set the game variable equal to the result of calling
      // the build_game function. Be sure to pass in the
      // game currently referenced by the loop.

      // Add the recently built game to the list

    // slide down (show) the list of games
};

// Sub function to build the markup for a game.
// The argument "game_data" should be a JavaScript object
// containing all the properties of a game.
var build_game = function(game_data) {
  // Create a variable called game and set equal to a new
  // div element.

  // Give the new div a class of 'game'.

  // Create variable called img and set it equal to a new
  // image element.
  var img = $('<img>').attr('src', game_data.box_art);

  // Set the src attribute of the new image elment to
  // the box_art property of the game_data object.

  // Append the new image to the new game div.

  // If the game has characters, add a <ul> to the div
  // with an li for each character.
    // Create a variable named ul and set it equal to a
    // new <ul> element.
    var ul = $('<ul>').attr('class', 'characters');

    // Add a class of 'characters' to the new <ul> element.

    // create a variable named 'li'.

    // Write a for loop to run once for each character within
    // game_data.
    for (var i = 0; i < game_data.characters.length; i++) {
      // Set the variable named 'li' equal to a new <li>
      // element. Set the <li>'s text value to the name
      // of the current character.

      // Append the li variable to the <ul> created above.
    }

    // Append the <ul> created above to the game div.
    game.append(ul);
  }

  // Return the completed markup for the game.
  return game;
};