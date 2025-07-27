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
        <div className="w-5/6 flex searchContainer">
            <input placeholder="Type here to search library..." type="text" name="query" className="w-full bg-white rounded-(--radius) relative searchInput font-sans text-[10px] leading-6" onChange={(e) => handleSearch(e.target.value)} />
            <Search className="absolute searchIcon" />
        </div>

    )
}