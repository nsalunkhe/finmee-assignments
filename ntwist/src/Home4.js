import React from 'react'
import { Heading } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./Home4.css"
const Home4 = () => {
  return (
    <div>
        <div className='sec4'> 
            <div className='sec4-1'>
               <div className='sec4-2'>
               <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Actions</span> automates your build,<br/> test, and deployment workflow with<br/>simple and secure CI/CD.</Heading>
               <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Discover Github Actions<ChevronRightIcon/></Heading>
               </div>
               <div className='sec4-3'>
                <img src='https://github.githubassets.com/assets/illu-actions-2-c5178134f381.png?width=783&format=webpll' alt='code'></img>
               </div>
            </div>
            <div className='sec4-5'>
                <div className='sec4-6'>
                 <div className='extra1'>   
                <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Codespaces</span> offers a <br/> complete dev environment in<br/> seconds. Code, build, test, and open<br/> pull requests from any repo.</Heading>
                <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Check out Github Codespaces <ChevronRightIcon/></Heading>
                </div>
                <div className='extra2'>
                      <img src='https://github.githubassets.com/assets/illu-codespaces-1d2d17e8b2b7.png?width=967&format=webpll' alt='code'></img>
                </div>
                </div>
                <div className='sec4-7'>
                <div className='extra1'>   
                <Heading as='h1'><span style={{ color: 'white',fontWeight:'400' }}>GitHub Mobile</span> fits your projects in<br/> your pocket, so you never miss a<br/> beat while on the go.</Heading>
                <Heading border='none' color='white' size='lg' fontSize='30px' fontWeight='400' mt='30px'variant='outline'_hover={{backgroundColor:'none',textDecoration:'underline',marginLeft:'0px'}}>Download GitHub Mobile<ChevronRightIcon/></Heading>
                </div>
                <div className='extra2'>
                      <img src='https://github.githubassets.com/assets/illu-mobile-4d51d19f769e.png?width=966&format=webpll' alt='code'></img>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home4