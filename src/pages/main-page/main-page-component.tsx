import * as React from 'react';
import { PAGES } from './main-page-const';
import { MainPageTypes } from './main-page-types';
import "./main-page-styles.css";

export const MainPageComponent: React.FC<MainPageTypes.Props> = (props) => {
    return (
        <div className="main-page">
            <div className="main-page__title">Welcome!</div>
            <div className="main-page__description">Choose page</div>
            {PAGES.map((page) => (
                <button
                    className="main-page__button"
                    onClick={() => props.history.push(page.link)}
                    key={page.title}
                >
                    {page.title}
                </button>
            ))}
        </div>
    );
};