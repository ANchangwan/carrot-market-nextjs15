"use client";
import FormInput from "@/components/input";
import Button from "@/components/button";
import SocialLogin from "@/components/social-login";
import {handleForm} from "@/app/login/actions";
import {useActionState} from "react";


export default function LogIn() {
    const [state, action] = useActionState(handleForm,{hi:1} as any);
    return <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-2xl">안녕하세요!</h1>
            <h2 className="text-xl">Log in with email and password</h2>
        </div>
        <form action={action} className="flex flex-col gap-3">
            <FormInput
                name="email"
                type="email"
                placeholder="이메일"
                required
                errors={state?.errors ?? []}
            />
            <FormInput
                name="password"
                type="password"
                placeholder="password"
                required
                errors={state?.errors ?? []}
            />
            <Button
                text={"Login"}
            />
        </form>

        <SocialLogin/>
    </div>
}