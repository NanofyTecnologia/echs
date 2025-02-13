'use client'

import Container from '@/components/Container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import slideImage1 from '@/assets/customers/bioart_client.png'
import slideImage3 from '@/assets/customers/kopp_client.png'
import slideImage4 from '@/assets/customers/md_client.jpg'
import slideImage5 from '@/assets/customers/multipack_client.png'
import slideImage6 from '@/assets/customers/tecnident_client.jpg'
import Image from 'next/image'

export default function Customers() {
  return (
    <section className="my-6 w-full md:my-12" id="clientes">
      <Container>
        <div className="w-full text-center text-lg font-bold md:text-xl">
          Nossos Clientes
        </div>

        <div className=" mt-5">
          <Swiper
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            freeMode={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            autoplay={true}
          >
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <Image
                  src={slideImage1}
                  alt="slide_image"
                  className="h-12 w-24 object-contain md:h-16 md:w-56"
                  placeholder="empty"
                  loading="lazy"
                  quality={50}
                  fetchPriority="low"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <Image
                  src={slideImage3}
                  alt="slide_image"
                  className="h-12 w-24 object-contain md:h-16 md:w-56"
                  placeholder="empty"
                  loading="lazy"
                  quality={50}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <Image
                  src={slideImage4}
                  alt="slide_image"
                  className="h-12 w-24 object-contain md:h-16 md:w-56"
                  placeholder="empty"
                  loading="lazy"
                  quality={50}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <Image
                  src={slideImage5}
                  alt="slide_image"
                  className="h-12 w-24 object-contain md:h-16 md:w-56"
                  placeholder="empty"
                  loading="lazy"
                  quality={50}
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-center">
                <Image
                  src={slideImage6}
                  alt="slide_image"
                  className="h-12 w-24 object-contain md:h-16 md:w-56"
                  placeholder="empty"
                  loading="lazy"
                  quality={50}
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </section>
  )
}
