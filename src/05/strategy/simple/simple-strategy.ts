import { AlmanacMap, AlmanacSeedMap } from '../../file';
import SeedMapKey from '../../seeds/seed-map-key.enum';
import { Strategy } from '../strategy.interface';
export class SimpleStrategy implements Strategy {
  seedLocation = (seed: number, seedMaps: AlmanacSeedMap): number => {
    const soil = seedMaps[SeedMapKey.SEED_TO_SOIL]?.map(seed) || seed;

    const fertilizer =
      seedMaps[SeedMapKey.SOIL_TO_FERTILIZER]?.map(soil) || soil;

    const water =
      seedMaps[SeedMapKey.FERTILIZER_TO_WATER]?.map(fertilizer) || fertilizer;

    const light = seedMaps[SeedMapKey.WATER_TO_LIGHT]?.map(water) || water;

    const temperature =
      seedMaps[SeedMapKey.LIGHT_TO_TEMPERATURE]?.map(light) || light;

    const humidity =
      seedMaps[SeedMapKey.TEMPERATURE_TO_HUMIDITY]?.map(temperature) ||
      temperature;

    return seedMaps[SeedMapKey.HUMIDITY_TO_LOCATION]?.map(humidity) || humidity;
  };

  solve(almanacMap: AlmanacMap): number {
    return almanacMap.seeds.reduce(
      (acc, seed) =>
        Math.min(this.seedLocation(seed, almanacMap.seedMaps), acc),
      Number.POSITIVE_INFINITY
    );
  }
}
