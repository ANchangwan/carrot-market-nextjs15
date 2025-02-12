import getSession from "@/lib/session";
import db from "@/lib/db";
import {redirect} from "next/navigation";

async function getUser(){
    const session = await getSession();
    if (session.id) {
        const user = await db.user.findUnique({
            where:{
                id: session.id,
            },
            select:{
                username:true
            }
        })
        return user;
    }
}

const logOut = async () =>{
    "use server";
    const session = await getSession();
    session.destroy();
    redirect("/");
}

export default async function profile() {
    const user = await getUser();
    return <div>
        <h1>Welcome {user?.username}</h1>
        <form action={logOut}>
            <button>log out</button>
        </form>
    </div>
}