export class ClockObject {
  private timeMin: number;
  private incrementSec?: number;
  private timeSecLeft: number;
  label: string;
  onLabelChange?: (label: string) => void;
  onExpiryChange?: (expired: boolean) => void;
  private timer?: NodeJS.Timer;

  constructor(timeMin: number, incrementSec?: number) {
    this.timeMin = timeMin;
    this.incrementSec = incrementSec;
    this.timeSecLeft = timeMin * 60;
    this.label = format(this.timeSecLeft);
  }

  private setTimeSecLeft = (timeSecLeft: number) => {
    this.timeSecLeft = timeSecLeft;
    this.updateLabel();
  };

  private updateLabel() {
    this.label = format(this.timeSecLeft);
    this.onLabelChange && this.onLabelChange(this.label);
  }

  secondPassed() {
    this.setTimeSecLeft(this.timeSecLeft - 1);

    if (this.timeSecLeft === 0) {
      this.pause();
      this.onExpiryChange && this.onExpiryChange(true);
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

    if (this.incrementSec) {
      this.setTimeSecLeft(this.timeSecLeft + this.incrementSec);
    }
  }

  pause() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  }

  reset() {
    this.pause();
    this.setTimeSecLeft(this.timeMin * 60);
    this.onExpiryChange && this.onExpiryChange(false);
  }
}

const format = (timeSec: number) => {
  const minutes = Math.floor(timeSec / 60);
  const seconds = timeSec % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
