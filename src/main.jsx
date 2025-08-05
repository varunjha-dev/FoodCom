import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import  Restaurant  from './components/Restaurant';
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById('root')).render(
    <div className="">
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home></Home>}></Route>
            <Route path = "/restaurant" element = {<Restaurant></Restaurant>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
);