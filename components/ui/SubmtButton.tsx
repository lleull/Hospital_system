import React from 'react'
import { Button } from './button'
import { Divide } from 'lucide-react'
import Image from 'next/image'
import spinner from "assets/icons/loader.svg"
interface ButtonProps {
    isLoading: boolean,
    className?: string,
    children?: React.ReactNode


}
const SubmtButton = ({ isLoading, className, children }: ButtonProps) => {
    return (
        <Button type='submit' disabled={isLoading} className={className ?? "shad-primary-btn w-full"}>
            {isLoading ?
                <div className='flex items-center gap-4'>
                    <Image
                        src={spinner}
                        alt='spinner'
                        width={24}
                        height={24}
                        className='animate-spin'
                    />
                    Loading...
                </div> : children}

        </Button>

    )
}

export default SubmtButton