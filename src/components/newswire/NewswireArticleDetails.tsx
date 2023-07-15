import React from 'react'
import MainContainer from '../layout/MainContainer'


type Props = {
    collection: any
}

export default function NewswireArticleDetails({ collection }: Props) {

    return (
        <div className="">
            <div className="relative -mt-[4.25rem] pt-[4.25rem] ">
                <div
                    className='absolute inset-0 z-[-50] bg-cover bg-top bg-no-repeat transition-[background] duration-500 after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xl after:[background:linear-gradient(0deg,rgb(255,255,255)_5%,rgba(0,0,0,0)_60%)_rgba(0,0,0,0.5)]'
                    style={{ backgroundImage: `url(${collection.pic})` }}
                />
                <img
                    className="relative  h-64 md:h-[400px] xl:h-[500px] w-full object-top sm:object-top object-cover "
                    src={`${collection.pic}`}
                    alt=""
                />
                <img
                    className="border-8 rounded-lg shadow-md absolute z-20 hidden sm:inline-flex -bottom-8 left-12 h-20 md:h-36 xl:h-48 w-[150px] object-center object-cover origin-center scale-[1.01] pointer-events-none transition-transform duration-500 will-change-transform hover:scale-110"
                    src={`${collection.pic}`}
                    alt=""
                />
            </div>
            <MainContainer className='py-4 mt-8 md:mt-12 px-5'>
                <div className=" flex justify-start px-12">
                    <div className='flex flex-col items-start justify-center gap-y-2'>
                        <h2 className="font-bold text-base">
                            Newswire | {collection.title} | Events
                        </h2>
                        <span className="text-xl md:text-2xl font-bold mb-4">
                            {collection.description}
                        </span>
                        <span className="text-sm">
                            {collection.release_date}
                        </span>
                        <div className="mt-4 flex flex-col gap-y-5">
                            <p className="text-base">
                                This week in GTA Online, there’s money to be made running mercenary and security ops across multiple disciplines — Project Overthrow Missions, LSA Operations, and Security Contracts are all reliable and inflated sources of steady income this week. Meanwhile, the San Andreas Mercenaries Bonuses Event reaches its conclusion, and Air Races are offering bonus pay to all competitors.
                            </p>
                            <span className="text-xl md:text-2xl font-bold mb-4">
                                2X GTA$ and RP on Project Overthrow Missions
                            </span>
                            <p className="text-base">
                                Join forces with ex-con-turned-mercenary Charlie Reed in taking on Merryweather in Project Overthrow Missions and earn double GTA$ and RP, all week long. GTA+ Members, meanwhile, will earn Triple Rewards for their help in taking down Merryweather’s forces in these explosive operations.
                            </p>
                            <div className="w-full">
                                <img
                                    className="relative  h-64 md:h-[300px] xl:h-[400px] w-full object-top sm:object-center object-cover rounded-md "
                                    src={`${collection.pic}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </MainContainer>
        </div>
    )
}