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
    return await(await fetch("https://api.github.com/user/emails", {
        headers: {
            "Authorization": `Bearer ${access_token}`,
            Accept: "application/json",
        }
    })).json();
}