import { usePathname, useSearchParams, useRouter } from "next/navigation"

export default function WorksheetType({ type }: { type: string }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function handleAddParams(type: string) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('type', type)
        replace(`${pathname}?${params.toString()}`)
    }
    switch (type) {
        case 'reading':
            return (
                <>
                    <h3 onClick={() => handleAddParams('matching-list')}>Matching List</h3>
                    <h3 onClick={() => handleAddParams('spelling-test')}>Spelling Test</h3>
                    <h3 onClick={() => handleAddParams('word-tracer')}>Word Tracer</h3>
                </>
            )
        case 'science':
            return (
                <>
                    <h3 onClick={() => handleAddParams('multiple-choice')}>Multiple Choice</h3>
                </>
            )
        case 'mathematics':
            return (
                <>
                    <h3 onClick={() => handleAddParams('addition')}>Addition Worksheet</h3>
                    <h3 onClick={() => handleAddParams('subtraction')}>Subtraction Worksheet</h3>
                    <h3 onClick={() => handleAddParams('multiplication')}>Multiplication Worksheet</h3>
                </>
            )
        case 'filipino':
            return (
                <>
                    <h3 onClick={() => handleAddParams('multiple-choice')}>Multiple Choice</h3>
                </>
            )
    }

}