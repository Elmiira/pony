import config from 'config';
import request from 'utils/request';

/**
 * Create the maze with dimensions 15 to 25
 */
export function createMaze(playerName: string): any {
  return request({
    method: 'POST',
    url: config.api.pony.createMaze,
    params: {},
    data: {
      'maze-width': 15,
      'maze-height': 25,
      'maze-player-name': 'Pinkie Pie',
    },
  });
}
