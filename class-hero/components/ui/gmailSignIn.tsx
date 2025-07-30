import Image from "next/image"
import { signIn } from "@/auth"


export default function GmailSignIn() {
    return (
        <form action={async () => {
            'use server'
            await signIn("google")
        }}>
            <button className="text-[10px] flex gap-2 flex-col items-center">
                <Image src={'/gmail-icon.webp'} alt={'Gmail Icon'} width={40} height={40} className="w-[50%]" />
                Gmail
            </button>
        </form>
    )
}