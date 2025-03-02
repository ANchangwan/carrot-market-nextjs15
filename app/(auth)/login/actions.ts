"use server";
import {z} from "zod";
import {PASSWORD_MIN_LENGTH} from "@/lib/constants";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import getSession from "@/lib/session";
import {redirect} from "next/navigation";

const checkEmailExists = async (email: string) => {
    const user = await db.user.findUnique({
        where:{
            email,
        },
        select:{
            id:true
        }
    })
    return Boolean(user);
}


const formSchema = z.object({
    email:z.string().email().toLowerCase().refine(checkEmailExists,{message:"존재하지 않는 이메일입니다!"}),
    password:z.string({
        required_error:"password를 입력해주세요"
    })
        .min(PASSWORD_MIN_LENGTH)
        // .regex(
        //     PASSWORD_REGEX,
        //     PASSWORD_REGEX_ERROR
        // ),
})

export async function login(prevState:any, formData:FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    const result = await formSchema.spa(data);

    if(!result.success){
        return result.error.flatten();
    }else {
        const user = await db.user.findUnique({
            where:{
                email:result.data.email,
            },
            select:{
                id:true,
                password:true
            }
        });
        const ok = await bcrypt.compare(result.data.password, user!.password ?? "");
        if(ok){
            const session = await getSession();
            session.id = user!.id;
            await session.save();
            redirect("/profile");
        }else{
            return {
                fieldErrors:{
                    password:["잘못된 비밀번호입니다."],
                    email:[]
                }
            }
        }


    }
    return {
        errors:["잘못된 비밀번호입니다.","비밀번호가 너무 짧습니다.!"]
    }
}