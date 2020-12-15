import * as React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { onSnapshot } from 'mobx-state-tree';
import { FavouritesContext, FavouritesStore } from '../../modules/favourites';
import { PageWrapper } from '../../components/page-wrapper';
import { Routes } from '../routes';
import { FAVOURITES_DATA_STORAGE_KEY } from './root-const';

// Begin save and init data from LocalStorage
let initData = {};

try {
    let item = localStorage.getItem(FAVOURITES_DATA_STORAGE_KEY);
    if (item) {
        initData = JSON.parse(item);
    }
} catch {
    localStorage.removeItem(FAVOURITES_DATA_STORAGE_KEY);
}

const favouritesStore = FavouritesStore.create(initData);

onSnapshot(favouritesStore, snapshot => {
    localStorage.setItem(FAVOURITES_DATA_STORAGE_KEY, JSON.stringify(snapshot));
});
// End save and init data from LocalStorage

export const RootComponent = () => {
    return (
        <Router>
            <PageWrapper>
                <FavouritesContext.Provider value={favouritesStore}>
                    <Switch>
                        <Routes />
                    </Switch>
                </FavouritesContext.Provider>
            </PageWrapper>
        </Router>
    );
};