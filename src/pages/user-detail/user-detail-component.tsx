import * as React from 'react';
import { UserDetail, UserDetailStorage, USER_DETAIL_INIT_STATE } from '../../modules/user-detail';
import { UserDetailTypes } from './user-detail-types';
import { RoutesPaths } from '../routes';
import './user-detail-styles.css';

const userDetailStore = UserDetailStorage.create(USER_DETAIL_INIT_STATE);

export const UserDetailComponent: React.FC<UserDetailTypes.Props> = ({ history, match }) => {
    const returnToUsersList = React.useCallback(() => {
        history.push(RoutesPaths.USERS_LIST);
    }, [ history ]);
    
    const moveToPostDetail = React.useCallback((id: number) => {
        history.push(`${RoutesPaths.POSTS_LIST}/${id}`);
    }, [history]);

    return (
        <div className="page-user-detail">
            <UserDetail
                store={userDetailStore}
                userId={Number(match.params.userId)}
                handleRowClick={moveToPostDetail}
            />
            <button
                className="page-user-detail__button"
                onClick={returnToUsersList}
            >
                return to users list
            </button>
        </div>
    );
};