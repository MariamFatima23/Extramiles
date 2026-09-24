import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import PartnerPage from "../components/partnerPage/PartnerPage";
import NotFoundPage from "../components/NotFoundPage";

function AppRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/partner" element={<PartnerPage />} />
        <Route path="/partners" element={<Navigate to="/partner" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
