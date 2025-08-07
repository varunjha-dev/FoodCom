import RestInfo from "./RestInfo"
import { useState } from "react"
export default function MenuCard ({menuItems}) {
     const [isOpen, setIsOpen] = useState(true);
    if("categories" in menuItems){
        return(
            <div className="w-full">
                <p>{menuItems?.title}</p>
                <div>
                    {
                        menuItems?.categories?.map((items)=><MenuCard key={items?.title} menuItems={items}/>)
                    }
                </div>
            </div>
        )
    }
    if(!isOpen){
        return(
        <div className="w-full">
            <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>   
        ) 
    }
    return(
        <div className="w-full">
            <div className="flex justify-between ">
            <p className="text-3xl font-bold mb-4">{menuItems?.title}</p>
            <button className="text-5xl font-bold mr-20" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'^':'⌄'}</button>
            </div>
            <div>
                {menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData = {items?.card?.info}/>)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
    )
}