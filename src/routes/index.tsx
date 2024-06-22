import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/home"/>} />   
    </Routes>
  );
}
