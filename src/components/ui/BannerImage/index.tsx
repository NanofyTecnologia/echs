import Image, { StaticImageData } from 'next/image'
import Container from '@/components/Container'

export default function BannerImage({ img }: { img: StaticImageData }) {
  return (
    <div className="my-6 flex items-center justify-center md:my-12">
      <Container>
        <div className="relative">
          <Image
            src={img}
            alt="contabilidade"
            loading="lazy"
            placeholder="empty"
            fetchPriority="low"
            quality={80}
          />
          <div className="absolute inset-0 h-full w-full bg-black/40" />
        </div>
      </Container>
    </div>
  )
}
