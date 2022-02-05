import {useState, FormEvent} from "react";

export function useInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = e;
        setValue(value);
    };

    return {input: {value, onChange}, setValue};
}
