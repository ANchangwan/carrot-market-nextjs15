
 export function GET(){
    const baseUrl = "https://github.com/login/oauth/authorize";
    const params = {
        client_id: process.env.GITHUB_CLIENT_ID,
        scope:"read:user,user:email",
        allow_signup:true,
    }
    const formatterParams = new URLSearchParams(params).toString();
    const finalUrl = `${baseUrl}?${formatterParams}`;

    return Response.redirect(finalUrl);

 }