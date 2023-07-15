import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { GiHamburgerMenu } from "react-icons/gi";
import { Bars3Icon, MagnifyingGlassIcon, MoonIcon, ShoppingCartIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/outline'
import { AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { RiUserLine } from 'react-icons/ri';
import { BsFillSaveFill } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { FaWallet, FaUserFriends } from 'react-icons/fa'
import Logo from "@/assets/logo192.png"
import Image from 'next/image'
import Link from 'next/link'
import MainContainer from './MainContainer'



type Props = {
    title?: string;
}

export default function Header({ title }: Props) {
    const ref = useRef(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [isSticked, setIsSticked] = useState(false)
    const [nav, setNav] = useState(false)
    const { resolvedTheme, setTheme } = useTheme()

    const handleNavMenu = () => {
        setNav(!nav)
    }

    const handleCartSidebar = () => {

    }

    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(([e]) => setIsSticked(e.intersectionRatio < 1), {
                threshold: [1],
            })
        if (cachedRef) observer.observe(cachedRef)
        return () => {
            if (cachedRef) observer.unobserve(cachedRef)
        }
    }, [])

    return (
        <header
            ref={ref}
            className={
                `${isSticked ? 'border-b dark:border-slate-600 bg-white dark:bg-black text-black dark:text-black' :
                    'text-black  bg-transparent'} sticky -top-[0.1px] z-50 transition-colors duration-150`}
        >
            <MainContainer>
                <div className='flex h-[4.25rem] w-full  justify-between items-center gap-x-2 py-2.5 px-6'>
                    <div className='flex items-center text-black dark:text-white gap-x-5'>
                        {resolvedTheme === 'dark' ? (
                            <GiHamburgerMenu
                                onClick={handleNavMenu}
                                fontSize={30} color='white'
                                className='cursor-pointer'
                            />
                        ) : (
                            <GiHamburgerMenu
                                onClick={handleNavMenu}
                                fontSize={30}
                                color='black'
                                className='cursor-pointer'
                            />
                        )
                        }
                        <h2 className='font-bold text-xl hidden md:flex'>{title}</h2>

                    </div>


                    <div className='relative w-[45px]'>
                        <Link href={"/"} className="my-2 block text-xl font-semibold">
                            {resolvedTheme === 'dark' ? (
                                <Image
                                    src={isSticked ? Logo : Logo}
                                    loading="eager"
                                    className="absolute inset-0 my-auto object-contain"
                                    alt="logo"
                                />

                            ) : (
                                <Image
                                    src={isSticked ? Logo : Logo}
                                    loading="eager"
                                    className="absolute inset-0 my-auto object-contain"
                                    alt="logo"
                                />
                            )}
                        </Link>
                    </div>
                    <div className='flex h-full  items-center gap-x-5'>
                        {resolvedTheme === 'dark' ? (
                            < RiUserLine fontSize={30} color='white' />
                        ) : (
                            < RiUserLine fontSize={30} color='black' />
                        )
                        }

                        {resolvedTheme === 'dark' ? (
                            <MoonIcon
                                onClick={() => setTheme('light')}
                                className="h-7 w-7 text-black dark:text-white  cursor-pointer " />
                        ) : (
                            <SunIcon
                                onClick={() => setTheme('dark')}
                                className="h-8 w-8 text-black dark:text-white cursor-pointer" />
                        )
                        }
                    </div>


                </div>

                {/* Sidebar */}
                {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0 duration-300'></div> : ''}

                {/* Sidedrawer Menu */}
                <div className={`${nav ? 'left-0' : '-left-full'}  fixed  top-16 w-[350px] h-screen bg-white dark:bg-slate-600 z-10  duration-700 `}>
                    <AiOutlineClose onClick={handleNavMenu} size={25} className='text-black  dark:text-gray-300 absolute right-4 top-7 cursor-pointer' />
                    <h2 className='text-black  dark:text-gray-400  font-bold text-2xl p-4'>
                        <div className='flex items-center gap-x-2'>
                            <Image src={Logo} loading="lazy" className="w-[45px]" alt='' />
                            <span className=' font-bold'> Rockstar Games</span>
                        </div>
                    </h2>
                    <nav>
                        <div className='relative px-3 hidden h-full flex-1 sm:block'>
                            <MagnifyingGlassIcon className={`absolute inset-y-0 left-6 z-10 my-auto h-5 w-5 stroke-2 `} />
                            <input
                                type='text'
                                name='Search'
                                placeholder='Search Rockstar Games'
                                className={
                                    `p-4 border-gray-300 dark:border-transparent placeholder:text-slate-600 focus:border-transparent h-full w-full rounded-xl border bg-white/10 pl-10 hover:bg-white/20 focus:ring-0`}
                            />
                        </div>
                        <ul className='text-black  dark:text-gray-300  p-4 '>
                            <li className=' '>
                                <Link href={'/newswire'} className='text-xl py-4 flex items-center'>
                                    <TbTruckDelivery size={25} className='mr-4' /> Newswire
                                </Link>
                            </li>
                            <li className=''>
                                <Link href={'/games'} className='text-xl py-4 flex items-center'>
                                    <MdFavorite size={25} className='mr-4' /> Games
                                </Link>
                            </li>
                            <li className=''>
                                <Link href={'/videos'} className='text-xl py-4 flex items-center'>
                                    <MdHelp size={25} className='mr-4' /> Videos
                                </Link>
                            </li>
                            <li className=''>
                                <Link href={'/downloads'} className='text-xl py-4 flex items-center'>
                                    <AiFillTag size={25} className='mr-4' /> Downloads
                                </Link>
                            </li>
                            {/* <li className=''>
                                <Link href={'/support'} className='text-xl py-4 flex items-center'>
                                    <BsFillSaveFill size={25} className='mr-4' /> Support
                                </Link>
                            </li>
                            <li className=''>
                                <Link href={'/socialclub'} className='text-xl py-4 flex items-center'>
                                    <BsFillSaveFill size={25} className='mr-4' /> Social Club
                                </Link>
                            </li>
                            <li className=''>
                                <Link href={'/launcher'} className='text-xl py-4 flex items-center'>
                                    <FaUserFriends size={25} className='mr-4' /> Launcher
                                </Link>
                            </li>
                            <li className=''>
                                <Link href={'/store'} className='text-xl py-4 flex items-center'>
                                    <FaWallet size={25} className='mr-4' /> Store
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </MainContainer>
        </header>
    )
}