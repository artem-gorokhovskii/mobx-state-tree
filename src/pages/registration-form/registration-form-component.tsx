import * as React from 'react';
import { onSnapshot } from 'mobx-state-tree';
import { RegistrationFormTypes } from './registration-form-types';
import { RegistrationForm, RegistrationFormStore } from '../../modules/registration-form';
import { RoutesPaths } from '../routes';
import { REGISTRATION_FORM_DATA_STORAGE_KEY } from './registration-form-const';
import './registration-form-styles.css';

// Begin save and init data from LocalStorage
let initData = {};

try {
    let item = localStorage.getItem(REGISTRATION_FORM_DATA_STORAGE_KEY);
    if (item) {
        initData = JSON.parse(item);
    }
} catch {
    localStorage.removeItem(REGISTRATION_FORM_DATA_STORAGE_KEY);
}

const registrationFormStore = RegistrationFormStore.create(initData);

onSnapshot(registrationFormStore, snapshot => {
    localStorage.setItem(REGISTRATION_FORM_DATA_STORAGE_KEY, JSON.stringify(snapshot));
});
// End save and init data from LocalStorage

export const RegistrationFormComponent: React.FC<RegistrationFormTypes.Props> = (props) => {
    const moveToMainPage = React.useCallback(() => {
            props.history.push(RoutesPaths.MAIN_PATH);
        }, [props.history]);

    return (
        <div className="page-registration-form">
            <RegistrationForm store={registrationFormStore} />
            <button
                className="page-registration-form__button"
                onClick={moveToMainPage}
            >
                return to main page
            </button>
        </div>
    )
};