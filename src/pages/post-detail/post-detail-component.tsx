import * as React from 'react';
import { POST_DETAIL_INIT_DATA, PostDetail, PostDetailStore } from '../../modules/post-detail';
import { PostDetailTypes } from './post-detail-types';
import { RoutesPaths } from '../routes';
import './post-detail-styles.css';

const postDetailStore = PostDetailStore.create(POST_DETAIL_INIT_DATA);

export const PostDetailComponent: React.FC<PostDetailTypes.Props> = ({ match, history }) => {
    const moveToUserDetail = React.useCallback(() => {
        history.push(`${RoutesPaths.USERS_LIST}/${postDetailStore.post.userId}`);
    }, [history]);

    const moveToPostsList = React.useCallback(() => {
        history.push(`${RoutesPaths.POSTS_LIST}`);
    }, [history]);

    return (
        <div className="page-post-detail">
        <PostDetail
            store={postDetailStore}
            postId={Number(match.params.postId)}
        />
        
        <button
            className="page-post-detail__button"
            onClick={moveToUserDetail}
        >
            move to user details
        </button>

        <button
            className="page-post-detail__button"
            onClick={moveToPostsList}
        >
            move to posts list
        </button>
        </div>
    )
};