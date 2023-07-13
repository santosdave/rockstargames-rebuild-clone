import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: React.HTMLAttributes<HTMLDivElement>['className'];
}

export default function MainContainer({ children, className }: Props) {
    return (
        <div className={`${className} mx-auto max-w-8xl px-4 md:px-6 lg:px-8 2xl:px-14`}>
            {children}
        </div>
    )
}