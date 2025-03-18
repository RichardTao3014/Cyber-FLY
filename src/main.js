// src/main.js
/**
 * Game Name: Cyber Fly
 * Auther: Richard Tao
 * Development time: 25 H
 * Players play the game by avoiding bombs and eating hearts. 
 * If they eat a heart, they will get 10 points. If they eat a bomb, they will lose 5 points. 
 * When the player's score is less than 0, the game ends.
 */
// console.log("hello world")

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu,Play]
}

  let game = new Phaser.Game(config)

  // set UI sizes
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
// reserve keyboard bindings
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyR, keyD