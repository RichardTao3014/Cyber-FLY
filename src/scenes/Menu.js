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
        

      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'CYBER FLY', menuConfig).setOrigin(0.5)
      this.add.text(game.config.width/2, game.config.height/2, 'Use all arrows to move', menuConfig).setOrigin(0.5)
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
