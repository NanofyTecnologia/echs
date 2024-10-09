import IntroductionPF from '@/components/_Pages/PlanejamentoFinanceiro/Introduction'
import BannerImage from '@/components/ui/BannerImage'
import imageBanner from '@/assets/img/contabil4.jpg'
import Contact from '@/components/_Sections/Contact'

export default function PlanejamentoFinanceiro() {
  return (
    <>
      <IntroductionPF />
      <BannerImage img={imageBanner} />
      <Contact />
      <div className="h-[0.3px] w-full bg-primary" />
    </>
  )
}
