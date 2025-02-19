import {NextRequest} from "next/server";
import {notFound} from "next/navigation";
import {loginSession} from "@/lib/loginSession";
import {FetchAccessToken, getEmail, getUserProfile, isNewUser, isUser} from "@/app/(auth)/github/action";

export async function GET(request:NextRequest){
    const code = request.nextUrl.searchParams.get("code");
    if(!code) return notFound();
    const accessTokenParams = new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID!,
        client_secret: process.env.GITHUB_CLIENT_SECRET!,
        code,
    }).toString();

    const accessTokenURL = `https://github.com/login/oauth/access_token?${accessTokenParams}`;


    const {error, access_token} = await FetchAccessToken(accessTokenURL);
    if(error){
        return new Response(null,{
            status: 400,
        });
    }

    const {id, avatar_url, login} = await getUserProfile(access_token);

    const user = await isUser(id);
    if(user) await loginSession(user.id);

    const {email} = await getEmail(access_token);
    const newUser = await isNewUser(login,id,avatar_url,email);
    await loginSession(newUser.id)
}