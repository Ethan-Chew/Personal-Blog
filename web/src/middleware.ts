import { NextResponse } from 'next/server'
import type { NextRequest } from "next/server";
 
// Verify if the user is an admin before allowing access
export async function middleware(req: NextRequest) {
    const token = req.cookies.get("jwt")?.value || "";

    const authorisationReq = await fetch("http://localhost:8080/v1/auth", {
        credentials: "include",
        headers: {
            "Cookie": `jwt=${token}`
        }
    })
    if (authorisationReq.status !== 200) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    return NextResponse.next()
}
 
export const config = {
    matcher: ['/admin/:path*', '/admin'],
}