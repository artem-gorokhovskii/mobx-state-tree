import * as React from 'react';
import { Route } from 'react-router-dom';
import { MainPage } from '../main-page';
import { UsersList } from '../users-list';
import { UserDetail } from '../user-detail';
import { PostDetail } from '../post-detail';
import { PostsList } from '../posts-list';
import { RegistrationForm } from '../registration-form';
import { Chart } from '../chart';
import { Fun } from '../fun';
import { RoutesPaths } from './routes-const';

export const RoutesComponent = () => {
    return (
        <>
            <Route path={RoutesPaths.MAIN_PATH} component={MainPage} exact />
            <Route path={RoutesPaths.USERS_LIST} component={UsersList} exact />
            <Route path={RoutesPaths.USER_DETAIL} component={UserDetail} />
            <Route path={RoutesPaths.POSTS_LIST} component={PostsList} exact />
            <Route path={RoutesPaths.POST_DETAIL} component={PostDetail} />
            <Route path={RoutesPaths.CHART} component={Chart} />
            <Route path={RoutesPaths.FUN} component={Fun} />
            <Route path={RoutesPaths.REGISTRATION_FORM} component={RegistrationForm} />
        </>
    );
}