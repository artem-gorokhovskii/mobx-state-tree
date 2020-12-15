import { types, getSnapshot } from 'mobx-state-tree';
import { ChangeEvent } from 'react';
import { selectOptionModel, DEFAULT_SELECT_OPTION, SelectOption } from '../../components/select';
import {
    MAX_NAME_LENGTH,
    MIN_NAME_LENGTH,
    NAME_MASK,
    NAME_ERRORS,
    AGE_MASK,
    AGE_ERRORS,
    GENDER_ERRORS,
    REGISTRATION_FORM_STORAGE_KEY,
} from './registration-form-const';

export const RegistrationFormStore = types.model({
    name: types.optional(types.string, ''),
    nameError: types.optional(types.string, ''),
    lastName: types.optional(types.string, ''),
    lastNameError: types.optional(types.string, ''),
    age: types.optional(types.string, ''),
    ageError: types.optional(types.string, ''),
    gender: types.optional(selectOptionModel, DEFAULT_SELECT_OPTION),
    genderError: types.optional(types.string, ''),
    submitButtonIsDisabled: types.optional(types.boolean, false),
})
    .actions((self) => {
        const validate = () => {
            if (self.name.length < MIN_NAME_LENGTH) {
                self.nameError = NAME_ERRORS.TOO_SHORT;
            } else if (self.name.length > MAX_NAME_LENGTH) {
                self.nameError = NAME_ERRORS.TOO_LONG;
            } else if (!NAME_MASK.test(self.name)) {
                self.nameError = NAME_ERRORS.INCORRECT_MASK;
            } else {
                self.nameError = '';
            }

            if (self.lastName.length < MIN_NAME_LENGTH) {
                self.lastNameError = NAME_ERRORS.TOO_SHORT;
            } else if (self.lastName.length > MAX_NAME_LENGTH) {
                self.lastNameError = NAME_ERRORS.TOO_LONG;
            } else if (!NAME_MASK.test(self.lastName)) {
                self.lastNameError = NAME_ERRORS.INCORRECT_MASK;
            } else {
                self.lastNameError = '';
            }

            const parsedAge = parseInt(self.age, 10);
            if (!AGE_MASK.test(self.age)) {
                self.ageError = AGE_ERRORS.INCORRECT_MASK;
            } else if (!parsedAge || parsedAge <= 0 || parsedAge >= 200) {
                self.ageError = AGE_ERRORS.INCORRECT_VALUE;
            } else {
                self.ageError = '';
            }

            if (!self.gender.value) {
                self.genderError = GENDER_ERRORS.EMPTY_VALUE;
            } else {
                self.genderError = '';
            }

            self.submitButtonIsDisabled = [
                self.nameError,
                self.lastNameError,
                self.ageError,
                self.genderError,
            ].some(val => !!val);
        };

        const changeName = (event: ChangeEvent<HTMLInputElement>) => {
            self.name = event.target.value;
            validate();
        };

        const changeLastName = (event: ChangeEvent<HTMLInputElement>) => {
            self.lastName = event.target.value;
            validate();
        };

        const changeAge = (event: ChangeEvent<HTMLInputElement>) => {
            self.age = event.target.value;
            validate();
        };

        const changeGender = (option?: SelectOption | null) => {
            if (!option) {
                self.gender = DEFAULT_SELECT_OPTION;
            } else {
                self.gender = option;
            }
            validate();
        };

        const reset = () => {
            self.name = '';
            self.nameError = '';
            self.nameError = '';
            self.lastName = '';
            self.lastNameError = '';
            self.age = '';
            self.ageError = '';
            self.gender = DEFAULT_SELECT_OPTION;
            self.genderError = '';
            self.submitButtonIsDisabled = false;
        };

        return {
            changeName,
            changeLastName,
            changeAge,
            changeGender,
            reset
        };
    });