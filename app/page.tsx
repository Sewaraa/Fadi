import { HomeSection } from '@/app/[locale]/HomeSection'

import Services from './[locale]/Services'

import FeaturesTyping from'./[locale]/Features'
import ContactCTA from './[locale]/Getintouch'

export default function LocaleHome() {
  return (  <>
    <HomeSection />
   
    <Services/>
    <FeaturesTyping/>
    <ContactCTA/>
    
  </>)
}
