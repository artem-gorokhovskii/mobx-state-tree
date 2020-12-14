import { Instance } from 'mobx-state-tree';
import { RegistrationFormStore } from './registration-form-store';

export namespace RegistrationFormTypes {
    export interface Props {
        store: Instance<typeof RegistrationFormStore>;
    };
};