import Image from 'next/image'
import Container from '@/components/Container'

export default function BannerImage({ img }: { img: HTMLImageElement }) {
  return (
    <div className="my-6 flex items-center justify-center md:my-12">
      <Container>
        <Image src={img} alt="Contabilidade" loading="lazy" />
      </Container>
    </div>
  )
}
