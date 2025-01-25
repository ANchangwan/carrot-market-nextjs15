"use client";
import FormInput from "@/components/input";
import Button from "@/components/button";
import {useActionState} from "react";
import {smsLogin} from "@/app/sms/actions";

export default function CreateAccount() {
    const [state, dispatch] = useActionState(smsLogin,null);
    return <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-2xl">SMS Login</h1>
            <h2 className="text-xl">전화번호를 입력해주세요!</h2>
        </div>
        <form
            action={dispatch}
            className="flex flex-col gap-3">
            <FormInput
                name="phone"
                type="text"
                placeholder="전화번호"
                required
            />
            <FormInput
                name="token"
                type="number"
                placeholder="인증번호"
                required
                minLength={100000}
                maxLength={999999}
            />
            <Button
                text={"인증하기"}
            />
        </form>
    </div>
}