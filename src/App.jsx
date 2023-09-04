import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import HotelDetailsPage from "./pages/HotelDetails";
import Header from "./layout/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotel/:hotelId" element={<HotelDetailsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
