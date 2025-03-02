import {NextRequest, NextResponse} from "next/server";
import getSession from "@/lib/session";

interface Routes {
    [key: string]: boolean;
}

const publickOnlyUrls:Routes = {
    "/":true,
    "/login":true,
    "/sms":true,
    "/create-account":true,
    "/github/start":true,
    "/github/complete":true,
};


export default async function middleware(req:NextRequest) {
    const session = await getSession();
    const exists = publickOnlyUrls[req.nextUrl.pathname];
    if(!session.id) {
        if(!exists){
            return NextResponse.redirect(new URL("/", req.url));
        }
    } else {
        if(exists){
            return NextResponse.redirect(new URL("/profile", req.url));
        }
    }

}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};