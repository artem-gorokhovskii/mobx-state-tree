import * as React from 'react';
import { InformationRowTypes } from './information-row-types';
import { NO_VALUE } from './information-row-const';
import './information-row-styles.css';

export const InformationRowComponent: React.FC<InformationRowTypes.Props> = ({ keyName, value = NO_VALUE}) => {
    return (
        <div className="information-row">
            <div className="information-row__key">{keyName}</div>
            <div className="information-row__space" />
            <div className="information-row__value">{value}</div>
        </div>
    );
};