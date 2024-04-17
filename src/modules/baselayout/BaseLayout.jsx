import React, { useEffect } from 'react'
import Section1 from '../section1/Section1'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'
import Section5 from '../section5/Section5'
import Section6 from '../section6/Section6'

const BaseLayout = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth'});
          }
        }
      }, []);
  return (
    <div>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
    </div>
  )
}

export default BaseLayout