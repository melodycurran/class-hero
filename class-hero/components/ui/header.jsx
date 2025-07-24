import { barrio } from './fonts'
import Navigation from './navigation'
import Link from 'next/link'


export default function Header() {
    return (
        <header className='w-full h-full flex justify-between items-center'>
            <h1 className={`${barrio.className} text-2xl w-2/5`}><Link href="/">Class Hero</Link></h1>
            <Navigation />
        </header>
    )
}