import IntroductionDSL from '@/components/_Pages/DobreSeusLucros/Introduction'
import BannerImage from '@/components/ui/BannerImage'
import imageBanner from '@/assets/img/contabil5.jpg'
import Contact from '@/components/_Sections/Contact'

export default function DobreSeusLucros() {
  return (
    <>
      <IntroductionDSL />
      <BannerImage img={imageBanner} />
      <Contact />
      <div className="h-[0.3px] w-full bg-primary" />
    </>
  )
}
