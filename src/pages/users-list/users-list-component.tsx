import * as React from 'react';
import { UsersList, UsersListStore, USERS_LIST_INIT_STATE } from '../../modules/users-list';
import { UserListTypes } from './users-list-types';
import { RoutesPaths } from '../routes';
import './users-list-styles.css';

const userListStore = UsersListStore.create(USERS_LIST_INIT_STATE);

export const UsersListComponent: React.FC<UserListTypes.Props> = (props) => {
    const returnToMainPage = React.useCallback(() => {
        props.history.push(RoutesPaths.MAIN_PATH);
    }, [props.history]);

    const moveToClientDetail = React.useCallback((id: number) => {
        props.history.push(`${RoutesPaths.USERS_LIST}/${id}`);
    }, [props.history]);

    return (
        <div className="users-list">
            <UsersList
                store={userListStore}
                handleRowClick={moveToClientDetail}
            />
            <button
                className="users-list__button"
                onClick={returnToMainPage}
            >
                return to main page
            </button>
        </div>
    );
}