"use client";
import FormInput from "@/components/form-input";
import FormBtn from "@/components/form-btn";
import SocialLogin from "@/components/social-login";
import {useActionState} from "react";
import {createAccount} from "@/app/create-account/action";


export default function CreateAccount() {
    const [state, dispatch] = useActionState(createAccount, null);
    return <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-2xl">안녕하세요!</h1>
            <h2 className="text-xl">아래와 같이 가입해주세요</h2>
        </div>
        <form
            action={dispatch}
            className="flex flex-col gap-3">
            <FormInput
                type="text"
                name="username"
                placeholder="이름을 입력해주세요..."
                required
                errors={state?.fieldErrors.username}
             />
            <FormInput
                type="email"
                name="email"
                placeholder="이메일"
                required
                errors={state?.fieldErrors.email}
            />
            <FormInput
                type="password"
                name="password"
                placeholder="password"
                required
                errors={state?.fieldErrors.password}
            />
            <FormInput
                type="password"
                name="confirm_password"
                placeholder="confirm Password"
                required
                errors={state?.fieldErrors.password}
            />
            <FormBtn
                text={"create account"}
            />
        </form>
        <SocialLogin/>
    </div>
}