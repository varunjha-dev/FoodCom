import { useState, useEffect } from "react";
import { useParams, Link } from "react-router"
import MenuCard from "./MenuCard";
export default function RestaurantMenu(){
    const { id } = useParams();
    const [RestData, setRestData] = useState([]);
    const [selected, setSelected] = useState(null);
    useEffect(()=> {
            async function fetchData() {
            const proxyServer = "https://proxy.corsfix.com/?"
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
           const response = await fetch(proxyServer+swiggyAPI);
           const data = await response.json();
           const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
           const filterData = tempData.filter((items) => 'title' in items?.card?.card)
           setRestData(filterData);
        }
            fetchData();
        },[id])
        // console.log(RestData)
    return (
        <div>
            <div className="w-[80%] mt-20 mb-20 mx-auto">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-4 bg-gray-300 text-2xl rounded-4xl">Search for Dishes</p>
                </Link>
            </div>
        <div className="w-[80%] mt-20 mb-20 mx-auto">
            <button className={`text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected==="veg"? "bg-green-600": "bg-gray-300"} `} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
            <button className={`text-2xl py-2 px-4 border rounded-2xl ${selected==="nonveg"? "bg-red-500": "bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non veg</button>
        </div>
        <div className="w-[80%] mx-auto mt-20">
            {RestData.map((menuItems) => <MenuCard key ={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card} foodselected={selected}/>)}
        </div>
        </div>
    )
}