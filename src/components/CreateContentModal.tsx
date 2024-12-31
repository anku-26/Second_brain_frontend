import { useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import axios from "axios";
import {BACKEND_URL} from '../config'


interface con {
    open : boolean,
    onClose : ()=>void,
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter",

}

//controlled component
export function CreateContentMOdal({open , onClose}:con){
    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>(); 
    const [type,setType] = useState(ContentType.Youtube); 

   async  function addmodal (){
        const title = titleRef.current?.value;
        const link  = linkRef.current?.value; 
        await  axios.post(BACKEND_URL +"api/v1/content", {
             title ,
             link , 
             type,
        },{
            headers : {
                "Authorization" : localStorage.getItem("token")
            }
        })
        onClose();

    }
   
return <div>
   {open && (<div>
    <div className="w-screen bg-slate-500 opacity-60 fixed left-0 top-0 flex justify-center h-screen"/> 
   <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
     <div className="flex flex-col justify-center">
        <span className=" bg-white opacity-100 p-4 rounded">
            <div className="flex justify-end cursor-pointer" onClick={onClose}>
                <CrossIcon></CrossIcon>
            </div>
            <div className="flex flex-col justify-center"> <Inputh uref={titleRef} Placeholder="enter title"/>
        <Inputh uref={linkRef} Placeholder="enter Link"/>
        <h1> Type </h1>
        <div className="flex gap-4 pt-2 pb-3">
           <div> <Button text="youtube" onClick={()=>setType(ContentType.Youtube)} variant={type === ContentType.Youtube ? "primary" : "secondary"} size="md"  ></Button> </div>
            <div> <Button  onClick={()=>setType(ContentType.Twitter)} text="twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} size="md"  ></Button> </div>
        </div>
        <Button text="submit" onClick={addmodal} variant="primary" size="md" ></Button>
</div>
            
        </span>
       
        </div>   
   </div>
   </div>
     
    
   )}


</div>

}

export function Inputh({Placeholder,uref} : {Placeholder : string, uref?: any}){
    return <input className="px-4 py-2   border-solid rounded" type="text" ref={uref}     placeholder={Placeholder} /> 

}