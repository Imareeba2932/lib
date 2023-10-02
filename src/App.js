import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Nav from './components/nav';
import Log from './components/log';


function App() {
  return (
    <div>
      <Nav />
      {/* <Log /> */}
      <BrowserRouter>
        <Routes>
          <Route path="log" element={<Log />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
