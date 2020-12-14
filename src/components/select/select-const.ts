import { types } from 'mobx-state-tree';
import { SelectOption } from './select-types';

export const DEFAULT_SELECT_OPTION: SelectOption = { value: '', label: 'Нет' };

export const selectOptionModel = types.model({
    value: types.string,
    label: types.string,
})