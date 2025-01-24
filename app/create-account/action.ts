"use server";
import {z} from "zod";

// 데이터 조건 설명
const formSchema = z.object({
    username:z.string().min(3).max(10),
    email:z.string().email(),
    password:z.string().min(10),
    confirm_password:z.string().min(10),
})


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