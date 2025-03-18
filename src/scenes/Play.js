class Play extends Phaser.Scene {
    constructor() {
      super("playScene")
    }
    
    create() {
      this.heart = this.sound.add('heart')
      this.explosion = this.sound.add('explosion')
      this.BGM = this.sound.add('BGM', { loop: true }); 

      this.BGM.play()
        // place tile sprite
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0)
        this.add.text(20, 20, "Cyber FLY Play")

    // green UI background
    this.add.rectangle(0, borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x000000).setOrigin(0, 0)
    // white borders
    this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
    this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0, 0)
    this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0);
    this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0, 0)

     // 随机生成炸弹（Enemy）
     this.ship01 = new Enemy(
      this,
      Phaser.Math.Between(game.config.width / 2, game.config.width), // 随机 X 坐标（右半部分）
      Phaser.Math.Between(borderUISize, game.config.height - borderUISize), // 随机 Y 坐标
      'Enemy',
      0,
      5
  ).setOrigin(0, 0);

  this.ship02 = new Enemy(
      this,
      Phaser.Math.Between(game.config.width / 2, game.config.width), 
      Phaser.Math.Between(borderUISize, game.config.height - borderUISize), 
      'Enemy',
      0,
      5
  ).setOrigin(0, 0);

  this.ship03 = new Enemy(
      this,
      Phaser.Math.Between(game.config.width / 2, game.config.width), 
      Phaser.Math.Between(borderUISize, game.config.height - borderUISize), 
      'Enemy',
      0,
      5
  ).setOrigin(0, 0);

  // 随机生成心（Heart)
  this.ship04 = new Enemy(
      this,
      Phaser.Math.Between(game.config.width / 2, game.config.width), 
      Phaser.Math.Between(borderUISize, game.config.height - borderUISize), 
      'Heart',
      0,
      5
  ).setOrigin(0, 0);


        this.p1Rocket = new Player(
          this, 
          borderUISize + borderPadding,  // 玩家在左侧
          game.config.height / 2,  // 让玩家垂直居中
          'Player'
      ).setOrigin(0, 0.5);  // 左上角对齐，保证正确位置

      // define keys
      keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
      keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R)
      keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
      // initialize score
      this.p1Score = 0
      // display score
      let scoreConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'right',
        padding: {
          top: 5,
          bottom: 5,
        },
        fixedWidth: 0
      }
      this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig)

      // GAME OVER flag
        this.gameOver = false;

        // 监听玩家分数，每帧检查是否小于 0
        this.checkGameOver = this.time.addEvent({
            delay: 100,  // 每 100 毫秒检查一次
            loop: true,
            callback: () => {
                if (this.p1Score < 0) {  // 如果分数小于 0，游戏结束
                    this.add.text(game.config.width / 2, game.config.height / 2, 'GAME OVER', scoreConfig).setOrigin(0.5);
                    this.add.text(game.config.width / 2, game.config.height / 2 + 64, 'Press (R) to Restart', scoreConfig).setOrigin(0.5);
                    this.gameOver = true;
                    this.BGM.stop()
                    this.checkGameOver.remove();  // 停止这个事件，避免无限检查
                }
            }
        });

    }

    update() {
        this.starfield.tilePositionX -= 4
        if(!this.gameOver) {               
          this.p1Rocket.update()         // update rocket sprite
          this.ship01.update()           // update spaceships (x3)
          this.ship02.update()
          this.ship03.update()
          this.ship04.update()
      } 

       // check key input for restart
      if(this.gameOver && Phaser.Input.Keyboard.JustDown(keyR)) {
        this.scene.restart()
       }

        // check collisions
        if(this.checkCollision(this.p1Rocket, this.ship03)) {
          this.ship03.reset()
          this.explosion.play()
          // score add and text update
          this.p1Score -= 5
          this.scoreLeft.text = this.p1Score 
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)) {
          this.ship02.reset()
          this.explosion.play()
          // score add and text update
          this.p1Score -= 5
          this.scoreLeft.text = this.p1Score 
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)) {
          this.ship01.reset()
          this.explosion.play()
          // score add and text update
          this.p1Score -= 5
          this.scoreLeft.text = this.p1Score 
        }
        if (this.checkCollision(this.p1Rocket, this.ship04)) {
          this.ship04.reset()
          this.heart.play()
          // score add and text update
          this.p1Score += 10
          this.scoreLeft.text = this.p1Score 
        }

      }

      checkCollision(rocket, ship) {
        // simple AABB checking
        if (rocket.x < ship.x + ship.width && 
          rocket.x + rocket.width > ship.x && 
          rocket.y < ship.y + ship.height &&
          rocket.height + rocket.y > ship. y) {
          return true
        } else {
          return false
        }
      }

      
      
  }

