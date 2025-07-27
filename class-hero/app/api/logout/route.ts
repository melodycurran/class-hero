import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        return NextResponse.json({ message: 'Log out successful' }, { status: 200 })
    } catch (error) {
        console.error("Error", error)
        return NextResponse.json({ message: 'Server Error' })
    }
} 