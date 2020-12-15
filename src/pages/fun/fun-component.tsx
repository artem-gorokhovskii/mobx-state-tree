import * as React from 'react';
import { FunTypes } from './fun-types';
import { Fun, FunStore } from '../../modules/fun';
import { RoutesPaths } from '../routes';
import './fun-styles.css';

const funStore = FunStore.create();

export const FunComponent: React.FC<FunTypes.Props> = (props) => {
    const moveToMainPage = React.useCallback(() => {
        props.history.push(RoutesPaths.MAIN_PATH);
    }, [props.history]);

    return (
        <div className="page-fun">
            <Fun store={funStore} />
            <button
                className="page-fun__button"
                onClick={moveToMainPage}
            >
                return to main page
            </button>
        </div>
    );
};
