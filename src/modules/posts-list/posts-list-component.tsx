import * as React from 'react';
import { observer } from 'mobx-react';
import { PostListTypes } from './posts-list-types';
import './posts-list-styles.css';

export const PostsListComponent: React.FC<PostListTypes.Props> = observer(({ store, handleRowClick }) => {
    React.useEffect(() => {
        store.getPostsList();
        return store.clearData;
    }, []);

    const onRowClick = React.useCallback((event: React.MouseEvent) => {
        handleRowClick(Number(event.currentTarget.getAttribute('data-id')));
    }, [ handleRowClick ]);

    return (
        <div className="posts-list">
            {!store.isLoading && (
                <table className="users-table">
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
                                className="users-table__row"
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