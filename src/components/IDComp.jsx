

export function IDComp({
    OrderID,
    Status,
    TransactionID,
    RefundDate,
    OrderAmount
}){
    let Svg;
    if(Status=="Successful"){
                Svg= <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="12" width="12"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" id="mainIconPathAttribute" fill="green" strokeWidth="0.1" stroke="#ff0000"></path>
                </svg>
            }
            
    else if(Status=="Processing"){
            Svg= <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="12" width="12"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" id="mainIconPathAttribute" fill="#737373" strokeWidth="0.1" stroke="#ff0000"></path></svg>
    }
    else if(Status=="Failed"){
        Svg= <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="IconChangeColor" height="12" width="12"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" id="mainIconPathAttribute" fill="#ff0000" strokeWidth="0.1" stroke="#ff0000"></path></svg>
    }
    
    return <div className="p-4 md:flex justify-between font-light shadow ">
        <div className="pr-4 cursor-pointer text-blue-800 font-medium">
            {OrderID}
        </div>
        <div className="flex text-left pr-4 md:w-36">
            <div className="flex flex-col-10 justify-center pr-1 pt-1.5">
                {Svg}
            </div >
            <div>{Status}</div>
        </div>
        <div className="text-right md:w-auto flex justify-start pr-4">{TransactionID}</div>
        <div className="text-left w-36">{RefundDate}</div>
        <div className="lg:pl-48 md:pl-38 ">{OrderAmount}</div>
        
        
       
    </div>
}