import * as React from 'react';
import { observer } from 'mobx-react';
import { UserDetailTypes } from './user-detail-types';
import { InformationRow } from '../../components/information-row'
import './user-detail-styles.css';

export const UserDetailComponent: React.FC<UserDetailTypes.Props> = observer(({ store, userId, handleRowClick }) => {
    React.useEffect(() => {
        store.getUserInfo(userId);
        return store.clearData;
    }, [ ]);

    const onRowClick = React.useCallback((event: React.MouseEvent) => {
        handleRowClick(Number(event.currentTarget.getAttribute('data-id')));
    }, [ handleRowClick ]);

    return (
        <>
            {
                !store.isLoading && (
                    <div className="user-detail">
                        <InformationRow keyName="user" value={store.user.userInfo} />
                        <InformationRow keyName="id" value={String(store.user.id)} />
                        <InformationRow keyName="email" value={store.user.email} />
                        <InformationRow keyName="phone" value={store.user.phone} />
                        <InformationRow keyName="address" value={store.user.fullAddress} />

                        <div className="user-detail user-detail__title">User posts</div>

                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>№</th>
                                    <th>title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // better keep MAP in separate component
                                }
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
                    </div>
                )
            }
            {
                store.isLoading && (
                    <div>
                        Loading...
                    </div>
                )
            }
        </>
        
    );
});