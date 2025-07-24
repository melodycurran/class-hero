'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { GeneratorMenu } from "../../services/Navigations"

export default function Categories() {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const params = new URLSearchParams(searchParams)
    const subjectParams = params.get('subject')

    function handleSubjectNav(subject: string) {
        params.set('subject', subject)
        const splitParams = params.toString().split("&")

        replace(`${pathname}?${splitParams[0]}`)
    }

    return (
        <ul className="text-xs flex gap-3 justify-items-start w-2/5">
            {GeneratorMenu.map((menu, index) => (
                <li onClick={() => handleSubjectNav(menu.name.toLowerCase())} key={index} className={`w-full hover:bg-gray-300 text-center font-sans leading-5 ${menu.name.toLowerCase() === subjectParams && 'underline underline-offset-8 decoration-wavy decoration-red-800 decoration-(length:--decoration-length)'}`}>{menu.name}</li>
            ))}
        </ul>
    )
}