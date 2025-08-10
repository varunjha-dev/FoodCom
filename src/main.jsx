import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import  Restaurant  from './components/Restaurant';
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantMenu from './components/RestaurantMenu';
import SearchFood from './components/SearchFood';
import SecondaryHome from './components/SecondaryHome';
import { store } from './Stored/stores';
import { Provider } from 'react-redux';
import Checkout from './components/Checkout';

createRoot(document.getElementById('root')).render(
    <div className="">
        <Provider store={store}>
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>}></Route>
            <Route element={<SecondaryHome/>}>
            <Route path = "/restaurant" element = {<Restaurant/>}></Route>
            <Route path ="/city/delhi/:id" element = {<RestaurantMenu/>}></Route>
            <Route path='/city/delhi/:id/search' element={<SearchFood/>}></Route>
            </Route>
            <Route path='/Checkout' element={<Checkout/>}></Route>
        </Routes>
        </BrowserRouter>
        </Provider>
    </div>
);