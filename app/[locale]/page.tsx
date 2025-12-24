import { HomeSection } from '@/app/[locale]/HomeSection'

import Services from './Services'
import FeaturesTyping from './Features'
import ContactCTA from './Getintouch'




export default function LocaleHome() {
  return (  <>
    <HomeSection />
   
    <Services/>
   <FeaturesTyping/>
   <ContactCTA/>

  </>)}
