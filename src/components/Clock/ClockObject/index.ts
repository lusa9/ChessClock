export class ClockObject {
  private timeMin: number;
  private incrementSec?: number;
  private timeSecLeft: number;
  label: string;
  onLabelChange?: (label: string) => void;
  onExpiry?: () => void;
  private timer?: NodeJS.Timer;
  private moveNumber = 0;

  constructor(timeMin: number, incrementSec?: number) {
    this.timeMin = timeMin;
    this.incrementSec = incrementSec;
    this.timeSecLeft = timeMin * 60;
    this.label = format(this.timeSecLeft);
  }

  secondPassed() {
    this.timeSecLeft -= 1;
    this.updateLabel();

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

  press() {
    this.pause();

    if (this.incrementSec && this.moveNumber) {
      this.timeSecLeft += this.incrementSec;
      this.updateLabel();
    }

    this.incrementMoveNumber();
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

  private updateLabel() {
    this.label = format(this.timeSecLeft);
    this.onLabelChange && this.onLabelChange(this.label);
  }

  private incrementMoveNumber() {
    this.moveNumber += 1;
  }
}

const format = (timeSec: number) => {
  const minutes = Math.floor(timeSec / 60);
  const seconds = timeSec % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
