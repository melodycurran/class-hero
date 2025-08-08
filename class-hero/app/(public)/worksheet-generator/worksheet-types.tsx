import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { SpellCheck, ListEnd, ALargeSmall, BookOpenCheck, Plus, Minus, Asterisk } from 'lucide-react';


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
                <div className="w-1/4 h-45 flex flex-col items-center justify-center font-sans text-sm" id="type">
                    <div className="w-35 flex items-center justify-start"><ListEnd /><h3 className="text-type" onClick={() => handleAddParams('matching-list')}> Matching List</h3></div>
                    <div className="w-35 flex items-center justify-start"><SpellCheck /><h3 className="text-type" onClick={() => handleAddParams('spelling-test')}> Spelling Test</h3></div>
                    <div className="w-35 flex items-center justify-start"><ALargeSmall /><h3 className="text-type" onClick={() => handleAddParams('word-tracer')}>Word Tracer</h3></div>
                </div>
            )
        case 'science':
            return (
                <div className="w-1/4 h-45 flex flex-col items-center justify-center font-sans text-sm" id="type">
                    <div className="w-35 flex items-center justify-start"><BookOpenCheck /><h3 className="text-type" onClick={() => handleAddParams('multiple-choice')}>Multiple Choice</h3></div>
                </div>
            )
        case 'mathematics':
            return (
                <div className="w-1/3 h-45 flex flex-col items-center justify-center font-sans text-sm" id="type">
                    <div className="w-50 flex items-center justify-start"><Plus /><h3 className="text-type" onClick={() => handleAddParams('addition')}>Addition Worksheet</h3></div>
                    <div className="w-50 flex items-center justify-start"><Minus /><h3 className="text-type" onClick={() => handleAddParams('subtraction')}>Subtraction Worksheet</h3></div>
                    <div className="w-50 flex items-center justify-start"><Asterisk /><h3 className="text-type" onClick={() => handleAddParams('multiplication')}>Multiplication Worksheet</h3></div >
                </div>
            )
        case 'filipino':
            return (
                <div className="w-1/4 h-45 flex flex-col items-center justify-center font-sans text-sm" id="type">
                    <div className="w-35 flex items-center justify-start"><BookOpenCheck /><h3 className="text-type" onClick={() => handleAddParams('multiple-choice')}>Multiple Choice</h3></div>
                </div>
            )
    }

}