import { useState, useEffect } from "react";
import { useParams } from "react-router"
export default function RestaurantMenu(){
    const { id } = useParams();
    const [RestData, setRestData] = useState(null);
    useEffect(()=> {
            async function fetchData() {
            const proxyServer = "https://proxy.corsfix.com/?"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           setRestData(data);
        }
            fetchData();
        },[id])
    return (
        <>
        <h1>hello bro</h1>
        <h2>{id}</h2>
        </>
    )
}