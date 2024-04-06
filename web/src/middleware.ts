import { NextResponse } from 'next/server'
import { NextRequest } from "next/server";
 
// Verify if the user is an admin before allowing access
export async function middleware(req: NextRequest) {
    const token = req.cookies.get("jwt")?.value || "";

    const authorisationReq = await fetch("http://localhost:8080/v1/auth", {
        credentials: "include",
        headers: {
            "Cookie": `jwt=${token}`
        }
    })
    const authReqBody = await authorisationReq.json()
    if (authorisationReq.status !== 200 || authReqBody.role !== "Admin") {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    const headers = new Headers(req.headers);
    headers.set('userid', authReqBody.id);

    return NextResponse.next({
        request: {
            headers
        }
    })
}
 
export const config = {
    matcher: ['/admin/:path*', '/admin'],
}