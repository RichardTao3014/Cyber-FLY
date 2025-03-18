class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene")
    }
    

    preload() {
        // load images/tile sprites
        this.load.image('Player', './assets/cyber_superhero.png')
        this.load.image('Enemy', './assets/cyber_bomb.png')
        this.load.image('starfield', './assets/starfield.png')
        this.load.image('Heart', './assets/cyber_heart.png')

        this.load.audio('explosion','./assets/explosion.mp3')
        this.load.audio('heart','./assets/Heart.wav')
        this.load.audio('BGM','./assets/BGM.mp3')
        

        
    
    }
    create() {
      let menuConfig = {
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
        

      this.add.text(game.config.width/2, game.config.height/5 - borderUISize - borderPadding, 'CYBER FLY', menuConfig).setOrigin(0.5)
      this.add.text(game.config.width/2, game.config.height/4, 'Use all arrows to move', menuConfig).setOrigin(0.5)
      this.add.text(game.config.width/2, game.config.height/3, 'Heart: +10 points, Bomb: -5 points', menuConfig).setOrigin(0.5)
      this.add.text(game.config.width/2, game.config.height/2, 'when score is less than 0, game over', menuConfig).setOrigin(0.5)
      menuConfig.backgroundColor = '#00FF00'
      menuConfig.color = '#000'
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press D to start the game', menuConfig).setOrigin(0.5)
      // define keys
      keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)
    }

    update () {
      if (Phaser.Input.Keyboard.JustDown(keyD)) {
        this.scene.start('playScene')
      }
      
    }
  }
