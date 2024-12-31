import { ReactElement } from "react";

export function Sidebaritems({text, icons} : {
    text : string,
    icons : ReactElement
}){
    return <div className="flex  text-gray-800 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transitio all">
           <div className="p-2 ml-4"> {icons}</div>
       
        <div className="p-2">  {text} </div>
        
    </div>

}