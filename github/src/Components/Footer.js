import React from 'react'
import { Button,Heading} from '@chakra-ui/react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./Footer.css"
const Footer = () => {
  return (
    <div>
        <div className='footer'>
             <div className='foot1'>
                <img src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' alt='foot1'></img>
                <div className='links'>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <p>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</p>
                <div>
                <div className='socialButton'>
                <Button  leftIcon={<FaTwitter />}></Button>
                <Button  leftIcon={<FaLinkedin />}></Button>
               </div>
               </div>
               <Heading as='h4'>© 2022. Ntwist Inc.</Heading>
             </div>
        </div>
    </div>
  )
}

export default Footer