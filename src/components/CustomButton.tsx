import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function CustomButton({ className, ...rest }: ButtonProps) {
    return (
        <button
            className={`${className}
            h-fit whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none lg:px-6 lg:py-3 lg:text-base`}
            {...rest}
        />
    )
}