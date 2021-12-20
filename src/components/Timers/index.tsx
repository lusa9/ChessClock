import TimersNew from "components/Timers/TimersNew";
import TimersIndex from "components/Timers/TimersIndex";
import { Navigate, Route, Routes } from "react-router-dom";

export default () => (
  <Routes>
    <Route index element={<TimersIndex />} />
    <Route path="/new" element={<TimersNew />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
