import { ClockObject } from ".";

const timeMin = 10;

const onPauseButtonClick = jest.fn();
const onResetButtonClick = jest.fn();

interface SetupProps {
  timeMin?: number;
  incrementSec?: number;
}

const setup = (props?: SetupProps) =>
  new ClockObject(props?.timeMin || timeMin, props?.incrementSec);

it("creates successfully", () => {
  setup();
});

it("formats label correct", () => {
  const clock = setup();

  expect(clock.label).toBe("10:00");
});

it("starts", async () => {
  const clock = setup();
  clock.start();

  await new Promise((r) => setTimeout(r, 1000));

  expect(clock.label).toBe("9:59");
});

it("pauses", async () => {
  const clock = setup();
  clock.start();

  setTimeout(() => {
    clock.pause();
  }, 1000);

  await new Promise((r) => setTimeout(r, 2000));

  expect(clock.label).toBe("9:59");
});

it("resets", async () => {
  const clock = setup();
  clock.start();

  await new Promise((r) => setTimeout(r, 1000));

  clock.reset();

  expect(clock.label).toBe("10:00");
});

it("increments", async () => {
  const clock = setup({ incrementSec: 2 });
  clock.start();
  clock.press();

  expect(clock.label).toBe("10:02");
});

it("calls handler on label update", async () => {
  const clock = setup();
  clock.onLabelChange = jest.fn();
  clock.start();

  await new Promise((r) => setTimeout(r, 1000));

  expect(clock.onLabelChange).toBeCalledTimes(1);
});

it("calls handler on expiry", async () => {
  const clock = setup({ timeMin: 0.05 });
  clock.onExpiry = jest.fn();
  clock.start();

  await new Promise((r) => setTimeout(r, 3100));

  expect(clock.onExpiry).toBeCalledTimes(1);
});
