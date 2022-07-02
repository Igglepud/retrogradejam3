import Phaser from "phaser";
import Level from "./scenes/Level";
import level1 from "./scenes/level1";

import preloadAssetPackUrl from "../static/assets/preload-asset-pack.json";
import Preload from "./scenes/Preload";

class Boot extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.pack("pack", preloadAssetPackUrl);
  }

  create() {
    this.scene.start("Preload");
  }
}

window.addEventListener("load", function () {
  const game = new Phaser.Game({
    width: 1600,
    height: 900,
    backgroundColor: "#2f2f2f",
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 1000 },
        //debug: true,
      },
    },
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH,
    },
    scene: [Boot, Preload, Level, level1],
  });

  game.scene.start("Boot");
});
