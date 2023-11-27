import React, { useState,useEffect } from 'react';
import { HamburgerIcon, CloseIcon,SearchIcon } from '@chakra-ui/icons';
import { Button, Heading } from '@chakra-ui/react';
import './Logo.css';
import Home2 from './Home2';
import Footer from './Footer';

const Logo = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={`container ${menuOpen ? 'menu-open' : ''}`}>
      <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
          <img
            src='https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png'
            alt='logo'
          />
          <div className='nav-1'>
            <button>Home</button>
            <button>Industries</button>
            <button>AI Software</button>
            <button>Blog</button>
            <button>Contact Us</button>
          </div>

          <div className={`nav ${menuOpen ? 'show' : ''}`}>
            <button>Home</button>
            <button>Industries</button>
            <button>AI Software</button>
            <button>Blog</button>
            <button>Contact Us</button>
          </div>
            
          <div className='menu-icon' onClick={toggleMenu}>
            {menuOpen ? <CloseIcon boxSize={6} /> :
            <div className='search-icon'>
                <SearchIcon boxSize={6}/>
            <HamburgerIcon boxSize={9} />
           </div>}
          </div>
        </div>
         <div className='one'>   
            <div className='subOne'>
             <Heading as='h1' size='2xl'   className='subOne'>Data-powered solutions <br/> for industrial Excellence</Heading>
             <Button colorScheme='messenger' size='lg'>Read More</Button>
            </div>

            <div className='subTwo'>
            <img src='https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png' alt='logo2'/>
            </div>
        </div> 
      </div>
      <Home2/>
      <Footer/>
    </div>
    
  );
};

export default Logo;
