// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class level1 extends Phaser.Scene {
  constructor() {
    super("level1");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // sky
    const sky = this.add.tileSprite(791, 479, 4093, 2389, "jungle-sky");
    sky.scaleX = 0.4;
    sky.scaleY = 0.4;

    // playerRocket
    const playerRocket = this.add.sprite(156, 450, "Rockets-WhiteRed - 5");
    playerRocket.scaleX = 0.1;
    playerRocket.scaleY = 0.1;
    playerRocket.angle = 90;

    // rockets_Blue___29
    const rockets_Blue___29 = this.add.image(1360, 178, "Rockets-Blue - 29");
    rockets_Blue___29.scaleX = 0.05;
    rockets_Blue___29.scaleY = 0.05;
    rockets_Blue___29.flipX = true;

    this.sky = sky;
    this.playerRocket = playerRocket;

    this.events.emit("scene-awake");
  }

  private sky!: Phaser.GameObjects.TileSprite;
  private playerRocket!: Phaser.GameObjects.Sprite;

  /* START-USER-CODE */
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | null = null;

  // Write your code here

  create() {
    this.editorCreate();
    this.physics.add.existing(this.playerRocket);
    if (!(this.playerRocket.body instanceof Phaser.Physics.Arcade.Body)) {
      throw new Error("Incorrect Sprite Type");
    }
    this.playerRocket.body.setAllowGravity(false);
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update(time: number, delta: number): void {
    if (this.cursors?.up.isDown) {
      this.playerRocket.body.velocity.y = -400;
    } else if (this.cursors?.down.isDown) {
      this.playerRocket.body.velocity.y = 400;
    } else {
      this.playerRocket.body.velocity.y = 0;
    }
    if (this.cursors?.left.isDown) {
      this.playerRocket.body.velocity.x = -400;
    } else if (this.cursors?.right.isDown) {
      this.playerRocket.body.velocity.x = 400;
    } else {
      this.playerRocket.body.velocity.x = 0;
    }
    this.cameras.main.scrollX++;
    this.playerRocket.setScrollFactor(0);
    this.sky.setScrollFactor(0);
    this.sky.tilePositionX++;
    if (this.cursors) {
      if (Phaser.Input.Keyboard.JustDown(this.cursors?.space)) {
        let shot = this.physics.add.sprite(
          this.playerRocket.x + this.playerRocket.width / 2,
          this.playerRocket.y,
          "baseShot"
        );
        shot.body.setVelocityX(400).setAllowGravity(false);
      }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
