import { Instance } from 'mobx-state-tree';
import { UsersListStore } from './users-list-store';

export namespace UsersNS {
    export interface Props {
        store: Instance<typeof UsersListStore>;
        handleRowClick: (id: number) => void;
    }
}