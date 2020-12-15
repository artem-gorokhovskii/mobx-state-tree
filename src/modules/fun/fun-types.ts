import { Instance } from 'mobx-state-tree';
import { FunStore } from './fun-store';

export namespace FunTypes {
    export interface Props {
        store: Instance<typeof FunStore>;
    };

    export interface Volatile {
        ws: WebSocket | null;
    }
}