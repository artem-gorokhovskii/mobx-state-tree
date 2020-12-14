import * as React from 'react';
import Select from 'react-select';
import type { Props } from './select-types';

export const SelectComponent: React.FC<Props> = (props) => {
    return (
        <div>
            <Select {...props} />
            {props.errorMessage && <div>{props.errorMessage}</div>}
        </div>
    )
};