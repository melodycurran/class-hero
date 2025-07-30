import { signIn } from "@/auth";
import { FacebookIcon } from "lucide-react";
import Image from "next/image";

export default function FacebookSignIn() {
    return (
        <form action={async () => {
            'use server'
            await signIn("facebook")
        }}>
            <button className="text-[10px] flex gap-1 flex-col items-center">
                <FacebookIcon className="text-(--chart-3) w-[50%]" />
                Facebook
            </button>
        </form>
    )
}