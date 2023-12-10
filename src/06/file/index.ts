import { readLinesFromTextFile } from '../../common/helpers';
import { Race } from '../race';

const getValues = (str: string): number[] =>
  str.split(':')[1].trim().split(/\s+/).map(Number);

const getValue = (str: string): number =>
  Number(str.split(':')[1].trim().split(/\s+/).join(''));

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

export const loadRace = (filePath: string): Race => {
  const lines = readLinesFromTextFile(filePath);

  const raceTime: number = getValue(lines[0]);
  const raceDistance: number = getValue(lines[1]);

  return new Race(raceTime, raceDistance);
};
