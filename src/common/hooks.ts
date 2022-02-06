import {useState, FormEvent} from "react";

export const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value }
        } = e;
        setValue(value);
    };

    return {input: {value, onChange}, setValue};
}

const partialSID = /^\d(?!-)\d?(-\d{0,3})?$/

export const useSIDInput = () => {
    const [value, setValue] = useState<string>("");

    const setValueSafe = (value: string) => {
        if (!value || value.match(partialSID)) {
            setValue(value);
        }
    }

    const onChange = (e: FormEvent<HTMLInputElement>) => {
        const {currentTarget: {value: futureValue}} = e;

        const increse = futureValue.length - value.length;
        let v = futureValue;

        if (futureValue.length === 2) {
            if (increse > 0) {
                v += "-";
            } else if (increse < 0) {
                v = v.slice(0, -1)
            }
        }
        setValueSafe(v);
    };

    return {input: {value, onChange}, setValue: setValueSafe};
}
