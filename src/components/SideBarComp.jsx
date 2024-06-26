export function SideBarComp(props){
    return <div className=" h-12 w-44 rounded-lg p-0.5 flex hover:bg-slate-500 cursor-pointer">
        <div className="flex flex-col justify-center  pl-9  p-2 text-slate-50 hover:text-white ">
            {props.Svg}
        </div>
        <div className="text-slate-50 hover:text-white flex flex-col justify-center ">
            {props.Name}
        </div>
    </div>
}