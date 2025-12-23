import { HomeSection } from '@/app/[locale]/HomeSection'
import ScrollingText from './[locale]/ScrollingText'
import Services from './[locale]/Services'
import GoldenSmoke from './[locale]/Smokeline'


export default function LocaleHome() {
  return (  <>
    <HomeSection />
    <ScrollingText/>
    <Services/>
    <GoldenSmoke/>
    
  </>)
}
