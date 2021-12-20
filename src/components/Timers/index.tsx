import NewTimer from "components/NewTimer";
import PickTimer from "components/PickTimer";
import { Navigate, Route, Routes } from "react-router-dom";

export default () => (
  <Routes>
    <Route index element={<PickTimer />} />
    <Route path="/new" element={<NewTimer />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);
