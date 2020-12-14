import { Props as SelectProps } from 'react-select';

export interface Props extends SelectProps {
    errorMessage?: string;
};

export interface SelectOption {
    value: string,
    label: string,
}