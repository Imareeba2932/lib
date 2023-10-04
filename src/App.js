import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/nav';
import Log from './components/log';
import { AnimatePresence } from "framer-motion";
import Login from './components/login';
import BarChart from './components/barChart';
import Prac from './components/prac';
import MemeCreator from './components/konva';

function App() {
  return (
    <div>
      {/* <Log /> */}
      <AnimatePresence>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="log" element={<Log />} />
            <Route path="login" element={<Login />} />
            <Route path="barChart" element={<BarChart />} /> 
            <Route path="prac" element={<Prac />} /> 
            <Route path="konva" element={<MemeCreator />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
