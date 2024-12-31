import { Sidebaritems } from "./sidebarItem";
import {TwitterIcon} from '../icons/TwitterIcon';
import {YoutubeIcon} from '../icons/YoutubeIcon';
import {Logo} from '../icons/Logo';
 export const Sidebar = ()=>{
    return <div className="h-screen w-72  bg-white fixed top-0 left-0 pl-4">
        <div className="flex text-2xl pt-4"> <div className="text-purple-600"><Logo></Logo> </div><div className="ml-4 text-2xl"> Second Brain </div></div>
        <div className="pt-4 ">
            <Sidebaritems text="Tweets"  icons={<TwitterIcon/>}></Sidebaritems>
             <Sidebaritems text = "Videos" icons={<YoutubeIcon/>}></Sidebaritems>
        </div>

    </div>




 } 


 