import { types } from 'mobx-state-tree';
import { CHART_URL } from './chart-const';
import { ChartTypes } from './chart-types';

const point = types.model('Point', {
    x: types.number,
    y: types.number
})

export const ChartStore = types.model('Chart', {
    data: types.array(point),
})
    .volatile((): ChartTypes.Volatile => ({
        eventSource: null
    }))
    .actions((self) => ({
        addValues(event: EventSourceType) {
            const values = event.data.split(',').map(Number);
            for (let val of values) {
                if (self.data.length < 10) {
                    self.data.push({ y: val, x: (self.data.length + 1) });
                } else {
                    self.data.replace(
                        self.data
                            .slice(1)
                            .map((elem) => ({ y: elem.y, x: elem.x - 1}))
                            .concat({ y: val, x: 10 })
                        )
                }
            }
        },
    }))
    .actions((self) => ({
        init() {
            self.eventSource = new EventSource(CHART_URL);
            self.eventSource.addEventListener('message', self.addValues);
        },

        reset() {
            if (self.eventSource) {
                self.eventSource.close();
                self.eventSource.removeEventListener('message', self.addValues);
            }
            self.eventSource = null;
            self.data.clear();
        }
    }));