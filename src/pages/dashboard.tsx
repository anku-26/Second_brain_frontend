import React, { useEffect } from 'react'; 

import { Button } from '../components/Button';
import { Plusicon } from '../icons/plusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentMOdal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import { BACKEND_URL } from '../config';
import  axios  from 'axios';

 export function DashBoard() {
  const [modalOpen ,setModalOpen] = useState(false); 
  const {contents,refresh}  = useContent();
  useEffect(()=>{
   refresh();
   },[modalOpen])
    async function love (){
     const response = await axios.post(BACKEND_URL+"api/v1/brain/share",{share : true},{headers:{
      Authorization : localStorage.getItem("token")
     }})
      const share_url=`http://localhost:5173/share/${response.data.hash}`;
      alert(share_url);

   }

  return <div>
       <Sidebar></Sidebar>
    <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>  
   
    <CreateContentMOdal open ={modalOpen} onClose={()=>setModalOpen(false)}></CreateContentMOdal>
    <div className='flex justify-end gap-4'>
      <Button variant = "primary" text = "Add Content " size = "md" startIcon= {<Plusicon size='md'/>} onClick={()=>setModalOpen(true)} ></Button>
      <Button variant = "secondary" onClick={love} text = "Share Brain" size = "md"  startIcon={<ShareIcon size='md'/> } ></Button>
      </div>
      <div className=' flex gap-4 flex-wrap'>
       
       {contents.map((content, index) => (
    <Card key={index} title={content.title} type={content.type} link={content.link}></Card>
))}



     </div>
    </div>



    </div>
}

