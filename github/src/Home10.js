import React from 'react'
import { Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from "./img/img3.png"
import "./Home10.css"
const Home10 = () => {
  return (
    <div>
        <div className='sec10'> 
        <div className='sec10-1'>
               <div className='sec10-2'>
               <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Sponsors </span> lets you support your<br/> favorite open source maintainers and<br/>projects..</Heading>
               <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Invest with GitHub Sponsors  <ChevronRightIcon/></Heading>
               </div>
               <div className='sec10-3'>
                <img src={Image} alt='code'></img>
               </div>
            </div>
            <div className='sec10-5'>
                <div className='sec10-6'>
                 <div className='extra1'>   
                <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Discussions</span> creates space to<br/> ask questions and have open-ended<br/>conversations.</Heading>
                <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Jump into GitHub Discussions <ChevronRightIcon/></Heading>
                </div>
                <div className='extra2'>
                      <img src='https://github.githubassets.com/assets/illu-discussions-2-b915a6dd867e.png?width=724&format=webpll' alt='code'></img>
                </div>
                </div>
                <div className='sec10-7'>
                <div className='extra1'>   
                <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>Pull requests</span>allow real-time<br/>communication and collaboration<br/> about code changes.</Heading>
                <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Check out pull requests  <ChevronRightIcon/></Heading>
                </div>
                <div className='extra2'>
                      <img src='https://github.githubassets.com/assets/illu-pull-requests-2-280cc958fc05.png?width=724&format=webpll' alt='code'></img>
                </div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home10