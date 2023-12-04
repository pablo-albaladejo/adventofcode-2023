import { Game, GameSet } from '../game';
import { getColorCount, getSet, getSets, lineToGame } from './file';

describe('getColorCount', () => {
  it('should return the correct number of colors for red', () => {
    expect(getColorCount('5 red, 20 blue, 3 green;', 'red')).toBe(5);
    expect(getColorCount('20 blue, 3 green;', 'red')).toBe(0);
    expect(getColorCount(' 20 blue, 5 red, 3 green;', 'red')).toBe(5);
  });

  it('should return the correct number of colors for blue', () => {
    expect(getColorCount('5 red, 20 blue, 3 green;', 'blue')).toBe(20);
    expect(getColorCount('20 red, 3 green;', 'blue')).toBe(0);
    expect(getColorCount(' 20 blue, 5 red, 3 green;', 'blue')).toBe(20);
  });

  it('should return the correct number of colors for green', () => {
    expect(getColorCount('5 red, 20 blue, 3 green;', 'green')).toBe(3);
    expect(getColorCount('20 red, 3 blue;', 'green')).toBe(0);
    expect(getColorCount(' 20 green, 5 red, 3 blue;', 'green')).toBe(20);
  });
});

describe('getSet', () => {
  it('should return the correct set', () => {
    expect(getSet('5 red, 20 blue, 3 green;')).toEqual(new GameSet(5, 3, 20));
    expect(getSet('5 red, 3 green, 20 blue;')).toEqual(new GameSet(5, 3, 20));
    expect(getSet('5 red, 20 blue;')).toEqual(new GameSet(5, 0, 20));
  });
});

describe('getSets', () => {
  it('should return the correct sets', () => {
    expect(getSets('5 red, 20 blue, 3 green')).toEqual([
      new GameSet(5, 3, 20),
    ]);
    expect(getSets('5 red, 3 green, 20 blue')).toEqual([
      new GameSet(5, 3, 20),
    ]);
    expect(getSets('5 red, 20 blue')).toEqual([new GameSet(5, 0, 20)]);
    expect(getSets('5 red, 20 blue, 3 green; 5 green')).toEqual([
      new GameSet(5, 3, 20),
      new GameSet(0, 5, 0),
    ]);
    expect(getSets('5 red, 20 blue, 3 green; 5 red, 3 green')).toEqual([
      new GameSet(5, 3, 20),
      new GameSet(5, 3, 0),
    ]);
  });
});


describe('lineToGame', () => {
  it('should return the correct game', () => {
    expect(lineToGame('Game 1: 5 red, 20 blue, 3 green')).toEqual(
      new Game([new GameSet(5, 3, 20)])
    );
    expect(lineToGame('Game 1: 5 red, 3 green, 20 blue')).toEqual(
      new Game([new GameSet(5, 3, 20)])
    );
    expect(lineToGame('Game 1: 5 red, 20 blue')).toEqual(
      new Game([new GameSet(5, 0, 20)])
    );
    expect(lineToGame('Game 1: 5 red, 20 blue, 3 green; 5 green')).toEqual(
      new Game([new GameSet(5, 3, 20), new GameSet(0, 5, 0)])
    );
    expect(lineToGame('Game 1: 5 red, 20 blue, 3 green; 5 red, 3 green')).toEqual(
      new Game([new GameSet(5, 3, 20), new GameSet(5, 3, 0)])
    );
  });
})