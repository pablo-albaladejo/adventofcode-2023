import { readLinesFromTextFile } from '../../helpers';
import { Race } from '../race';

const getValues = (str: string): number[] =>
  str.split(':')[1].trim().split(/\s+/).map(Number);

export const loadRaces = (filePath: string): Race[] => {
  const races: Race[] = [];
  const lines = readLinesFromTextFile(filePath);

  const raceTimes: number[] = getValues(lines[0]);
  const raceDistances: number[] = getValues(lines[1]);

  raceTimes.forEach((time, index) => {
    races.push(new Race(time, raceDistances[index]));
  });

  return races;
};
