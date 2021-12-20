import PickTimer from "components/PickTimer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "Store";

export default () => (
  <Store>
    <Router>
      <Routes>
        <Route index element={<PickTimer />} />
      </Routes>
    </Router>
  </Store>
);
