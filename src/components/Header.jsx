import { Link } from "react-router"

export default function Header (){

    return(
        <header className="bg-[#ff5200] font-serif top-0 left-0 right-0">
            {/* Swiggy logo, and some buttons */}
        <div className="flex justify-between container mx-auto py-8 px-4 sm:px-6 lg:px-8 max-w-[80%]">
            <img className="w-36 h-auto" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="logo" />
            <div className="text-white text-base font-semibold flex gap-14 items-center">
                <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with us</a>
                <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://partner.swiggy.com/login#/swiggy">Get the App ↗</a>
                <a className="border border-black bg-black py-3 px-4 rounded-2xl" target="_blank"href="https://partner.swiggy.com/login#/swiggy">Sign in</a>
            </div>
        </div>
        {/* Now Text and images */}
        <div className="relative pt-16 pb-8 container mx-auto max-w-screen">
            <div className="max-w-[40%]">
            <img className="absolute h-120 w-80 top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Vegetable" />
            <img className="absolute h-120 w-80 top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"alt="sushi"/>
            </div>
            <div className="relative text-white max-w-[60%] text-5xl font-bold container mx-auto text-center leading-snug">
            Order food & groceries. Discover best restaurants. Swiggy it!
            </div>
            <div className="max-w-[70%] container mx-auto flex gap-5 mt-10 z-20">
            <input className="bg-white w-[30%] text-xl px-6 py-4 rounded-2xl ml-15" placeholder="Delhi, India"type="text" />
            <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant and items for more" type="text" />
            </div>
        </div>
        {/* Image Blocks anchor */}
        <div className="max-w-[80%] container mx-auto flex">
        
        <Link to={"/restaurant"}>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
        </Link>
                <a target="_blank" href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a target="_blank" href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
        </div>
        </header>
    )
}