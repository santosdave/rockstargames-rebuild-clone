import React from 'react'
import Header from './Header';
import Footer from './Footer';

type Props = {}

interface MainLayoutProps {
    children: React.ReactNode;
    title?: string
}

export default function MainLayout({ children ,title}: MainLayoutProps) {
    return (
        <>
            <Header title={title} />
            {children}
            <Footer/>
        </>
    )
}