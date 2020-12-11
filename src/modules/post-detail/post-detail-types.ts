import { Instance } from 'mobx-state-tree';
import { PostDetailStore } from './post-detail-store';

export namespace PostDetailTypes {
    export interface Props {
        store: Instance<typeof PostDetailStore>;
        postId: number;
    }
}