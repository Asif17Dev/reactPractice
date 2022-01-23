import React from 'react'
import AboutSection from '../components/AboutSection'
import ContactBanner from '../components/ContactBanner'
import HeroSecton from '../components/HeroSecton'
import ProjectSection from '../components/ProjectSection'
import ServiceSection from '../components/ServiceSection'
import TestionialSection from '../components/TestionialSection'

export default function Home() {
    return (
    <>
       <HeroSecton />
       <AboutSection />
       <ServiceSection />
       <ProjectSection />
       <TestionialSection />
       <ContactBanner />
       
    </>
      
    )
}
