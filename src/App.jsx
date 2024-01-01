import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
  <BrowserRouter>
  <NavBar>
  <Routes>
    <Route path="/" element={<AllPlayers/>} />
    <Route path="/players/:id" element={<SinglePlayer />} />
    <Route path="*" element={<AllPlayers />} />
  </Routes>
  </NavBar>
  </BrowserRouter>
  );
}

export default App;