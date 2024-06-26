import { SearchBar } from "./SearchBar";

export function AppTopBar(){
    return <div className="flex shadow-md pb-2">
        <div className="flex pl-4">
            <div className="flex flex-col justify-center text-xl font-semibold">Payouts</div>
            <div className="text-gray-500 flex pl-3 text-xs"> 
                <div className="flex flex-col justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center pl-1"> How it works</div>
                </div>
                
        </div>
        <div className="sm:hidden pl-3 flex flex-col justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

        </div>
            
        
         
           <SearchBar/>
        
        <div className="flex justify-end pr-3">
            <div className=" flex flex-col justify-center  ">
                <svg xmlns="http://www.w3.org/2000/svg" style={{"padding":"0.5rem","width": "2.5rem","height": "2.5rem","background-color": "rgb(226 232 240)","border-radius": "9999px"}} width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots-fill" viewBox="0 0 16 16"> <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>    
            </div>
            <div className=" flex flex-col justify-center pl-2 ">
                
                <svg xmlns="http://www.w3.org/2000/svg" className="bg-slate-200 rounded-full  h-10 w-10 p-0.5" viewBox="0 0 320 512" id="IconChangeColor" height="40" width="40"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" id="mainIconPathAttribute"></path>
                </svg>
            </div>
        </div>
        
    </div>
}