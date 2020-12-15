import { SelectOption, DEFAULT_SELECT_OPTION } from '../../components/select';

export const MIN_NAME_LENGTH = 2;
export const MAX_NAME_LENGTH = 20;
export const NAME_MASK = /^[a-zа-яё\-\s]{2,20}$/i
export const AGE_MASK = /^\d{1,3}$/;

export const GENDER_OPTIONS: SelectOption[] = [
    DEFAULT_SELECT_OPTION,
    { value: 'male', label: 'male' },
    { value: 'female', label: 'female' },
    { value: 'any', label: 'any' },
];

export enum NAME_ERRORS {
    TOO_SHORT = 'field is too short',
    TOO_LONG = 'field is too long',
    INCORRECT_MASK = 'field contains incorrect symbols'
};

export enum AGE_ERRORS {
    INCORRECT_MASK = 'field contains incorrect symbols',
    INCORRECT_VALUE = 'field contains incorrect value',
};

export enum GENDER_ERRORS {
    EMPTY_VALUE = 'this field is required',
};

export const REGISTRATION_FORM_STORAGE_KEY = 'REGISTRATION_FORM';