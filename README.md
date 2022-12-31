# Jokenpô of Cards

Um jogo de cartas completamente adaptável!

## Requirements

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

## Available Commands

| Command       | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `npm install` | Install project dependencies                                 |
| `tsc -watch`  | Compiles any change within the src folder to the dist folder |

## Writing Code

After cloning the repository using the 'git clone' command, run 'npm install' from the project directory. Then, you can start the compilation using the `tsc -watch` command.

## Customization of the Cards

In the `/dist/images` folder are the images of the cards:

![Example of images folder](/public/example-images-folder.JPG "Example of images folder")

![Example of card images](/public/example-card-images.JPG "Example of card images")

NOTE: The image that is the back of the card must have the name `back`\_design-default

## Customization of the Game

In the `/src/index.ts` file you can configure the game creation logic:

![Example of game creation logic](/public/example-game-creation-logic.JPG "Example of game creation logic")

In the `/src/utils/ComparisonList.ts` file you can configure the game validation logic:
