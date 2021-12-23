import Clock from "components/Clock";
import Timers from "components/Timers";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Store from "Store";

export default () => (
  <Store>
    <Router>
      <Routes>
        <Route path="*" element={<Navigate replace to="/timers" />} />
        <Route path="/timers/*" element={<Timers />} />
        <Route path="/clock/:params" element={<ClockElement />} />
      </Routes>
    </Router>
  </Store>
);

const ClockElement = () => {
  const { params } = useParams();
  const searchParams = new URLSearchParams(params);
  const timeString = searchParams.get("time");
  if (!timeString) {
    return <Navigate replace to="/timers" />;
  }
  const timeMin = parseInt(timeString);

  if (isNaN(timeMin)) {
    return <Navigate replace to="/timers" />;
  }

  const incrementString = searchParams.get("increment");
  const incrementSec = incrementSecFrom(incrementString);

  return <Clock {...{ timeMin, incrementSec }} />;
};

const incrementSecFrom = (incrementString: string | null) => {
  if (!incrementString) {
    return undefined;
  }

  const incrementSec = parseInt(incrementString);

  if (isNaN(incrementSec)) {
    return undefined;
  }

  return incrementSec;
};
