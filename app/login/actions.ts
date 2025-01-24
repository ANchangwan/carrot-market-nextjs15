"use server";

export async function handleForm(prevState:any, formData:any) {

    return {
        errors:["잘못된 비밀번호입니다.","비밀번호가 너무 짧습니다.!"]
    }
}