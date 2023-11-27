import React from 'react'
import {AiOutlineShopping} from "react-icons/ai"
import "./Home2.css"
import { Heading } from '@chakra-ui/react'
const Home2 = () => {
  return (
    <div>
        <div className='sec2-1'>
             <div style={{display:'flex',gap:'20px'}}>
               <AiOutlineShopping color='white' size='40px' style={{marginLeft:'70px',marginBottom:'10px'}}/> 
               <div className='sec2-3'>
                <Heading color='white' as='h1'>Productivity</Heading>
               </div>
             </div>
               <div className='sec2-2'>
                       <Heading as='h1' className='sec2-4'>Accelerate innovation</Heading>
                       <Heading as='h1' className='sec2-5'>Our AI-powered platform increases the<br/> pace of software development.</Heading>
               </div>

               <div className='sec2-6'>
                    <img src='https://github.githubassets.com/assets/illu-copilot-editor-6474457a5b19.png' alt='code'></img>
               </div>
        </div>
    </div>
  )
}

export default Home2