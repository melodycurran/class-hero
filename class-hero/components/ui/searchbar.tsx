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
        <div className="w-full md:w-4/6 lg:w-1/2 flex justify-center my-[2rem] mx-auto relative">
            <input placeholder="Type here to search library..." type="text" name="query" className="w-full bg-(--ring) rounded-(--radius) pl-[2rem] font-sans text-sm leading-9 focus:bg-white" onChange={(e) => handleSearch(e.target.value)} />
            <Search className="absolute top-1 left-1 p-[2px]" />
        </div>

    )
}