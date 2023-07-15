import { VIDEO_ITEM } from '@/utils/constants'
import React from 'react'
import MainContainer from '../layout/MainContainer'
import Newswire from '../ui/Newswire'

type Props = {}

export default function VideosComponent({ }: Props) {
    return (
        <div>
            <div className="relative -mt-[4.25rem] pt-[4.25rem] ">
                <div
                    className='absolute inset-0 z-[-50] bg-cover bg-top bg-no-repeat transition-[background] duration-500 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xl after:[background:linear-gradient(0deg,rgb(255,255,255)_5%,rgba(0,0,0,0)_60%)_rgba(0,0,0,0.5)]'
                    style={{ backgroundImage: `url(${VIDEO_ITEM.pic})` }}
                />
                <img
                    className="relative  h-96 md:h-screen xl:h-[500px] w-full object-top sm:object-top object-cover "
                    src={`${VIDEO_ITEM.pic}`}
                    alt=""
                />
                <img
                    className="border-8 rounded-lg shadow-md absolute z-20 hidden sm:inline-flex -bottom-8 left-12 h-20 md:h-36 xl:h-48 w-[150px] object-center object-cover origin-center scale-[1.01] pointer-events-none transition-transform duration-500 will-change-transform hover:scale-110"
                    src={`${VIDEO_ITEM.pic}`}
                    alt=""
                />
            </div>
            <MainContainer className='py-4 mt-8 md:mt-12 px-5'>
                <div className=" flex flex-col lg:flex-row justify-between items-center px-1 gap-y-3 lg:gap-y-0">
                    <div className='flex flex-col items-start justify-center gap-y-2'>
                        <h2 className="font-bold text-base">
                            Videos | {VIDEO_ITEM.title}
                        </h2>
                        <span className="text-xl md:text-2xl font-bold mb-4">
                            {VIDEO_ITEM.description}
                        </span>
                        <span className="text-sm">
                            {VIDEO_ITEM.release_date}
                        </span>
                    </div>
                    <div className='relative'>
                        <button
                            style={{ backgroundImage: `${VIDEO_ITEM.pic}` }}
                            className="border border-gray-300 dark:border-white/10  
                                hover:bg-[#cc9b13]  px-4 py-2 rounded-full font-medium active:scale-90
                                ">
                            <span className='text-black  dark:text-white'>
                                WATCH NOW
                            </span>
                        </button>
                    </div>
                </div>
                <Newswire />
            </MainContainer>
        </div>
    )
}