import React from 'react'
import {AiOutlineClose,AiFillFacebook, AiFillLinkedin,AiOutlineMessage,AiFillGithub} from "react-icons/ai";
import "./footer.css"
const Footer1 = () => {
  return (
    <div>
        <div className='footer'>
          <p>© 2023 GitHub, Inc.</p>
          <ul style={{display:'flex',listStyle:'none',gap:'20px'}}>
              <li>Terms</li>
              <li>Privacy (Updated 08/2022)</li>
              <li>Sitemap</li>
              <li>What is Git?</li>
            </ul>
            <div className='lin' style={{display:'flex',gap:'20px'}}>
               <AiOutlineClose color='gray' fontSize='20px'/>
               <AiFillFacebook color='gray' fontSize='20px'/>
               <AiFillLinkedin color='gray' fontSize='20px'/>
               <AiOutlineMessage color='gray' fontSize='20px'/>
               <AiFillGithub color='gray' fontSize='20px'/> 
            </div>
        </div>
    </div>
  )
}

export default Footer1