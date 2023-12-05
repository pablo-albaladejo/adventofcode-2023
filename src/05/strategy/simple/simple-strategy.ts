import { AlmanacMap, AlmanacSeedMap } from '../../file';
import { seedLocation } from '../../seeds/location/seed-location';
import SeedMapKey from '../../seeds/maps/seed-map-key.enum';
import { Strategy } from '../strategy.interface';
export class SimpleStrategy implements Strategy {
  solve(almanacMap: AlmanacMap): number {
    return almanacMap.seeds.reduce(
      (acc, seed) =>
        Math.min(seedLocation(seed, almanacMap.seedMaps), acc),
      Number.POSITIVE_INFINITY
    );
  }
}
