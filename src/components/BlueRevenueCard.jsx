import { RevenueCard } from "./RevenueCard";

export function BlueRevenueCard(){
    return <div className="rounded-lg" style={{backgroundColor:"#146eb4", color:"white"}}>
        <div>
            <RevenueCard title={"Next Payout"} amount={"2,312.23"} orderCount={"23"} textColor="white"/>
        </div>
        
        <div className="flex justify-between p-2 " style={{backgroundColor:"#1A598A"}}>
            <div className="">
                Next Payout date: 
            </div>
            <div className="pr-2">
                Today, 04:00PM
            </div>
        </div>
        
    </div>
}