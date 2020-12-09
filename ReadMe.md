# Top  Trumps Challenge

## Project Brief

This was Code Nation challenge to create a Top Trumps game using data to represent 30 cards.  

The first stage was to create a game using cards with a **single category** in node.js. 

The second stage was to create a **two-player** version. Each card had to have 5 categories.  The rules of the two player game are below. 

### Rules of the game: 2 players

The game is played taking turns between one players’ hand of 15
cards and the other player’s hand. The cards have statistics on
them which will allow the user to pick an attribute and compare
that attribute with the other players’ top card; whoever has the
strongest chosen attribute, wins both cards. If the values are the
same, both cards go into limbo and whoever wins the next hand,
wins the limbo cards and the ones just battled. The winning
player of the hand continues to choose until they lose.

## Project Versions

Whilst working on this project, I created the following versions:
 - a single category backend version
 - a two-player backend version
 - 2 two-player web versions using functions to manipulate the DOM
    - using a separate .json file with the card data and fetch() with a try/catch block to link to the file
    - using a javascript class in the main javascript file to create the data for the cards

Making the different versions enabled me to build on what I created previously and learn about different solutions to create a game.

### Single category version: top_trump.js

This is a simple version using one category which runs in node.js. It shuffles the cards into 2 'players' and then uses a loop to compare them.  The loop finishes when one player has all the cards.

### Two player back-end version: multiple-categories.js

This two player runs on the console using node.js.  It has 5 categories for each card.  I used the prompt-sync npm module, which enables players to input a card category to be used for each round.  I created some helper functions (in helper.js) to add the winning card for each round to an array and print out the card(s) which won the most rounds at the end of the game.  

#### Testing
I created a test file to test the helper functions with Jest. 

### Two player web version using a separate .json file: DOM_version_with_json

This was my first front-end version. I originally had a large js array of objects in my main file, which took up over 300 lines of code!  I decided it would be neater to have it in a separate .json file, which I accessed using fetch() from the DOM api.  

### Two player web version using a javascript class for the cards data: DOM_version.js

In my final version I used a javascript class in my main file to create the 30 cards.  This was more efficient when I wanted to change the category names.  

#### Testing
I created a separate file and added copies of some of the functions used to manipulate the DOM.  I then created tests to test some of them using Jest. 