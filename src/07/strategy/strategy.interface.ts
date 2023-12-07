export interface Strategy {
  solve(hand: Hand): number;
}