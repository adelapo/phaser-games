// Scene 1

class Scene1 extends Phaser.Scene {
    constructor() {
        super({key: "Example1"});
    }
    
    // Runs once; loads assets
    preload() {
        this.load.image("player", "assets/mario.png");
    }
    
    // Runs once; loads the game
    create() {
        this.image = this.add.image(400, 300, "player");
        
        this.upArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.leftArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightArrow = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    
    // Loops
    update(delta) {
        if (this.leftArrow.isDown) {
            this.image.x -= 5;
        }
        if (this.rightArrow.isDown) {
            this.image.x += 5;
        }
        if (this.upArrow.isDown) {
            this.image.y -= 5;
        }
        if (this.downArrow.isDown) {
            this.image.y += 5;
        }
    }
}