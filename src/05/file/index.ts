import {
  readByDelimeterFromTextFile,
  readLinesFromTextFile,
} from '../../helpers';
import Maps, { SeedMapKey } from '../seeds/maps/seed-map-key.enum';
import { SeedMap, SeedMapRange } from '../seeds/maps/seed-maps';

export type AlmanacSeedMap = {
  [key in SeedMapKey]?: SeedMap;
}
export interface AlmanacMap {
  seeds: number[];
  seedMaps: AlmanacSeedMap;
}

export const loadParts = (filePath: string): AlmanacMap => {
  const blocks: string[] = readByDelimeterFromTextFile(filePath, '\n\n');

  const result: AlmanacMap = { seeds: [], seedMaps: {} };

  for (const block of blocks) {
    const lines = block.split('\n');
    const header = lines[0];
    const headerType = header.split('map:');
    if (headerType.length === 1) {
      result.seeds = header.split('seeds:')[1].trim().split(' ').map(Number);
    } else {
      const mapkey: SeedMapKey = headerType[0].trim() as SeedMapKey;
      const seedMapRanges = [];
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(' ').map(Number);
        const seedMapRange = new SeedMapRange(values[0], values[1], values[2]);
        seedMapRanges.push(seedMapRange);
      }
      result.seedMaps[mapkey] = new SeedMap(seedMapRanges);
    }
  }
  return result;
};
