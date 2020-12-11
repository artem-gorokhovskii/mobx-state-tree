import { Instance } from 'mobx-state-tree';
import { UserDetailStorage } from './user-detail-store';

export namespace UserDetailTypes {
    export interface Props {
        store: Instance<typeof UserDetailStorage>;
        userId: number;
        handleRowClick: (id: number) => void;
    }
}