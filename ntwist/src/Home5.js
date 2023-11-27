import React from 'react'
import {AiOutlineShopping} from "react-icons/ai"
import { Heading } from '@chakra-ui/react'
import "./Home5.css"
import image from "./img/img1.png"
const Home5 = () => {
  return (
    <div>
        <div className='sec5'>
            <div className='sec5-1'></div>
             <div style={{display:'flex',gap:'20px'}}>
               <AiOutlineShopping color='white' size='40px' style={{marginLeft:'70px',marginBottom:'10px'}}/> 
               <div className='sec5-3'>
                <Heading color='white' as='h1'>Application security</Heading>
               </div>
             </div>
             <div className='sec5-4'>
             <Heading as='h1' className='sec5-5'>Empower developers</Heading>
             <Heading as='h1' className='sec5-6'>With GitHub, you can secure<br/>code in minutes.</Heading>
             </div>
             
             <div className='sec5-7'>
                    <img src={image} alt='code'></img>
               </div>
        </div>
    </div>
  )
}

export default Home5