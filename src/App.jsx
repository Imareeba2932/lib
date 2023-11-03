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
import Todo from './components/todo';
import Count from './components/count';
import ProductListing from './components/productListing';
import Header from './components/header';
import { useState } from 'react';


function App() {

  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      {/* <Log /> */}
      <AnimatePresence>
        <BrowserRouter>
          <Nav cartItems={cartItems} />
          <Routes>
            <Route path="log" element={<Log />} />
            <Route path="login" element={<Login />} />
            <Route path="barChart" element={<BarChart />} /> 
            <Route path="prac" element={<Prac />} /> 
            <Route path="konva" element={<MemeCreator />} />
            <Route path="todo" element={<Todo />} />
            <Route path="count" element={<Count />} />
            <Route path="productListing" element={<ProductListing setCartItems={setCartItems} />} />
            {/* <Route path="k" elements={<K />} /> */}
            <Route path='header' element={<Header />} />

          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
