import { HomeSection } from '@/app/[locale]/HomeSection'

import Services from './Services'
import FeaturesTyping from './Features'
import ContactCTA from './Getintouch'
import SectionDividerDots from './Dots'
import HowWeWork from './Howwework'




export default function LocaleHome() {
  return (  <>
    <HomeSection />
   
    <SectionDividerDots/>
   <FeaturesTyping/>
   <HowWeWork/>
   <Services/>
   <ContactCTA/>

  </>)}
