import React from 'react'
import { Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./Home7.css"
const Home7 = () => {
  return (
    <div>
        <div className='sec7'> 
            <div className='sec7-1'>
               <div className='sec7-2'>
               <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>Code scanning </span> is our code analysis<br/> tool that helps you remediate issues in<br/>your code.</Heading>
               <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Download the latest SAST ebook <ChevronRightIcon/></Heading>
               </div>
               <div className='sec7-3'>
                <img src='https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll' alt='code'></img>
               </div>
            </div>
            <div className='sec7-5'>
                <div className='sec7-6'>
                 <div className='extra1'>   
                <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>Dependabot</span> makes it easy to find <br/> and fix vulnerable dependencies in<br/>your supply chain.</Heading>
                <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Explore Dependabot <ChevronRightIcon/></Heading>
                </div>
                <div className='extra2'>
                      <img src='https://github.githubassets.com/assets/illu-dependabot-d98c73cc6724.png?width=724&format=webpll' alt='code'></img>
                </div>
                </div>
                <div className='sec7-7'>
                <div className='extra1'>   
                <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>Secret scanning</span>automatically looks<br/>for partner patterns and prevents<br/> fraudulent use of accidentally <br/>committed secrets.</Heading>
                <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Read about secret scanning <ChevronRightIcon/></Heading>
                </div>
                <div className='extra2'>
                      <img src='https://github.githubassets.com/assets/illu-secret-scanning-2-88fb429376d6.png?width=724&format=webpll' alt='code'></img>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home7