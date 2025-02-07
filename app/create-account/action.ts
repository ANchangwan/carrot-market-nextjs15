"use server";
import {z} from "zod";
import {PASSWORD_MIN_LENGTH} from "@/lib/constants";
import db from "@/lib/db";
import bcrypt from "bcrypt";
import {redirect} from "next/navigation";
import getSession from "@/lib/session";





const confirmPasswordfn = ({password,confirm_password}: {password: string, confirm_password: string}) =>  password === confirm_password ;

// 데이터 조건 설명
const formSchema = z.object({
    username:z.string().toLowerCase(),
    email:z.string().email().toLowerCase(),
    password:z.string().min(PASSWORD_MIN_LENGTH),
    confirm_password:z.string().min(PASSWORD_MIN_LENGTH),
})
    .superRefine(async ({username},ctx) =>{
        const user = await db.user.findUnique({
            where:{
                username
            },
            select:{
                id:true
            }
        });
        if(user){
            ctx.addIssue({
                code:"custom",
                message:"이미 존재하는 username입니다.",
                path:["username"],
                fatal:true,
            });
            return z.NEVER;
        }
    })
    .superRefine(async ({email},ctx) =>{
        const user = await db.user.findUnique({
            where:{
                email
            },
            select:{
                id:true
            }
        })
        if(user){
            ctx.addIssue({
                code:"custom",
                message:"이미 존재하는 이메일입니다.",
                path:["email"],
                fatal:true,
            })
            return z.NEVER;
        }

    })
    .refine(confirmPasswordfn,{
    message: "Password is required",
    path:['confirm_password'],
});


export async function createAccount(prevState: any, formData:FormData){
    const data ={
        username:formData.get("username"),
        email:formData.get("email"),
        password:formData.get("password"),
        confirm_password:formData.get("confirm_password")
    };
    // parse 데이터유효성 검사가 실패하면 에러를 throw
    // safeParse 에러를 안던지고 유효값의 결과를 return해줌
   const result = await formSchema.safeParseAsync(data);
   if(!result.success){
       return result.error.flatten()
   }else{
       const hashedPassword = await bcrypt.hash(result.data.password, 12);
       const user = await db.user.create({
           data:{
               username:result.data.username,
               email:result.data.email,
               password:hashedPassword
           },
           select:{
               id:true
           }
       })
       const session = await getSession();

       session.id = user.id;
       await session.save();

       redirect("/profile");

   }

}