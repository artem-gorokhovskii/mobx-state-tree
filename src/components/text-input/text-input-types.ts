import { ChangeEvent } from "react";

export namespace TextInputTypes {
    export interface Props {
        value: string;
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onFocus?: (event: ChangeEvent<HTMLInputElement>) => void;
        onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
        name?: string;
        errorMessage?: string;
        placeholder?: string;
    };
}