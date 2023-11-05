import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';
import arrow from '../../assets/arrow.png';
import g1_bg from '../../assets/Group 1.png';

function Intro() {
  return (
    <div className='intro'>
      <img src = {g1_bg} alt = "g1_bg" className='g1_bg'/>
      <h1 className = 'h1'>Hi, We are SKANIN!</h1>
      <h2 className='h2'>Make your stress go away</h2>
      <div className = 'introParagraph1'>
          Welcome to SKANIN - Your Gateway to Smart Rice Farming!
      </div>
      <div className = 'introParagraph2'>
          Are you ready to revolutionze the way you grow rice? Our
          cutting-edge website and mobile application are here to 
          empower rice farmers with the latest technology in rice stress
          classification, ensuring healthier and more abundent rice 
          crops. Say goodbye to the uncertainties of traditional 
          farming, and embrace a futre where data-driven decisions 
          lead to thriving fields and increased yields.  
      </div>
      <Link>
            <button className='introBtn'>
                <span className="arrowContainer"><img src={arrow} alt='Get' className='arrowBtn'/></span>Get Started 
            </button>
        </Link>
    </div>
    
  );
}

export default Intro;
