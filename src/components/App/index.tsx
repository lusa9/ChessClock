import Timers from "components/Timers";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
  useSearchParams,
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
  const time = searchParams.get("time");
  if (!time) {
    return <Navigate replace to="/timers" />;
  }
  const increment = searchParams.get("increment");
  return (
    <div>
      <h2>
        {time}
        {increment ? <span> | {increment}</span> : null}
      </h2>
    </div>
  );
};
