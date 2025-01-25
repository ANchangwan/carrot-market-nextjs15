"use server";
import {z} from "zod";
import {PASSWORD_MIN_LENGTH, PASSWORD_REGEX, PASSWORD_REGEX_ERROR} from "@/lib/constants";


const formSchema = z.object({
    email:z.string().email().toLowerCase(),
    password:z.string({
        required_error:"password를 입력해주세요"
    })
        .min(PASSWORD_MIN_LENGTH)
        .regex(
            PASSWORD_REGEX,
            PASSWORD_REGEX_ERROR
        ),
})

export async function login(prevState:any, formData:FormData) {
    const data = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    const result = formSchema.safeParse(data);
    if(!result.success){
        return result.error.flatten();
    }else {
        console.log(result.data);
    }

    return {
        errors:["잘못된 비밀번호입니다.","비밀번호가 너무 짧습니다.!"]
    }
}