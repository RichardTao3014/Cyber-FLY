// Spaceship prefab
class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)   // add to existing scene
        this.points = pointValue   // store pointValue
        this.moveSpeed = 3
       // this.moveSpeed = game.settings.spaceshipSpeed         // pixels per frame
    }

    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.reset(); // 重新随机位置
        }
    }

    reset() {
        this.x = game.config.width;
        this.y = Phaser.Math.Between(
            borderUISize + this.height, 
            game.config.height - borderUISize - this.height
        );
    }
}
