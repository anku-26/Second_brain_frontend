import React from 'react'; 
import './App.css'
import { Button } from './components/Button';
import { Plusicon } from './icons/plusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';
import { CreateContentMOdal } from './components/CreateContentModal';
import { useState } from 'react';

function App() {
  const [modalOpen ,setModalOpen] = useState(false); 

  return (
    <div className='p-4'>  
   
    <CreateContentMOdal open ={modalOpen} onClose={()=>setModalOpen(false)}></CreateContentMOdal>
    <div className='flex justify-end gap-4'>
      <Button variant = "primary" text = "Add Content " size = "md" startIcon= {<Plusicon size='md'/>} onClick={()=>setModalOpen(true)} ></Button>
      <Button variant = "secondary" text = "Share Brain" size = "md"  startIcon={<ShareIcon size='md'/> } ></Button>
      </div>
      <div className='flex gap-4'>
       <Card title='first video ' link='https://www.youtube.com/watch?v=HYb4FGDTBmw' type='youtube'></Card> 
     <Card title = 'first post' link='https://x.com/notcodesid/status/1873429736405533174' type='twitter'></Card>
     </div>
    </div>
  )
}

export default App
