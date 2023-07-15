import React from 'react'
import { DOWNLOAD_ITEM } from '@/utils/constants'
import MainContainer from '../layout/MainContainer'
import Newswire from '../ui/Newswire'
import FeaturedGamesSection from '../FeaturedGamesSection'

type Props = {}

export default function DownloadsComponent({ }: Props) {
    return (
        <div>
            <div className="relative -mt-[4.25rem] pt-[4.25rem] mb-12 ">
                <div
                    className='absolute inset-0 z-[-50] bg-cover bg-top bg-no-repeat transition-[background] duration-500 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xl after:[background:linear-gradient(0deg,rgb(255,255,255)_5%,rgba(0,0,0,0)_60%)_rgba(0,0,0,0.5)]'
                    style={{ backgroundImage: `url(${DOWNLOAD_ITEM.pic})` }}
                />
                <div className='flex flex-col lg:flex-row items-center  w-full justify-between p-2'>
                    <img
                        className="relative  xl:h-96 h-screen md:h-[400px] w-full object-top  object-cover "
                        src={`${DOWNLOAD_ITEM.pic}`}
                        alt=""
                    />
                    <div className='flex flex-col items-start gap-y-4 p-4 text-white '>
                        <h2 className='text-lg font-bold'>
                            Red Dead Redemption 2
                        </h2>
                        <p className='text-base font-semibold'>
                            America, 1899. The end of the Wild West era has begun as lawmen hunt down the last remaining outlaw gangs.
                            Those who will not surrender or succumb are killed.
                        </p>
                        <p className='text-base font-semibold'>
                            After a robbery goes terribly wrong in the western town of Blackwater, Arthur Morgan and the Van der Linde gang are forced to flee.
                            With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal, and fight their way across the rugged heartland of America in order to survive.
                            As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.
                        </p>
                        <div className='relative text-center'>
                            <button
                                style={{ backgroundImage: `${DOWNLOAD_ITEM.pic}` }}
                                className="border border-gray-800 
                                hover:bg-[#cc9b13]  px-4 py-2 rounded-full font-medium active:scale-90
                                ">
                                <span className='text-black  '>
                                    DOWNLOAD NOW
                                </span>
                            </button>
                        </div>

                    </div>
                </div>


            </div>
            <MainContainer className='py-4 mt-8 md:mt-12 px-5'>
                <Newswire />
                <FeaturedGamesSection title="Featured Games" />
            </MainContainer>
        </div>
    )
}