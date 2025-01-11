interface IFormInputProps {
    type: string;
    placeholder: string;
    required: boolean;
    errors: string[];
}

export default function FormInput({type,
                                      placeholder,
                                      required,
                                      errors} : IFormInputProps){
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
                type={type}
                placeholder={placeholder}
                required={required}
            />
            {errors.map((error,index) => (
                <span key={index} className="text-red-500 font-medium">{error}</span>
            ))}
        </div>
    )
}