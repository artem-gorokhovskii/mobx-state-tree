import * as React from 'react';
import {Instance} from 'mobx-state-tree';
import { FavouritesStore } from './favourites-store';

export const FavouritesContext = React.createContext(null as Instance<typeof FavouritesStore> | null);
