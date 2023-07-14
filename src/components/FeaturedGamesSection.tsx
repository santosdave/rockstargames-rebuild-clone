import React from 'react'
import MainContainer from './layout/MainContainer'
import CustomButton from './CustomButton'
import { FEATURED_GAMES } from '@/utils/constants'
import { Autoplay, FreeMode, Mousewheel, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'

type Props = {
    title: string
}

const commonBiggerScreen = {
    centeredSlides: false,
    centeredSlidesBounds: false,
    spaceBetween: 15,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
}

export default function FeaturedGamesSection({ title }: Props) {
    return (
        <>
            <MainContainer className="py-4 md:py-8">
                <div className='flex items-center justify-between'>
                    <span className='font-poppins text-lg font-semibold text-slate-900 dark:text-white md:text-2xl'>
                        {title}
                    </span>
                    <CustomButton>
                        View More
                    </CustomButton>
                </div>
                <div className="-mx-4 mt-3 sm:mx-0">
                    <Swiper
                        modules={[Navigation, Mousewheel]}
                        mousewheel={{ invert: false, forceToAxis: true }}
                        breakpoints={{
                            0: {
                                slidesPerView: 'auto',
                                slidesPerGroup: 1,
                                centeredSlides: true,
                                centeredSlidesBounds: true,
                                spaceBetween: 8,
                                slidesOffsetBefore: 16,
                                slidesOffsetAfter: 16,
                            },
                            600: { slidesPerView: 1, slidesPerGroup: 1, ...commonBiggerScreen },
                            768: { slidesPerView: 2, slidesPerGroup: 2, ...commonBiggerScreen },
                            1024: { slidesPerView: 3, slidesPerGroup: 3, ...commonBiggerScreen },
                            1200: { slidesPerView: 5, slidesPerGroup: 5, ...commonBiggerScreen },
                            1600: { slidesPerView: 6, slidesPerGroup: 6, ...commonBiggerScreen },
                        }}
                        navigation
                        className="collections-slide "

                    >

                        {FEATURED_GAMES?.map((newswireItem: any, key: any) => (
                            <SwiperSlide key={key}>
                                <div key={key}
                                    className=' dark:bg-gray-600 cursor-pointer overflow-hidden rounded-2xl shadow duration-200 will-change-transform hover:-translate-y-1 hover:shadow-md sm:w-full my-4'
                                >
                                    <div className='relative aspect-video'>
                                        <img src={`${newswireItem.pic}`} className="absolute inset-0 h-full w-full object-cover object-top origin-center" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </MainContainer>
        </>
    )
}