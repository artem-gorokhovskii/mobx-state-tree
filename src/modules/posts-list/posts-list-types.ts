import { Instance } from 'mobx-state-tree';
import { PostsListStore } from './posts-list-store';

export namespace PostListTypes {
    export interface Props {
        store: Instance<typeof PostsListStore>;
        handleRowClick: (id: number) => void;
    };
};