import db from "@/lib/db";

export async function FetchAccessToken(url:string) {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
            }
        });
        const { error, access_token } = await response.json();
        return { error, access_token };
}

export async function getUserProfile(access_token:string) {
    return await (await fetch("https://api.github.com/user", {
        headers: {
            "Authorization": `Bearer ${access_token}`,
        }
    })).json();

}

export async function getEmail(access_token:string) {
    const [email] = await(await fetch("https://api.github.com/user/emails", {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            Accept: "application/json",
        }
    })).json();
    return email;
}

export async function isUser(id:number){
    return db.socialAccount.findUnique({
        where: {
            provider_provider_id:{
                provider:"github",
                provider_id:id.toString()
            }
        },
        select: {
            user:{
                select:{
                    id:true
                }
            }
        }
    });
}

export async function isNewUser(username: string, id: number, avatar: string, email: string) {

    return db.user.create({
        data:{
            username,
            email,
            avatar,
            SocialAccount:{
                create:{
                    provider:"github",
                    provider_id:id.toString()
                }
            }
        },
        select: {
            id: true,
        },
    });
}