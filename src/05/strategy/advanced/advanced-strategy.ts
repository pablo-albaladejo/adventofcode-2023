import { AlmanacMap } from '../../file';
import { seedLocation } from '../../seeds/location/seed-location';
import { Strategy } from '../strategy.interface';
export class AdvancedStrategy implements Strategy {
  getRange(from: number, delta: number): number[] {
    return [...Array(delta)].map((_, i) => from + i);
  }
  solve(almanacMap: AlmanacMap): number {
    let result = Number.POSITIVE_INFINITY;
    for (let i = 0; i < almanacMap.seeds.length; i += 2) {
      for (
        let j = almanacMap.seeds[i];
        j < almanacMap.seeds[i] + almanacMap.seeds[i + 1];
        j++
      ) {
        result = Math.min(seedLocation(j, almanacMap.seedMaps), result);
      }
    }
    return result;
  }
}
