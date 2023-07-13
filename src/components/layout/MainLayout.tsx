import React from 'react'
import Header from './Header';

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
        </>
    )
}