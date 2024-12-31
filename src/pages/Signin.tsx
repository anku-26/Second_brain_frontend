import { Inputh } from "../components/CreateContentModal";
import { Button } from "../components/Button"; 
import { useRef } from "react";
 import {BACKEND_URL} from '../config';
 import axios from 'axios'
 import { useNavigate } from "react-router-dom";

    export function Signin (){
        const usernameRef = useRef<HTMLInputElement>();
        const passwordRef=useRef<HTMLInputElement>();
         const navigate = useNavigate();
        async   function signin (){
              const username =  usernameRef.current?.value;
              const password = passwordRef.current?.value;  
          const response=   await axios.post(BACKEND_URL+"api/v1/signin",{
             
                  username, 
                  password,
              
            });
            const jwt = response.data.token;
            localStorage.setItem("token", jwt); 
            navigate("/DashBoard"); 



        }
      






    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border  min-w-48 p-8">
                {/* Input for username */}
               <div> <Inputh uref={usernameRef} Placeholder="Username" /> </div>
               
                
                {/* Input for password */}
                <Inputh uref={passwordRef} Placeholder="Password" />

                {/* Submit button */}
                <div className=" pt-4 mx-auto">
                    <Button  disabled = {false} onClick={signin} variant="primary" text=" Signin"   size="md" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}
