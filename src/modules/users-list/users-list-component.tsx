import * as React from 'react';
import { observer } from 'mobx-react';
import { UsersNS } from './users-list-types';
import './users-list-styles.css';

export const UsersListComponent: React.FC<UsersNS.Props> = observer(({ store, handleRowClick }) => {
    React.useEffect(() => {
        store.loadAllUsers();
    }, []);

    const onRowClick = React.useCallback((event: React.MouseEvent) => {
        handleRowClick(Number(event.currentTarget.getAttribute('data-id')));
    }, [ handleRowClick ]);

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
                                className="users-table__row"
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