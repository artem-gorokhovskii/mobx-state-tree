import * as React from 'react';
import { PostsList, POSTS_LIST_INIT_DATE, PostsListStore } from '../../modules/posts-list';
import { PropsListTypes } from './posts-list-types';
import { RoutesPaths } from '../routes';
import "./posts-list-styles.css";

const postListStore = PostsListStore.create(POSTS_LIST_INIT_DATE);

export const PostsListComponent: React.FC<PropsListTypes.Props> = (props) => {
    const returnToMainPage = React.useCallback(() => {
        props.history.push(RoutesPaths.MAIN_PATH);
    }, [props.history]);

    const moveToPostDetail = React.useCallback((id: number) => {
        props.history.push(`${RoutesPaths.POSTS_LIST}/${id}`);
    }, [props.history]);

    return (
        <div className="page-posts-list">
            <PostsList store={postListStore} handleRowClick={moveToPostDetail} />
            <button
                className="page-posts-list__button"
                onClick={returnToMainPage}
            >
                return to main page
            </button>
        </div>
    );
};