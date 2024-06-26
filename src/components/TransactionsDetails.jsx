import { IDComp } from "./IDComp";

export function TransactionDetails(){
    const Details=[{
        OrderID:"#281209",
        Status:"Successful", 
        TransactionID:"131634495747" , 
        RefundDate:"Today, 08:45 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281208",
        Status:"Processing", 
        TransactionID:"131634495747" , 
        RefundDate:"Yesterday, 8:45 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281207",
        Status:"Failed", 
        TransactionID:"131634495747" , 
        RefundDate:"12 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281206",
        Status:"Successful", 
        TransactionID:"131634495747" , 
        RefundDate:"12 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281205",
        Status:"Processing", 
        TransactionID:"131634495747" , 
        RefundDate:"12 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281204",
        Status:"Failed", 
        TransactionID:"131634495747" , 
        RefundDate:"12 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281203",
        Status:"Successful", 
        TransactionID:"131634495747" , 
        RefundDate:"11 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281202",
        Status:"Processing", 
        TransactionID:"131634495747" , 
        RefundDate:"11 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281201",
        Status:"Failed", 
        TransactionID:"131634495747" , 
        RefundDate:"10 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281200",
        Status:"Successful", 
        TransactionID:"131634495747" , 
        RefundDate:"10 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281199",
        Status:"Processing", 
        TransactionID:"131634495747" , 
        RefundDate:"10 Jul 2023, 1:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281198",
        Status:"Failed", 
        TransactionID:"131634495747" , 
        RefundDate:"09 Jul 2023, 2:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281197",
        Status:"Successful", 
        TransactionID:"131634495747" , 
        RefundDate:"09 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281196",
        Status:"Processing", 
        TransactionID:"131634495747" , 
        RefundDate:"08 Jul 2023, 4:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281195",
        Status:"Failed", 
        TransactionID:"131634495747" , 
        RefundDate:"07 Jul 2023, 1:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281194",
        Status:"Successful", 
        TransactionID:"131634495747" , 
        RefundDate:"06 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281193",
        Status:"Processing", 
        TransactionID:"131634495747" , 
        RefundDate:"06 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    },{
        OrderID:"#281192",
        Status:"Failed", 
        TransactionID:"131634495747" , 
        RefundDate:"05 Jul 2023, 3:00 PM", 
        OrderAmount:"₹1,125.00"
    }]
    return <div className="shadow-md p-6 pt-10 bg-white ">
        <div className="flex justify-between">
            <div className="w-80"> 
                <form className="max-w-md mx-auto">   
                    <label for="default-search" className="mb-2 text-sm font-medium text-gray-50 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3  pointer-events-none">
                            <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Order ID or transaction ID" required />
                    </div>
                </form>

            </div>
            <div className="flex">
                <div  className="flex flex-col justify-center  ">     
                     <svg id="changeColor" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="35" zoomAndPan="magnify" viewBox="0 0 375 374.9999" height="35" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><path id="pathAttribute" d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 " fill="#737373"></path></defs><g><path id="pathAttribute" d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 " fillOpacity="1" fillRule="nonzero" fill="#737373"></path></g><g id="inner-icon" transform="translate(85, 75)"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="216" width="216"><rect width="20" height="20" fill="none"></rect><polyline points="112 176 80 208 48 176" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline><line x1="80" y1="48" x2="80" y2="208" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line><polyline points="144 80 176 48 208 80" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline><line x1="176" y1="208" x2="176" y2="48" fill="none" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line></svg> </g></svg>
                </div>
                <div className="flex flex-col justify-center">    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" height="40" width="40"><path d="M12,2C6.49,2,2,6.49,2,12s4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z M11,10V6h2v4h3l-4,4l-4-4H11z M17,17H7v-2h10V17z" id="mainIconPathAttribute" fill="#737373"></path></svg>
                </div>
            </div>

        </div>
        <div className="pt-8 pl-3 md:flex justify-between text-gray-600 font-medium">
            
            <div className="pr-4">ORDER ID</div>
            <div className="pr-4"> STATUS</div>
            <div className="text-right w-48 flex justify-start pr-4">TRANSACTION ID</div>
            <div className="text-left md:w-36 pr-4">REFUND DATE</div>
            <div className="lg:pl-36 ">ORDER AMOUNT</div>
        </div>
        <div className="pt-6">
            {Details.map(Comp => <div className="">
                <IDComp OrderID={Comp.OrderID} Status={Comp.Status} TransactionID={Comp.TransactionID} RefundDate={Comp.RefundDate} OrderAmount={Comp.OrderAmount}/>
            </div>)}
        </div>
    </div>
}