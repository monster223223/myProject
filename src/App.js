import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Figma from "./figma/Figma";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Figma />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
