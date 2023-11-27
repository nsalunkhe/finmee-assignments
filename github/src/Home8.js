import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import { Heading } from '@chakra-ui/react'
import "./Home8.css"
import image from "./img/img2.png"
const Home8 = () => {
  return (
    <div>
        <div className='sec8'>
            <div className='sec8-1'></div>
             <div style={{display:'flex',gap:'20px'}}>
               <AiOutlineHeart color='white' size='40px' style={{marginLeft:'70px',marginBottom:'10px'}}/> 
               <div className='sec8-3'>
                <Heading color='white' as='h1'>Collaboration</Heading>
               </div>
             </div>
             <div className='sec8-4'>
             <Heading as='h1' className='sec8-5'>Supercharge collaboration</Heading>
             <Heading as='h1' className='sec8-6'>GitHub helps your teams work more<br/>efficiently together.</Heading>
             </div>
             
             <div className='sec8-7'>
                    <img src={image} alt='code'></img>
               </div>
        </div>
    </div>
  )
}

export default Home8