import { HomeSection } from '@/app/[locale]/HomeSection'

import Services from './[locale]/Services'

import FeaturesTyping from'./[locale]/Features'
import ContactCTA from './[locale]/Getintouch'
import SectionDividerDots from './[locale]/Dots'
import HowWeWork from './[locale]/Howwework'

export default function LocaleHome() {
  return (  <>
    <HomeSection />
   
    <SectionDividerDots/>
    <FeaturesTyping/>
    <HowWeWork/>
    <Services/>
    <ContactCTA/>
    
  </>)
}
