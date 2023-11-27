import React from 'react'
import { Heading,Button} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./Home3.css"
const Home3 = () => {
  return (
    <div>
        <div className='sec3'>
             <div className='sec3-1'>
                  <div className='sec3-2'>
                        <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Copilot</span> empowers developers to complete tasks 55% faster with contextualized AI coding assistance across workflows.</Heading>
                        <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Explore Github Copilot<ChevronRightIcon/></Heading>
                  </div>
                  <div className='sec3-3'>
                      <img src='https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg' alt='arrow'/>
                       <div className='sec3-4'>
                      <Button color='rgb(69, 195, 72)' border='1px solid rgb(69, 195, 72)' bg='transparent' size='sm' borderRadius='20px' mt='140px' fontSize='15px' fontWeight='400'>Did you know ?</Button>
                      <Heading as='h1'>22% increase</Heading>
                      <Heading as='h3' color='white' fontWeight='400'>in developer productivity after three<br/> years with GitHub</Heading>
                      <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Read the report<ChevronRightIcon/></Heading>
                      </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Home3