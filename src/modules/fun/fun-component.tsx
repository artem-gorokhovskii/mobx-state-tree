import * as React from 'react';
import { observer } from 'mobx-react';
import { FunTypes } from './fun-types';
import './fun-styles.css';

export const FunComponent: React.FC<FunTypes.Props> = observer((props) => {
    React.useEffect(() => {
        props.store.init();
        return props.store.reset;
    }, []);

    return (
        <div className="fun">
            <div>Selected type: {props.store.textType}</div>
            <div>
            {
                props.store.content
            }
            </div>
            <button
                className="fun__button"
                onClick={props.store.chooseJokes}
            >
                Jokes
            </button>
            <button
                className="fun__button"
                onClick={props.store.choosePoems}
            >
                POEMS
            </button>
            <button
                className="fun__button"
                onClick={props.store.chooseQuotes}
            >
                Quotes
            </button>
        </div>
    )
});