// src/main.js
/**
 * Game Name: Cyber Jumper
 * Auther: Richard Tao
 * Development time: 25 H
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
