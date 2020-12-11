import * as React from 'react';
import { PageWrapperTypes } from './page-wrapper-types';
import './page-wrapper-styles.css';

export const PageWrapperComponent: React.FC<PageWrapperTypes.Props> = (props) => {
    return (
        <div className="page-wrapper">
            {props.children}
        </div>
    );
};