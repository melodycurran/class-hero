import Image from "next/image"
import { googleSignIn } from "@/lib/actions"


export default function GmailSignIn() {
    return (
        <form action={googleSignIn}>
            <button className="text-[10px] flex gap-2 flex-col items-center relative hover:cursor-pointer">
                <Image src={'/gmail-icon.webp'} alt={'Gmail Icon'} width={40} height={40} className="w-[50%]" />
                Gmail
            </button>
        </form>
    )
}