"use client";
import FormInput from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import {login} from "@/app/login/actions";
import {useActionState} from "react";
import {PASSWORD_MIN_LENGTH} from "@/lib/constants";


export default function LogIn() {
    const [state, dispatch] = useActionState(login, null);

    return <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-2xl">안녕하세요!</h1>
            <h2 className="text-xl">Log in with email and password</h2>
        </div>
        <form action={dispatch} className="flex flex-col gap-3">
            <FormInput
                name="email"
                type="email"
                placeholder="이메일"
                required
                errors={state?.fieldErrors?.email}
            />
            <FormInput
                name="password"
                type="password"
                placeholder="password"
                required
                errors={state?.fieldErrors?.password}
                minLength={PASSWORD_MIN_LENGTH}
            />
            <Button
                text={"Login"}
            />
        </form>

        <SocialLogin/>
    </div>
}