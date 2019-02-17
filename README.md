# Classic Arcade Game Clone Project
Project developed using javascript ES5 version for the Advanced Web Front-End course from Udacity.

## Table of Contents

- [Instructions](#instructions)
- [Features Developed](#features-developed)
- [Authors](#authors)

## Instructions

### Run
Download zip file or clone the repository and run the index.html file on the browser.
Or click [here](https://rodolfomoraes1.github.io/frontend-nanodegree-arcade-game/).

### Play
Use the arrows from the keyboard to movement the player.
When the player hits an enemy the player dies and the score goes down by one (if your score is 0, it remais as zero).
When the player crosses the water the score goes up by one. There is no limit.
Everytime the user hits an enemy or crosses the water a snackbar appears with the result of the action and the player goes back to the initial position.

## Features Developed
Udacity provided a basic engine and most of the work was to create a clean code and OO solution.
The majority of the work were on the models and the app.js files. Almost everything on these files were built from scratch.

Most of the activities were:
- Implemented an OO solution developing the classes 'Character', 'Player' and 'Enemy' using prototype inheritance.
- Loaded images for characters
- Implemented initial position for player and enemies
- Implemented velocity
- Implemented colision detection with player and edges of the canvas
- Implemented movement for the player
- Implemented score
- Implemented snackbar to present winning or defeated situations
- Implemented algorithm to handle inputs
- Implemented winning and defeat algorithms
- Implemented validations to avoid less than 0 score, player and enemy avoid leaving canvas area and much more.
- Used Clean Code concepts
- Implemented constants file to separate magical numbers and strings from other codes

## Authors
This project was started by Udacity team and all later solutions developed by Rodolfo Moraes Martins.