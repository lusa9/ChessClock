interface Props {
  timeMin: number;
  incrementSec?: number;
}

export default ({ timeMin, incrementSec }: Props) => (
  <div>
    <h2>
      {timeMin}
      {incrementSec ? <span> | {incrementSec}</span> : null}
    </h2>
  </div>
);
