"use server";
import {z} from "zod";
import {PASSWORD_MIN_LENGTH} from "@/lib/constants";

const confirmPasswordfn = ({password,confirm_password}: {password: string, confirm_password: string}) =>  password === confirm_password ;

// 데이터 조건 설명
const formSchema = z.object({
    username:z.string(),
    email:z.string().email(),
    password:z.string().min(PASSWORD_MIN_LENGTH),
    confirm_password:z.string().min(PASSWORD_MIN_LENGTH),
}).refine(confirmPasswordfn,{
    message: "Password is required",
    path:['confirm_password'],
});


export async function createAccount(prevState:any, formData:FormData){
    const data ={
        username:formData.get("username"),
        email:formData.get("email"),
        password:formData.get("password"),
        confirm_password:formData.get("confirm_password")
    };
    // parse 데이터유효성 검사가 실패하면 에러를 throw
    // safeParse 에러를 안던지고 유효값의 결과를 return해줌
   const result = formSchema.safeParse(data);
   if(!result.success){
       return result.error.flatten()
   }

}