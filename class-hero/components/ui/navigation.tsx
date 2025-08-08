'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavMenu } from '@/app/services/Navigations'
import { ShoppingCartIcon } from 'lucide-react'
import { useState } from 'react'
import CartPopOver from "@/components/ui/cartPopOver"
import { Button } from './button'

export default function Navigation() {
    const path = usePathname()
    const [clicked, setClicked] = useState(false)

    return (
        <nav className='w-3/5 justify-items-end'>
            <ul className='w-full flex gap-1'>
                {NavMenu.map((nav, index) => (
                    <li id="navlink" key={index} className={`w-1/4 hover:bg-gray-300 rounded-(--radius) text-center ${nav.path === path && 'bg-gray-300'}`}><Link href={nav.path === '/worksheet-generator' ? nav.path + '?subject=reading' : nav.path} className='text-xs'>{nav.name}</Link></li>
                ))}
                <li onClick={() => setClicked((prevState) => !prevState)} className='relative'>

                    <ShoppingCartIcon className={`hover:bg-gray-300 p-1 m-[2px] ${path === '/cart' && 'bg-gray-300'}`} />
                    {clicked &&
                        <div className='absolute bg-(--ring) w-[200px] h-[300px] right-0 p-3 z-1 rounded-(--radius) font-sans text-xs '>
                            <h4 className='font-bold'>Cart Items</h4>
                            <CartPopOver />
                            <Button>Checkout</Button>
                        </div>}
                </li>
            </ul>
        </nav>
    )
}