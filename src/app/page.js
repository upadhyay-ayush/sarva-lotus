
import AboutUs from '@/components/AboutUs'
import ContactUs from '@/components/ContactUs'
import HeroSlider from '@/components/HeroSlider'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroSlider />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
}

export default page
