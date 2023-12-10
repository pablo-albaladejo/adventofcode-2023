import { readLinesFromTextFile } from '../../common/helpers';
import { Card, Hand } from '../hand';

export const convertStringToCardArray = (input: string): Card[] => {
  const cardArray: Card[] = [];

  for (const char of input) {
    const cardValue = parseInt(char, 10);

    if (!isNaN(cardValue) && cardValue >= 2 && cardValue <= 14) {
      cardArray.push(cardValue as Card);
    } else {
      switch (char.toUpperCase()) {
        case 'T':
          cardArray.push(Card.Ten);
          break;
        case 'J':
          cardArray.push(Card.Jack);
          break;
        case 'Q':
          cardArray.push(Card.Queen);
          break;
        case 'K':
          cardArray.push(Card.King);
          break;
        case 'A':
          cardArray.push(Card.Ace);
          break;
      }
    }
  }
  return cardArray;
};

export const lineToHand = (line: string): Hand => {
  const [cards, bid] = line.split(' ');

  const cardArray = convertStringToCardArray(cards);

  return new Hand(cardArray, Number(bid));
};

export const loadHands = (filePath: string): Hand[] => {
  const lines = readLinesFromTextFile(filePath);
  return lines.map((line) => lineToHand(line));
};
