import Timers from "components/Timers";
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
        <Route path="*" element={<Navigate replace to="/timers" />} />
        <Route path="/timers/*" element={<Timers />} />
      </Routes>
    </Router>
  </Store>
);
