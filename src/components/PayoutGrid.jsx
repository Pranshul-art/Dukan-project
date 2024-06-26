import { BlueRevenueCard } from "./BlueRevenueCard";
import { RevenueCard } from "./RevenueCard";

export function PayoutGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   w-auto">
        <div className="mr-3 pb-3"><BlueRevenueCard/></div>
        <div className="mr-3 pb-3"><RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"} textColor={"text-blue-400"} PayoutColor={"text-gray-700"} bgColor={"bg-white"}/>
        </div>
        <div className=""><RevenueCard title={"Amount Pending"} amount={"23,92,312.19"}  textColor={"text-blue-400"} PayoutColor={"text-gray-700"} bgColor={"bg-white"}/>
        </div>
        
    </div>
}