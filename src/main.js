// src/main.js
/**
 * 游戏名称: Cyber Jumper
 * 作者: Richard Tao
 * 预计开发时间: 25 小时
 * 创意倾向: 
 * - 技术上：实现了本地存储高分，利用 Phaser 的 `tween` 进行特殊动画
 * - 视觉上：添加了动态天气效果（如白天/夜晚切换）
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