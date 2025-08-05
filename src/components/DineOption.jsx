import { dineoutRestaurants } from "../utils/DineData";
import DineCard from "./DineCard";

export default function DineOption() {
    return (
        <div className='w-[80%] mx-auto mt-20'>
            <p className='font-extrabold text-2xl font-serif'>Discover best restaurants of Dineout</p>
            <div className='flex flex-nowrap overflow-x-auto mt-5 gap-3.5'>
                {dineoutRestaurants.map((ResData) => (
                    <DineCard key={ResData?.info?.id} ResData={ResData} />
                ))}
            </div>
        </div>
    );
}