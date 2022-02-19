/* eslint-disable */
import GameSavingLoader from '../app';
import GameSaving from '../gameSaving';

test('Получаем сохранение', async () => {
  const gameSaving = new GameSaving({id:9,created:1546300800,userInfo:{id:1,name:"Hitman",level:10,points:2000}});
  await expect(GameSavingLoader.load()).resolves.toEqual(gameSaving);
});