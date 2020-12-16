import * as React from 'react';
import { observer } from 'mobx-react';
import { PostDetailTypes } from './post-detail-types';
import { InformationRow } from '../../components/information-row';
import { FavouritesContext } from '../favourites';
import './post-detail-styles.css';

export const PostDetailComponent: React.FC<PostDetailTypes.Props> = observer(({ store, postId }) => {
    React.useEffect(() => {
        store.getPostInfo(postId);
        return store.clearData;
    }, []);

    const favourites = React.useContext(FavouritesContext);

    const addPostToFavourites = React.useCallback(() => {
        favourites.addPost(store.post.id);
    }, [favourites]);

    const removePostFromFavourites = React.useCallback(() => {
        favourites.deletePost(store.post.id);
    }, [favourites]);

    const postIsFavourite = favourites.posts.get(String(store.post.id));
    const favouriteValue = postIsFavourite ? 'Yes' : 'No';

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
                        <InformationRow keyName="favourite" value={favouriteValue} />
                        {!postIsFavourite && <button onClick={addPostToFavourites}>Add to favourites</button>}
                        {postIsFavourite && <button onClick={removePostFromFavourites}>Remove from favourites</button>}
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
)});
            