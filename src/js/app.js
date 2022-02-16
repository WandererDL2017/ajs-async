import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  load() {
    this.getData = new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = read();
        if (!data) {
          reject(new Error('Ошибка сохранения'));
        }
        resolve(data);
      }, 0);
    });
    return this.getData.then((data) => {
      const value = json(data);
      return value;
    });
  }
}

const saveGame = new GameSavingLoader();
saveGame.load().then((value) => value, (error) => error);
