import React from 'react'
import MainContainer from '../layout/MainContainer'
import { FEATURED_GAMES } from '@/utils/constants'

type Props = {}

export default function GamesComponent({ }: Props) {
    return (
        <div>
            <MainContainer className='px-4 py-4'>
                <div className='flex justify-center '>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center gap-x-3 gap-y-4'>
                        {FEATURED_GAMES.map((game: any, key: any) => (
                            <div className='w-full h-full' key={key}>
                                <img
                                    className="relative  xl:h-96 h-screen md:h-[400px] w-full object-center sm:object-top object-cover rounded-xl transition-all "
                                    src={`${game.pic}`}
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </MainContainer>
        </div>
    )
}