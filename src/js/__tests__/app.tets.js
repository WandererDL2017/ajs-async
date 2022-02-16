/* eslint-disable */
import GameSavingLoader from '../app';

test('Получаем сохранение', () => {
  const saveGame = new GameSavingLoader();
  const expented = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  return expect(saveGame.load()).resolves.toBe(expented);
});