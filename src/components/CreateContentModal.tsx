import { useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
interface con {
    open : boolean,
    onClose : ()=>void,
}

//controlled component
export function CreateContentMOdal({open , onClose}:con){
   
return <div>
   {open && <div className="w-screen bg-slate-500 opacity-95 fixed left-0 top-0 flex justify-center h-screen">
      <div className="flex flex-col justify-center">
        <span className=" bg-white opacity-100 p-4 rounded">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
                <CrossIcon></CrossIcon>
            </div>
            <div className="flex flex-col justify-center"> <Input Placeholder="enter title"/>
        <Input Placeholder="enter type"/>
        <Button text="submit"  variant="primary" size="md" ></Button>
</div>
            
        </span>
       
        </div>   
    
    </div>}


</div>

}

function Input({Placeholder} : {Placeholder : string}){
    return <input className="px-4 py-2   border-solid rounded" type="text" placeholder={Placeholder}/> 

}