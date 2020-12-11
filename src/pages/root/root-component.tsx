import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { PageWrapper } from '../../components/page-wrapper';
import { Routes } from '../routes';

export const RootComponent = () => {
    return (
        <Router>
            <PageWrapper>
                <Switch>
                    <Routes />
                </Switch>
            </PageWrapper>
        </Router>
    );
};