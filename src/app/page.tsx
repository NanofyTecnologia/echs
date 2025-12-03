import AboutUs from '@/components/_Sections/AboutUs'
import Contact from '@/components/_Sections/Contact'
import Customers from '@/components/_Sections/Customers'
import Form from '@/components/_Sections/Form'
import Map from '@/components/_Sections/Map'
import Services from '@/components/_Sections/Services'
import Welcome from '@/components/_Sections/Welcome'

export default function Content() {
  return (
    <>
      <Welcome />
      <AboutUs />
      <Services />
      <Customers />
      <Contact />
      <Form />
      <Map />
    </>
  )
}
