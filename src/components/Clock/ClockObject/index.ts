export class ClockObject {
  timeMin: number;
  timeSecLeft: number;
  onClockLabelChange?: (label: string) => void;
  timer?: NodeJS.Timer;

  constructor(timeMin: number) {
    this.timeMin = timeMin;
    this.timeSecLeft = timeMin * 60;
  }

  secondPassed() {
    this.timeSecLeft = this.timeSecLeft - 1;

    this.onClockLabelChange &&
      this.onClockLabelChange(String(this.timeSecLeft));

    if (this.timeSecLeft === 0) {
      this.pause();
    }
  }

  start() {
    this.timer = setInterval(this.secondPassed.bind(this), 1000);
  }

  pause() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  reset() {
    this.pause();
    this.timeSecLeft = this.timeMin * 60;
  }

  onTimeChange() {}
}
