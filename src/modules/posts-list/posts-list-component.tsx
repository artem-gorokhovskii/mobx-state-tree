import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { PostListTypes } from './posts-list-types';
import { FavouritesContext } from '../favourites';
import './posts-list-styles.css';

export const PostsListComponent: React.FC<PostListTypes.Props> = observer(({ store, handleRowClick }) => {
    React.useEffect(() => {
        store.getPostsList();
        return store.clearData;
    }, []);

    const onRowClick = React.useCallback((event: React.MouseEvent) => {
        handleRowClick(Number(event.currentTarget.getAttribute('data-id')));
    }, [ handleRowClick ]);

    const favourites = React.useContext(FavouritesContext);

    return (
        <div className="posts-list">
            {!store.isLoading && (
                <table className="posts-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!store.posts.length && store.posts.map(post => (
                            <tr
                                key={post.id}
                                className={cn("posts-table__row", {
                                    "posts-table__row--favourite": favourites.posts.get(String(post.id))
                                })}
                                data-id={post.id}
                                onClick={onRowClick}
                            >
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {
                store.isLoading && (
                    <div>
                        Loading...
                    </div>
                )
            }
        </div>
    );
});