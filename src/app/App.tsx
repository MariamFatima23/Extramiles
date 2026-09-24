import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import PartnerPage from "../components/partnerPage/PartnerPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/partners" element={<PartnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
