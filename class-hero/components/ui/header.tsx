import { barrio } from './fonts'
import Navigation from './navigation'
import Link from 'next/link'


export default function Header() {
    return (
        <header className='row-start-1 row-end-2 w-full h-full flex justify-between items-center z-1'>
            <h1 className={`${barrio.className} text-2xl w-2/5`}><Link href="/">Class Hero</Link></h1>
            <Navigation />
        </header>
    )
}