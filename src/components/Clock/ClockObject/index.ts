export class ClockObject {
  private timeMin: number;
  private timeSecLeft: number;
  label: string;
  onLabelChange?: (label: string) => void;
  onExpiry?: () => void;
  private timer?: NodeJS.Timer;

  constructor(timeMin: number) {
    this.timeMin = timeMin;
    this.timeSecLeft = timeMin * 60;
    this.label = format(this.timeSecLeft);
  }

  secondPassed() {
    this.timeSecLeft = this.timeSecLeft - 1;
    this.label = format(this.timeSecLeft);

    this.onLabelChange && this.onLabelChange(format(this.timeSecLeft));

    if (this.timeSecLeft === 0) {
      this.pause();
      this.onExpiry && this.onExpiry();
    }
  }

  start() {
    if (this.timer) {
      return;
    }
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
}

const format = (timeSec: number) => {
  const minutes = Math.floor(timeSec / 60);
  const seconds = timeSec % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
