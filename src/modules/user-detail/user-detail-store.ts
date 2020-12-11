import { types, flow, applySnapshot } from 'mobx-state-tree';
import { USERS_URL, POSTS_URL } from '../../const';

const UserStorage = types.model('User', {
    id: types.number,
    name: types.string,
    username: types.string,
    email: types.string,
    address: types.model({
        street: types.string,
        suite: types.string,
        city: types.string,
        zipcode: types.string,
    }),
    phone: types.string,
    website: types.string,
})
    .views(self => ({
        get userInfo() {
            return `${self.name} (${self.username})`;
        },

        get fullAddress() {
            return `${self.address.city}, ${self.address.street}, ${self.address.suite} (${self.address.zipcode})`;
        }
    }))

const PostStorage = types.model('Post', {
    id: types.number,
    title: types.string,
});

export const UserDetailStorage = types.model('UserDetail', {
    user: UserStorage,
    posts: types.array(PostStorage),
    isLoading: types.optional(types.boolean, false),
    errorMessage: types.optional(types.string, ''),
})
    .actions((self) => {
        const getUserInfo = flow(function* (id: number) {
            try {
                self.isLoading = true;
                self.errorMessage = '';

                const userData = yield fetch(`${USERS_URL}/${id}`).then(data => data.json());
                applySnapshot(self.user, userData);
    
                const postDataDirty = yield fetch(POSTS_URL).then(data => data.json());
                const postData = postDataDirty.filter((post: any) => post.userId === id);
    
                self.posts = postData.map((post: any) => PostStorage.create(post));
    
                self.isLoading = false;
            } catch (e) {
                self.isLoading = false;
                self.errorMessage = e.message;
            }            
        });

        const clearData = () => {
            self.isLoading = false;
            self.errorMessage = '';
            self.posts.clear();
        }

        return { getUserInfo, clearData };
    });