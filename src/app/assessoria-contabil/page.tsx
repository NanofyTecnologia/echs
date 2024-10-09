import IntroductionAC from '@/components/_Pages/AssessoriaContabil/Introduction'
import BannerImage from '@/components/ui/BannerImage'
import imageBanner from '@/assets/img/contabil2.jpg'
import Contact from '@/components/_Sections/Contact'

export default function AssessoriaContabil() {
  return (
    <>
      <IntroductionAC />
      <BannerImage img={imageBanner} />
      <Contact />
      <div className="h-[0.3px] w-full bg-primary" />
    </>
  )
}
