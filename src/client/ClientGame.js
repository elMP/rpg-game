import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId), this);
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  getWorld() {
    return this.map;
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.map.init();
      this.engine.on('render', (_, time) => {
        this.engine.camera.focusAtGameObject(this.player);
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        if (keydown) {
          this.playerMoves('left');
        }
      },
      ArrowRight: (keydown) => {
        if (keydown) {
          this.playerMoves('right');
        }
      },
      ArrowUp: (keydown) => {
        if (keydown) {
          this.playerMoves('up');
        }
      },
      ArrowDown: (keydown) => {
        if (keydown) {
          this.playerMoves('down');
        }
      },
    });
  }

  playerMoves(direction) {
    const { player } = this;

    if (player && player.motionProgress === 1) {
      let x;
      let y;

      if (direction === 'left') {
        x = -1;
        y = 0;
      }
      if (direction === 'right') {
        x = 1;
        y = 0;
      }
      if (direction === 'up') {
        x = 0;
        y = -1;
      }
      if (direction === 'down') {
        x = 0;
        y = 1;
      }

      const canMove = this.playerMakeStep(x, y);
      if (canMove) {
        player.setState(direction);
        player.once('motion-stopped', () => player.setState('main'));
      }
    }
  }

  playerMakeStep(x, y) {
    this.player.moveByCellCoord(x, y, (cell) => {
      console.log(cell.x, cell.y);
      console.log(this.map.height, this.map.width);
      return cell.findObjectsByType('grass').length;
    });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      console.log('Game INIT');
    }
  }
}

export default ClientGame;
