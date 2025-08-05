import {grocery} from '../utils/Grocery'
import GroceryCard from "./Grocerycard"
export default function GroceryOption(){
    return (
        <div className="w-[80%] container mx-auto mt-20">
        <h1 className='font-extrabold text-2xl font-serif'>Shop Groceries on Instamart</h1>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
                        {grocery && grocery.map((foodData) => (
                            <GroceryCard key={foodData.id} foodData={foodData} />
                        ))}
                    </div>
        </div>
    )
}