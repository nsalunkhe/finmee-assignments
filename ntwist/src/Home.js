import React from 'react'
import "./Home.css"
import {AiFillGithub} from "react-icons/ai";
import { Button } from '@chakra-ui/react';
import { InputRightAddon,Input,InputGroup, } from '@chakra-ui/react';
import {ChevronRightIcon} from"@chakra-ui/icons"
import Home2 from './Home2';
import Home3 from './Home3';
import Home4 from './Home4';
import Home5 from './Home5';
import Home6 from './Home6';
import Home7 from './Home7';
import Home8 from './Home8';
const Home = () => {
  return (
    <>
    <div className='container'>
        <div className='navbar'>
        <AiFillGithub size={50} color="white" className='logo' />
        <div className='but1'>
            <button>Product</button>
            <button>Solutions</button>
            <button>Open Source</button>
            <button>Pricing</button>
        </div>

        <div className='input1'>
            <input type='text' placeholder='Search or jump to'></input>
        </div>
        <button className='sign'>Sign In</button>
        <button className='sign2'>Sign Up</button>
        </div>

        <div className='sub1'>
            <p>The world’s leading AI-powered developer platform.</p>
            <div>
             <div className='sub2'>  
            <InputGroup w='30%' size='lg'>
                  <Input type='tel' placeholder='Email address' size='lg' bg='white' border='none' />
                  <InputRightAddon children='Sign Up for Github' size='lg' bg='#7b23d3' color='white' fontWeight='bold' border='none' />
             </InputGroup>
             <Button rightIcon={<ChevronRightIcon />} border=' 2px solid #7b23d3' color='white' fontWeight='bold' size='lg' variant='outline'_hover={{backgroundColor:'none',border:'2px solid white'}}>
                     Start a free enterprise trial
             </Button>
             </div> 
             <p className='sub3'>Trusted by the world’s leading organizations ↘︎</p>   
            </div>
            <div className='sub4'>
               <img src='https://github.githubassets.com/assets/3m-0151c2fda0ce.svg'alt='img1'></img>
               <img src='https://github.githubassets.com/assets/kpmg-c249f20c5173.svg'alt='img2'></img>
               <img src='https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg'alt='img3'></img>
               <img src='https://github.githubassets.com/assets/sap-96248a56d312.svg'alt='img4'></img>
               <img src='https://github.githubassets.com/assets/pg-f1f19955c4e4.svg'alt='img5'></img>
               <img src='https://github.githubassets.com/assets/telus-df0c2109df99.svg'alt='img6'></img>
            </div>
        </div>
    </div>
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5/>
    <Home6/>
    <Home7/>
    <Home8/>
    </>
  )
}

export default Home