"use client";
import Input from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import {useActionState} from "react";
import {createAccount} from "@/app/(auth)/create-account/action";
import {PASSWORD_MIN_LENGTH} from "@/lib/constants";


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
            <Input
                type="text"
                name="username"
                placeholder="이름을 입력해주세요..."
                required
                errors={state?.fieldErrors.username}
                minLength={PASSWORD_MIN_LENGTH}
                maxLength={10}
             />
            <Input
                type="email"
                name="email"
                placeholder="이메일"
                required
                errors={state?.fieldErrors.email}
            />
            <Input
                type="password"
                name="password"
                placeholder="password"
                required
                errors={state?.fieldErrors.password}
                minLength={PASSWORD_MIN_LENGTH}
                maxLength={10}
            />
            <Input
                type="password"
                name="confirm_password"
                placeholder="confirm Password"
                required
                errors={state?.fieldErrors.confirm_password}
                minLength={PASSWORD_MIN_LENGTH}
            />
            <Button
                text={"create account"}
            />
        </form>
        <SocialLogin/>
    </div>
}