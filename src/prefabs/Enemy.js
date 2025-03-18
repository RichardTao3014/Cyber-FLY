// Spaceship prefab
class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)   // add to existing scene
        this.points = pointValue   // store pointValue
        this.moveSpeed = 3
       // this.moveSpeed = game.settings.spaceshipSpeed         // pixels per frame
    }

    // update() {
    //     this.x -= this.moveSpeed;
    //     if(this.x <= 0 - this.width) {
    //         this.x = game.config.width
    //     }
    // }

    // // position reset
    // reset() {
    //     // this.x = game.config.width
    //     // 让 X 和 Y 坐标随机化
    // this.x = Phaser.Math.Between(game.config.width / 2, game.config.width);  // 右侧随机 X 坐标
    // this.y = Phaser.Math.Between(borderUISize, game.config.height - borderUISize);  // 随机 Y 坐标
    // }

    update() {
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width) {
            this.reset(); // 重新随机位置
        }
    }

    // position reset
    // reset() {
    //     // 让 X 和 Y 坐标随机化，使其与玩家范围一致
    //     this.x = Phaser.Math.Between(borderUISize + this.width, game.config.width - borderUISize - this.width);
    //     this.y = Phaser.Math.Between(borderUISize + this.height, game.config.height - borderUISize - this.height);
    // }

    reset() {
        // ✅ X 轴固定在屏幕最右侧
        this.x = game.config.width;
    
        // ✅ Y 轴在玩家可移动范围内随机
        this.y = Phaser.Math.Between(
            borderUISize + this.height, 
            game.config.height - borderUISize - this.height
        );
    }
}