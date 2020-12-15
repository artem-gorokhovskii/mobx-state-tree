import * as React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';
import { UsersNS } from './users-list-types';
import { FavouritesContext } from '../favourites';
import './users-list-styles.css';

export const UsersListComponent: React.FC<UsersNS.Props> = observer(({ store, handleRowClick }) => {
    React.useEffect(() => {
        store.loadAllUsers();
    }, []);

    const onRowClick = React.useCallback((event: React.MouseEvent) => {
        handleRowClick(Number(event.currentTarget.getAttribute('data-id')));
    }, [ handleRowClick ]);

    const favourites = React.useContext(FavouritesContext);

    return (
        <div className="users-list">
            {!store.isLoading && (
                <table className="users-table">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>name</th>
                            <th>login</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!!store.numberOfUsers && store.data.map(user => (
                            <tr
                                key={user.id}
                                className={cn("users-table__row", {
                                    "users-table__row--favourite": favourites?.users.get(String(user.id))
                                })}
                                data-id={user.id}
                                onClick={onRowClick}
                            >
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
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