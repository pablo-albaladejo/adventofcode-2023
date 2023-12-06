export class RaceStrategy {
  charging: number;
  racing: number;

  constructor(charging: number, racing: number) {
    this.charging = charging;
    this.racing = racing;
  }

  getDistance(): number {
    return this.charging * this.racing;
  }
}
export class Race {
  time: number;
  distance: number;
  strategies: RaceStrategy[] = [];

  constructor(time: number, distance: number) {
    this.time = time;
    this.distance = distance;
    this.setStrategies();
  }

  private setStrategies() {
    for(let i = 0; i <= this.time; i++) {
      this.strategies.push(new RaceStrategy(i,this.time-i));
    }
  }

  getStrategies(): RaceStrategy[] {
    return this.strategies;
  }
}
