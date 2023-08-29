import { getAllPlayers } from './service';

export const getBestPlayer = () => {
  const players = getAllPlayers();
  let bestPlayer;
  if (players.length > 0) {
    players.forEach((player) => {
      if (!bestPlayer || player.score > bestPlayer.score) {
        bestPlayer = player;
      }
    });
  }
  return bestPlayer;
};
