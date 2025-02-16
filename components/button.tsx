"use client";
import {useFormStatus} from "react-dom";

interface IFormButtonProps {
    text: string;
}

export default function Button({text}:IFormButtonProps) {
    const {pending} = useFormStatus();

    return (
        <button
            disabled={pending}
            className="primary-btn h-10
            disabled:bg-neutral-400
            disabled:text-neutral-300
            disabled:cursor-not-allowed
            "> {pending ?  "loading...":text}</button>
    )
}