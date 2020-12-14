import * as React from 'react';
import { observer } from 'mobx-react';
import { RegistrationFormTypes } from './registration-form-types';
import { TextInput } from '../../components/text-input';
import { Select } from '../../components/select';
import { GENDER_OPTIONS } from './registration-form-const';

export const RegistrationFormComponent: React.FC<RegistrationFormTypes.Props> = observer((props) => {
    return (
        <div>
            <div>
                <label>
                    name:
                    <TextInput
                        name="name"
                        value={props.store.name}
                        onChange={props.store.changeName}
                        errorMessage={props.store.nameError}
                        />
                </label>
            </div>
            <div>
                <label>
                    last name:
                    <TextInput
                        name="lastname"
                        value={props.store.lastName}
                        onChange={props.store.changeLastName}
                        errorMessage={props.store.lastNameError}
                        />
                </label>
            </div>
            <div>
                <label>
                    age:
                    <TextInput
                        name="age"
                        value={props.store.age}
                        onChange={props.store.changeAge}
                        errorMessage={props.store.ageError}
                        />
                </label>
            </div>
            <div>
                <label>
                    gender:
                    <Select
                        value={props.store.gender}
                        options={GENDER_OPTIONS}
                        onChange={props.store.changeGender}
                        errorMessage={props.store.genderError}
                    />
                </label>
            </div>
            <button disabled={props.store.submitButtonIsDisabled}>Submit</button>
            <button onClick={props.store.reset}>Reset</button>
        </div>
    );
});