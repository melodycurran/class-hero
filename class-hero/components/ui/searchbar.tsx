'use client'
import { Search } from "lucide-react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
    const path = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams)
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${path}?${params.toString()}`)

    }, 500)


    return (
        <div className="w-1/2 flex justify-center my-[2rem] mx-auto relative">
            <input placeholder="Type here to search library..." type="text" name="query" className="w-full bg-(--ring) rounded-(--radius) pl-[1.5rem] font-sans text-[10px] leading-6 focus:bg-white" onChange={(e) => handleSearch(e.target.value)} />
            <Search className="absolute left-0 p-[3px]" />
        </div>

    )
}