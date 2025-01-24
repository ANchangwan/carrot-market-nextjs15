import FormInput from "@/components/input";
import Button from "@/components/button";

export default function CreateAccount() {
    return <div className="flex flex-col gap-10 py-8 px-6">
        <div className="flex flex-col gap-2 *:font-medium">
            <h1 className="text-2xl">SMS Login</h1>
            <h2 className="text-xl">전화번호를 입력해주세요!</h2>
        </div>
        <form className="flex flex-col gap-3">
            <FormInput
                type="number"
                placeholder="전화번호"
                required
                errors={[]}
            />
            <FormInput
                type="number"
                placeholder="인증번호"
                required
                errors={[]}
            />
            <FormInput
                type="number"
                placeholder="인증번호 확인"
                required
                errors={[]}
            />
            <Button
                loading={false}
                text={"인증하기"}
            />
        </form>
    </div>
}