import { types, flow } from 'mobx-state-tree';
import { USERS_URL } from '../../const';

const UserStore = types.model('UserStore', {
    id: types.identifierNumber,
    name: types.string,
    username: types.string,
});

export const UsersListStore = types.model('UsersList', {
    data: types.array(UserStore),
    isLoading: types.boolean,
    errorMessage: types.string,
})
    .views((self) => ({
        get numberOfUsers() {
            return self.data.length;
        }
    }))
    .actions(self => {
        const loadAllUsers = flow(function* () {
            try {
                self.isLoading = true;
                self.errorMessage = '';

                const users = yield fetch(USERS_URL).then(data => data.json());
                self.data = users.map((userData: any) => UserStore.create(userData));

                self.isLoading = false;
            } catch (e) {
                self.isLoading = false;
                self.errorMessage = e.message || '';                
            }            
        });

        return { loadAllUsers };
    });