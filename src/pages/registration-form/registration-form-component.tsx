import * as React from 'react';
import { RegistrationFormTypes } from './registration-form-types';
import { RegistrationForm, RegistrationFormStore } from '../../modules/registration-form';
import { RoutesPaths } from '../routes';
import './registration-form-styles.css';

const registrationFormStore = RegistrationFormStore.create({});

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