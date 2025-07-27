import { Suspense } from "react"
import WorksheetSkeleton from "@/components/ui/worksheetSkeleton"
import SearchBar from "@/components/ui/searchbar"
import LibrarySection from "@/components/ui/librarySections"

export default async function WorksheetLibrary(props: {
    searchParams?: Promise<{
        query?: string
    }>
}) {
    const searchParams = await props.searchParams
    const query = searchParams?.query || ''

    return (
        <div className="libraryContainer">
            <Suspense fallback={<WorksheetSkeleton />}>
                <SearchBar />
                <LibrarySection term={query} />
            </Suspense >
        </div >
    )
}