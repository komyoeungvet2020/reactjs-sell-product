import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import Header from "./component/Header";
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Computer from './component/Products/Computer';
import Watch from './component/Products/Watch';
import Phone from './component/Products/Phone';
import DetailComputer from './component/Products/DetailComputer';
import DetailPhone from './component/Products/DetailPhone';
import DetailWatch from './component/Products/DetailWatch';





function App() {

ReactDOM.render(
  <React.StrictMode>
       <Router>
          <Routes>
          <Route exact path="/" element={<Header />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />}/>
            <Route path="/computer" element={<Computer />}/>
            <Route path="/watch" element={<Watch />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/detailComputer/:itemDetail" element={<DetailComputer/>}/>
            <Route path="/detailPhone/:itemDetail1" element={<DetailPhone/>}/>
            <Route path="/detailWatch/:itemDetail2" element={<DetailWatch/>}/>

          </Routes>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
}

export default App;
