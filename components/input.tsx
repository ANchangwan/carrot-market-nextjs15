import {InputHTMLAttributes} from "react";

interface IFormInputProps {
    name: string;
    errors?: string[];
}

export default function  Input({name,
                                      errors=[],
                                  ...rest
} : IFormInputProps & InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <input
                className="bg-transparent rounded-md
                    w-full focus:outline-none p-2
                    transition
                    ring-2 focus:ring-4 ring-neutral-200
                    focus:ring-orange-500 border-none
                    placeholder:text-neutral-400
                    "
                name={name}
                {...rest}

            />
            {errors.map((error,index) => (
                <span key={index} className="text-red-500 font-medium">{error}</span>
            ))}
        </div>
    )
}