import Image from 'next/image'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import bannerFour from '@/assets/contabil.png'
import bannerTwo from '@/assets/financeiro.png'
import bannerThree from '@/assets/iluminado.png'
import bannerOne from '@/assets/predios.png'

export default function Slider() {
  return (
    <section className="border-secondary mt-2 border-t-24 pt-2">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[300px] md:h-[630px]"
      >
        <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="h-full object-cover"
              src={bannerOne}
              alt="contabilidade"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center md:ml-24 md:justify-start">
            <div className="space-y-1">
              <div className="bg-opacity-70 bg-black p-2 font-semibold text-white uppercase md:text-2xl">
                diferencial no mundo dos negócios
              </div>
              <div className="bg-opacity-70 bg-black p-2 text-xs text-white md:text-base">
                Criar ações que supere as expectativas dos clientes.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="h-full object-cover"
              src={bannerTwo}
              alt="financeiro"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center md:mr-24 md:justify-end">
            <div className="space-y-1">
              <div className="bg-opacity-70 bg-black p-2 font-semibold text-white uppercase md:text-2xl">
                contador gerencial
              </div>
              <div className="bg-opacity-70 bg-black p-2 text-xs text-white md:text-end md:text-base">
                Cultura, Ação e Resultados.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="h-full object-cover"
              src={bannerThree}
              alt="predios"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center md:ml-24 md:justify-start">
            <div className="space-y-1">
              <div className="bg-opacity-70 bg-black p-2 font-semibold text-white uppercase md:text-2xl">
                planejamento, controladoria <br /> e finanças
              </div>
              <div className="bg-opacity-70 bg-black p-2 text-xs text-white md:text-base">
                Uma Luz sobre o futuro de sua empresa.
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-full">
            <Image
              className="h-full object-cover"
              src={bannerFour}
              alt="luz sob a empresa"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center md:mr-24 md:justify-end md:text-end">
            <div className="space-y-1">
              <div className="bg-opacity-70 bg-black p-2 font-semibold text-white uppercase md:text-2xl">
                contabilidade gerencial
              </div>
              <div className="bg-opacity-70 bg-black p-2 text-[10px] text-white md:text-end md:text-base">
                Proximidade e atenção, entender desafios e oferecer soluções.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
