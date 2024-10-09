import Image from 'next/image'
import backgroundImg from '@/assets/img/arrow-bg.svg'
import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Welcome() {
  return (
    <main className="relative bg-aliceBlue" id="inicio">
      <Image
        src={backgroundImg}
        alt=""
        className="w-full object-cover"
        loading="eager"
        priority
      />

      <div className="absolute left-0 top-1/2 w-full -translate-y-1/2 px-4">
        <div className="mx-auto max-w-5xl lg:px-0 2xl:max-w-5xl">
          <div className="text-xs font-bold md:text-3xl">
            <div className="uppercase">echs</div>
            <div>Contabilidade</div>
          </div>
          <div className="w-44 flex-wrap text-[6px] md:w-[448px] md:text-base">
            Proximidade e atenção, entender desafios e oferecer solução.
          </div>
          <Link href="//#contato">
            <div className="mt-8 flex h-4 w-10 items-center justify-center rounded-sm bg-primary p-1 text-[6px] text-white duration-300 hover:bg-primary/80 md:h-11 md:w-32 md:rounded-md md:text-base">
              Contato
            </div>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full -translate-y-1/2 px-4">
        <div className="mx-auto flex max-w-5xl gap-1 text-primary lg:px-0 2xl:max-w-5xl">
          <Link
            href="https://instagram.com/echs.contabilidade"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Instagram className="h-3 w-3 md:h-6 md:w-6" />
          </Link>

          <Link
            href="https://wa.me//5516993127209"
            className="hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaWhatsapp className="h-3 w-3 md:h-6 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  )
}
