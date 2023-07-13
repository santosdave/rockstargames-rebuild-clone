import React from 'react'
import { FaFacebook, FaYoutube, FaTwitch, FaTwitter, FaInstagram} from 'react-icons/fa';

type Props = {}

export default function Footer({ }: Props) {
    return (
        <footer className=" px-5 w-full h-60vh bg-gray-300 dark:bg-black text-black dark:text-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-2 py-6 gap-y-4 md:gap-y-0  text-lg">
                <div className="flex font-bold">
                    <div className="mx-3">Contact</div>
                    <div className="mx-3">Careers</div>
                    <div className="mx-3">Subscribe</div>
                </div>
                <div className="mx-4">English</div>
            </div>
            <div className="flex flex-col md:flex-row justify-between px-2 py-2 gap-y-4 md:gap-y-0 items-start md:items-center" >
                <div className="flex flex-col md:flex-row  items-start md:items-center  text-sm ">
                    <div className="mx-2">Corporate</div>
                    <div className="mx-2">Privacy</div>
                    <div className="mx-2">Cookie Settings</div>
                    <div className="mx-2">Cookie Policy</div>
                    <div className="mx-2">Legal</div>
                    <div className="mx-2">Do Not Sell My Personal Information</div>
                </div>
                <div className="flex">
                    <div className="mx-3 text-3xl"><FaTwitch /></div>
                    <div className="mx-3 text-3xl"><FaInstagram /></div>
                    <div className="mx-3 text-3xl"><FaTwitter /></div>
                    <div className="mx-3 text-3xl"><FaYoutube /></div>
                    <div className="mx-3 text-3xl"><FaFacebook /></div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center font-semibold py-16" >
                <div>Rockstar Games</div>
                <div className="flex">
                    <div className="mx-2">New York</div>
                    <div className="mx-2">London</div>
                    <div className="mx-2">Paris</div>
                    <div className="mx-2">Bogotá</div>
                    <div className="mx-2">Kenya</div>
                </div>
                <div>MCMXCVIII</div>
            </div>
        </footer>
    )
}