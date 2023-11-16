import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorAdd from "./components/DoctorAdd";
import DoctorSearch from "./components/DoctorSearch";
import DoctorDelete from "./components/DoctorDelete";
import DoctorView from "./components/DoctorView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<DoctorAdd />}></Route>
        <Route path="search" element={<DoctorSearch />}></Route>
        <Route path="delete" element={<DoctorDelete />}></Route>
        <Route path="view" element={<DoctorView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
