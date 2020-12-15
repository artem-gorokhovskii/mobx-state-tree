import { types } from 'mobx-state-tree';

export const FavouritesStore = types.model({
    posts: types.map(types.boolean),
    users: types.map(types.boolean),
})
    .actions((self) => ({
        addUser(id: number) {
            self.users.set(String(id), true);
        },
        deleteUser(id: number) {
            self.users.delete(String(id));
        },
        addPost(id: number) {
            self.posts.set(String(id), true);
        },
        deletePost(id: number) {
            self.posts.delete(String(id));
        },
    }));