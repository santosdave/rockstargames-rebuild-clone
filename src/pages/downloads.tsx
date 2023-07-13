import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion"
import MainLayout from '@/components/layout/MainLayout'

type Props = {}

export default function downloads({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="  dark:text-gray-400 scrollbar-hide max-h-screen max-w-screen overflow-auto"
        >
            <Head>
                <title>Dave&apos;s Rockstar Games Rebuild | Downloads </title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className=''>
                <MainLayout title='Downloads'>

                </MainLayout>
            </main>
        </motion.div>
    )
}