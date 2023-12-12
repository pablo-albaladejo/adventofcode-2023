import { Cosmos } from '../../cosmos';
import { Strategy } from '../strategy.interface';

export class SimpleStrategy implements Strategy {
  solve(cosmos: Cosmos): number {
    let acc = 0;
    console.log('Solve init');
    const pairs = cosmos.getGalaxyPairs();
    console.log(`${pairs.length} found`);
    cosmos.expand();
    console.log('Expanded');

    //for (const pair of pairs) {
    for (const [index, pair] of pairs.entries()) {
      console.log('index', index);
      const distance = cosmos.shortestPath(pair[0], pair[1]);
      if (distance) acc += distance;
      console.log('distance', distance);
      console.log('acc', acc);
    }

    return acc;
  }
}
