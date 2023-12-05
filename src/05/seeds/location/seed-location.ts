import { AlmanacSeedMap } from '../../file';
import SeedMapKey from '../maps/seed-map-key.enum';

export const seedLocation = (
  seed: number,
  seedMaps: AlmanacSeedMap
): number => {
  const soil = seedMaps[SeedMapKey.SEED_TO_SOIL]?.map(seed) || seed;

  const fertilizer = seedMaps[SeedMapKey.SOIL_TO_FERTILIZER]?.map(soil) || soil;

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
