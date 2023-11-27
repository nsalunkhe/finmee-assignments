import React from 'react'
import { Heading,Button} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./Home6.css"
const Home6 = () => {
  return (
    <div>
         <div className='sec6'>
             <div className='sec6-1'>
                  <div className='sec6-2'>
                        <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Advanced Security </span> enables you to find and fix vulnerabilities with ease and ship secure code quickly.</Heading>
                        <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Dive into GitHub Advanced Security <ChevronRightIcon/></Heading>
                  </div>
                  <div className='sec6-3'>
                      <img src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt='arrow'/>
                       <div className='sec6-4'>
                      <Button color='#029C97' border='1px solid #029C97' bg='transparent' size='sm' borderRadius='20px' mt='140px' fontSize='15px' fontWeight='400'>Did you know ?</Button>
                      <Heading as='h1'>7xfaster</Heading>
                      <Heading as='h3' color='white' fontWeight='400'>vulnerability fixes with GitHub1</Heading>
                      </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Home6