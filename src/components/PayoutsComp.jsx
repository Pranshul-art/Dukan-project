import { AppTopBar } from "./AppTopBar";
import { PayoutGrid } from "./PayoutGrid";
import { TransactionDetails } from "./TransactionsDetails";

export function PayoutsComp(){
    return <div>
        <AppTopBar/>
        <div className="bg-slate-50 p-4 ">
            <div className="flex justify-between pt-8 pb-6">
                <div className="font-medium text-xl">Overview</div>
                <div className="relative inline-block text-left">
                    <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" ariaExpanded="true" ariaHaspopup="true">
                    Month
                    <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" ariaHidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                    </button>
                </div>
             </div>
             <PayoutGrid/>
             <div className="font-medium text-xl pt-8 ">
                Transactions | This Month
             </div>
             
             <div class="flex gap-2 pt-4 h-16  ">
 
                <button className="bg-gray-300 px-4 py-2 h-8 flex-col justify-center rounded-full opacity-50" disabled>
                    Payouts(22)
                </button>

  
                <button className=" px-4 py-2 flex-col h-8 justify-center rounded-full text-white" style={{backgroundColor:"#146eb4", color:"white"}}>
                    Refunds(6)
                </button>
             </div>
            
            <TransactionDetails/>
            
             
        </div>
        
            <div className=" flex justify-center font-medium text-gray-600 bg-slate-300 pt-4">----- Made By <span className="pl-1 cursor-pointer text-blue-700"><a href="https://github.com/Pranshul-art" target="_blank">Pranshul Gupta</a></span>, inspired by <span className="pl-1 cursor-pointer text-blue-700"><a href="https://x.com/subhashchy/status/1744308069751025894?t=MrLV-PSnfsgv0Hg2jTz5JA&s=08" target="_blank">Dukaan App UI</a></span> -----</div>  
            <div className="flex justify-center underline font-light text-gray-600 bg-gray-300 cursor-pointer pb-4"><a href="https://github.com/Pranshul-art/Dukan-project.git" target="_blank">Get the source code</a></div>
        
    </div>
}
