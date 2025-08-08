import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import  Restaurant  from './components/Restaurant';
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from './components/RestaurantMenu';
import SearchFood from './components/SearchFood';

createRoot(document.getElementById('root')).render(
    <div className="">
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route path = "/restaurant" element = {<Restaurant/>}></Route>
            <Route path ="/city/delhi/:id" element = {<RestaurantMenu/>}></Route>
            <Route path='/city/delhi/:id/search' element={<SearchFood/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
);