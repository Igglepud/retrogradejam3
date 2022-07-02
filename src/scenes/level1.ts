
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

		// rockets_WhiteRed___5
		const rockets_WhiteRed___5 = this.add.image(156, 450, "Rockets-WhiteRed - 5");
		rockets_WhiteRed___5.scaleX = 0.1;
		rockets_WhiteRed___5.scaleY = 0.1;
		rockets_WhiteRed___5.angle = 90;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
