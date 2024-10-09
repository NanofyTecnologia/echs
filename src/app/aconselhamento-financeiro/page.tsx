import IntroductionAF from '@/components/_Pages/AconselhamentoFinanceiro/Introduction'
import BannerImage from '@/components/ui/BannerImage'
import imageBanner from '@/assets/img/contabil3.svg'
import Contact from '@/components/_Sections/Contact'

export default function AconselhamentoFinanceiro() {
  return (
    <>
      <IntroductionAF />
      <BannerImage img={imageBanner} />
      <Contact />
      <div className="h-[0.3px] w-full bg-primary" />
    </>
  )
}
