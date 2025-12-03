'use client'

import IntroductionBPO from '@/components/_Pages/BPOFinanceiro/Introduction'
import BenefitsBPO from '@/components/_Pages/BPOFinanceiro/Benefits'
import ReductionBPO from '@/components/_Pages/BPOFinanceiro/Reduction'
import Contact from '@/components/_Sections/Contact'

export default function BPOFinanceiro() {
  return (
    <>
      <IntroductionBPO />
      <BenefitsBPO />
      <ReductionBPO />
      <Contact />
      <div className="h-[0.3px] w-full bg-primary" />
    </>
  )
}
