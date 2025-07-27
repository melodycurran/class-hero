import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { data } = await request.json()
        console.log(data)
        return NextResponse.json({ message: 'Data received' }, { status: 200 })
    } catch (error) {
        console.error("Error", error)
        return NextResponse.json({ message: 'Server Error' })
    }
} 