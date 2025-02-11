//Rocket prefab
class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame)
  
      // add object to existing scene
      scene.add.existing(this)
      this.moveSpeed = 2
    }

    update() {
        
        if (keyLEFT.isDown && this.x >= borderUISize + this.width) { 
            this.x -= this.moveSpeed;  // 左移
        } 
        if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;  // 右移
        } 
        if (keyUP.isDown && this.y >= borderUISize + this.height) {
            this.y -= this.moveSpeed;  // 上移
        } 
        if (keyDOWN.isDown && this.y <= game.config.height - borderUISize - this.height) {
            this.y += this.moveSpeed;  // 下移
        }
        
      }
    }
