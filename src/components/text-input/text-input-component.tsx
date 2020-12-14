import * as React from 'react';
import { TextInputTypes } from './text-input-types';

export const TextInputComponent: React.FC<TextInputTypes.Props> = (props) => {

    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                onFocus={props.onFocus}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
            />
            {props.errorMessage && <div>{props.errorMessage}</div>}
        </div>
    )
};