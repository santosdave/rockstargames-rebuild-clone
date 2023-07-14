import React, { useState, Dispatch, SetStateAction } from 'react'
import { CAROUSEL_ITEMS } from '@/utils/constants'
import { Autoplay, FreeMode, Mousewheel, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import MainContainer from '../layout/MainContainer'


type Props = {}



export default function HeroSection({ }: Props) {
  const [background, setBackground] = useState(0)
  return (
    <div className='relative'>
      <div
        className='absolute inset-0 z-[-50] bg-cover bg-top bg-no-repeat transition-[background] duration-500 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xl after:[background:linear-gradient(0deg,rgb(255,255,255)_5%,rgba(0,0,0,0)_60%)_rgba(0,0,0,0.5)]'
        style={{ backgroundImage: `${CAROUSEL_ITEMS[background].url}` }}
      />
      <div className='relative z-10 -mt-[5.25rem] pt-[4.25rem]'>
        <MainContainer>
          <Carousel changeBackground={setBackground} />
        </MainContainer>
      </div>
    </div>
  )
}


function Carousel({ changeBackground }: { changeBackground: Dispatch<SetStateAction<number>> }) {
  const router = useRouter();
  const handleItemClick = (itemName: any) => {
  }
  return (
    <div className='pt-2'>
      <Swiper
        id="carousel"
        modules={[Navigation, Autoplay, Mousewheel]}
        pagination={false}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        mousewheel={{ invert: false, forceToAxis: true }}
        onSlideChange={(e) => changeBackground(e.realIndex)}
        navigation
        breakpoints={{
          0: { slidesPerView: 'auto', slidesPerGroup: 1, centeredSlides: true, spaceBetween: 8 },
          600: { slidesPerView: 1, slidesPerGroup: 1, centeredSlides: false, spaceBetween: 15 },
          768: { slidesPerView: 1, slidesPerGroup: 1, centeredSlides: false, spaceBetween: 15 },
          1024: { slidesPerView: 1, slidesPerGroup: 1, centeredSlides: false, spaceBetween: 15 },
          2256: { slidesPerView: 1, slidesPerGroup: 1, centeredSlides: false, spaceBetween: 15 },
        }}

      >
        {CAROUSEL_ITEMS.map((item: any, key: any) => (
          <SwiperSlide key={key}>
            <div onClick={() => handleItemClick(item.game_title)} className='group mb-4 relative flex aspect-square  w-full cursor-pointer overflow-hidden rounded-2xl bg-white/10' style={{ height: '500px' }}>
              <img
                src={`${item.url}`}
                alt=''
                className='pointer-events-none absolute h-full w-full origin-center scale-[1.01] select-none object-cover  object-center transition-transform duration-500 will-change-transform group-hover:scale-100'
              />

              <div className=' relative mt-auto flex h-1/2 w-full select-none bg-gradient-to-t from-black/80 p-4  text-white'>
                <div className='relative mt-auto '>
                  <h4 className='font-semibold text-sm'>
                    {item.game_title}
                  </h4>
                  <span className='block text-lg lg:text-2xl font-bold'>
                    {item.title}
                  </span>
                  <button
                    style={{ backgroundImage: `${item.url}` }}
                    className="border border-white/10 dark:border-white/10  mt-5 
                      hover:bg-[#cc9b13]  px-4 py-2 rounded-full font-medium active:scale-90
                     bg-cover bg-top bg-no-repeat transition-[background] duration-500 after:absolute after:inset-0 
                     after:-z-10 after:backdrop-blur-xl after:[background:linear-gradient(0deg,rgb(255,255,255)_5%,rgba(0,0,0,0)_60%)_rgba(0,0,0,0.5)]">
                    <span className='text-white  dark:text-white'>
                      WATCH NOW
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}