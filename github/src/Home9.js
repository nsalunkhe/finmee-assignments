import React from 'react'
import { Heading,Button} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./Home9.css"
const Home9 = () => {
  return (
    <div>
         <div className='sec9'>
             <div className='sec9-1'>
                  <div className='sec9-2'>
                        <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Issues and GitHub Projects </span> supply project management tools that adapt to your team alongside your code.</Heading>
                        <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Get started with GitHub Issues  <ChevronRightIcon/></Heading>
                  </div>
                  <div className='sec9-3'>
                      <img src='https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg' alt='arrow'/>
                       <div className='sec9-4'>
                      <Button color='#FF6FBD' border='1px solid #FF6FBD' bg='transparent' size='sm' borderRadius='20px' mt='140px' fontSize='15px' fontWeight='400'>Did you know ?</Button>
                      <Heading as='h1'>80%</Heading>
                      <Heading as='h3' color='white' fontWeight='400'>reduction in onboarding <br/>time with GitHub2</Heading>
                      </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Home9