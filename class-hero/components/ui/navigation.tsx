'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavMenu } from '@/app/services/Navigations'

export default function Navigation() {
    const path = usePathname()

    return (
        <nav className='w-3/5 justify-items-end'>
            <ul className='w-full flex gap-1'>
                {NavMenu.map((nav, index) => (
                    <li id="navlink" key={index} className={`w-full hover:bg-gray-300 text-center ${nav.path === path && 'bg-gray-300'}`}><Link href={nav.path === '/worksheet-generator' ? nav.path + '?subject=reading' : nav.path} className='text-xs'>{nav.name}</Link></li>
                ))}
            </ul>
        </nav>
    )
}