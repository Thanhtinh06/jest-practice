import { getAllPlayers } from './service';

export const getBestPlayer = () => {
  return getAllPlayers().then(players => {
    let bestPlayer;
    players.forEach(player => {
      if (!bestPlayer || player.score > bestPlayer.score) {
        bestPlayer = player;
      }
    });
  });
};
