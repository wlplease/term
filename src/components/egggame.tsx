import React, { useEffect } from "react";
import Phaser from "phaser";

const EggGame: React.FC = () => {
  useEffect(() => {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "game-container",
      backgroundColor: "#1e252e",
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    let player: Phaser.Physics.Arcade.Sprite;
    let coins: Phaser.Physics.Arcade.Group;
    let obstacles: Phaser.Physics.Arcade.Group;
    let score = 0;
    let scoreText: Phaser.GameObjects.Text;

    function preload(this: Phaser.Scene) {
      this.load.image("player", "https://via.placeholder.com/40x40?text=🏃‍♂️");
      this.load.image("coin", "https://via.placeholder.com/30x30?text=🪙");
      this.load.image("obstacle", "https://via.placeholder.com/30x30?text=⚠️");
    }

    function create(this: Phaser.Scene) {
      player = this.physics.add.sprite(400, 300, "player");
      player.setCollideWorldBounds(true);

      coins = this.physics.add.group({
        key: "coin",
        repeat: 10,
        setXY: { x: 100, y: 100, stepX: 60, stepY: 50 },
      });

      obstacles = this.physics.add.group();

      scoreText = this.add.text(16, 16, "Score: 0", {
        fontSize: "20px",
        color: "#fff",
      });

      this.physics.add.overlap(player, coins, collectCoin as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback, undefined, this);
      this.physics.add.collider(player, obstacles, hitObstacle, undefined, this);

      this.time.addEvent({
        delay: 2000,
        callback: spawnObstacle,
        callbackScope: this,
        loop: true,
      });

      this.input.keyboard.on("keydown", handleMovement);

      this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
        player.setPosition(pointer.x, pointer.y);
      });
    }

    function update() {}

    function handleMovement(event: KeyboardEvent) {
      switch (event.key) {
        case "ArrowUp":
          player.setVelocityY(-150);
          break;
        case "ArrowDown":
          player.setVelocityY(150);
          break;
        case "ArrowLeft":
          player.setVelocityX(-150);
          break;
        case "ArrowRight":
          player.setVelocityX(150);
          break;
        default:
          player.setVelocity(0, 0);
      }
    }

    function collectCoin(
      player: Phaser.GameObjects.GameObject,
      coin: Phaser.GameObjects.GameObject
    ) {
      const coinSprite = coin as Phaser.Physics.Arcade.Sprite;
      coinSprite.disableBody(true, true);
      score += 10;
      scoreText.setText(`Score: ${score}`);
    }

    function hitObstacle() {
      scoreText.setText("Game Over!");
      this.physics.pause();
    }

    function spawnObstacle(this: Phaser.Scene) {
      const x = Phaser.Math.Between(50, 750);
      const y = Phaser.Math.Between(50, 550);
      const obstacle = obstacles.create(x, y, "obstacle");
      obstacle.setVelocity(Phaser.Math.Between(-100, 100), Phaser.Math.Between(-100, 100));
      obstacle.setCollideWorldBounds(true);
      obstacle.setBounce(1);
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-white mb-4">
        An Ode to Jesse Pollak: Base Coin Collector
      </h1>
      <p className="text-lg text-gray-400 mb-6 text-center px-4">
        Collect as many Base coins as you can while dodging obstacles. Can you set a high score? Move with arrow keys or touch the screen to guide your player.
      </p>
      <div id="game-container" className="bg-black w-full max-w-3xl h-[600px] rounded shadow-lg"></div>
    </div>
  );
};

export default EggGame;