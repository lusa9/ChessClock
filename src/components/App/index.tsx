import NewTimer from "components/NewTimer";
import PickTimer from "components/PickTimer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Store from "Store";

export default () => (
  <Store>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/timers" />} />
        <Route path="/timers" element={<PickTimer />} />
        <Route path="/timers/new" element={<NewTimer />} />
      </Routes>
    </Router>
  </Store>
);
