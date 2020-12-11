import * as React from 'react';
import { observer } from 'mobx-react';
import { PostDetailTypes } from './post-detail-types';
import { InformationRow } from '../../components/information-row';
import './post-detail-styles.css';

export const PostDetailComponent: React.FC<PostDetailTypes.Props> = observer(({ store, postId }) => {
    React.useEffect(() => {
        store.getPostInfo(postId);
        return store.clearData;
    }, []);

    return (
        <div className="post-detail">
            
            {
                !store.isLoading && (
                    <>
                        <div className="post-detail__title">Post detail</div>
                        <InformationRow keyName="id" value={String(store.post.id)} />
                        <InformationRow keyName="author id" value={String(store.post.userId)} />
                        <InformationRow keyName="title" value={store.post.title} />
                        <InformationRow keyName="content" value={store.post.body} />
                    </>
                )
            }            
            {
                store.isLoading && (
                    <div className="post-detail__title">
                        Loading...
                    </div>
                )
            }
        </div>
    );
});