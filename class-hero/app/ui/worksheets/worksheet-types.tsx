import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { Suspense } from "react"

export default function WorksheetType({ type }: { type: string }) {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    function handleAddParams(type: string) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('type', type)
        replace(`${pathname}?${params.toString()}`)
    }

    function Fallback() {
        return <div>Loading types...</div>
    }


    switch (type) {
        case 'reading':
            return (
                <>
                    <Suspense fallback={<Fallback />}>
                        <h3 onClick={() => handleAddParams('matching-list')}>Matching List</h3>
                        <h3 onClick={() => handleAddParams('spelling-test')}>Spelling Test</h3>
                        <h3 onClick={() => handleAddParams('word-tracer')}>Word Tracer</h3>
                    </Suspense>
                </>
            )
        case 'science':
            return (
                <>
                    <Suspense fallback={<Fallback />}>
                        <h3 onClick={() => handleAddParams('multiple-choice')}>Multiple Choice</h3>
                    </Suspense>
                </>
            )
        case 'mathematics':
            return (
                <>
                    <Suspense fallback={<Fallback />}>
                        <h3 onClick={() => handleAddParams('addition')}>Addition Worksheet</h3>
                        <h3 onClick={() => handleAddParams('subtraction')}>Subtraction Worksheet</h3>
                        <h3 onClick={() => handleAddParams('multiplication')}>Multiplication Worksheet</h3>
                    </Suspense>
                </>
            )
        case 'filipino':
            return (
                <>
                    <Suspense fallback={<Fallback />}>
                        <h3 onClick={() => handleAddParams('multiple-choice')}>Multiple Choice</h3>
                    </Suspense>
                </>
            )

    }


}