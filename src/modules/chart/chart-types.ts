import { Instance } from 'mobx-state-tree';
import { ChartStore } from './chart-store';

export namespace ChartTypes {
    export interface Props {
        store: Instance<typeof ChartStore>;
    };
    
    export interface Volatile {
        eventSource: EventSource | null;
    }

    export interface EventSourceEvent extends EventSourceEventMap {
        regular: EventSourceType;
    }
}