import { readLinesFromTextFile } from '../../common/helpers';
import { Game, GameSet } from '../game';

export const getColorCount = (str: string, color: string): number => {
  const regex = new RegExp(`(\\d+) ${color}`);
  const match = str.match(regex);
  return match ? parseInt(match[1], 10) : 0;
};

export const getSet = (str: string): GameSet => {
  const red = getColorCount(str, 'red');
  const green = getColorCount(str, 'green');
  const blue = getColorCount(str, 'blue');
  return new GameSet(red, green, blue);
};

export const getSets = (str: string): GameSet[] => {
  return str.split(';').map((str) => getSet(str));
};

export const lineToGame = (line: string): Game => {
  const gameSeparator = line.split(':');
  const sets = getSets(gameSeparator[1]);
  return new Game(sets);
};

export const loadGames = (filePath: string): Game[] => {
  const lines = readLinesFromTextFile(filePath);
  return lines.map((line) => lineToGame(line));
};
