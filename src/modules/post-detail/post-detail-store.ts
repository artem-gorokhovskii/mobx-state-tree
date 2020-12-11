import { types, flow, applySnapshot } from 'mobx-state-tree';
import { POSTS_URL } from '../../const';

const PostStore = types.model('Post', {
    id: types.number,
    userId: types.number,
    title: types.string,
    body: types.string,
});

export const PostDetailStore = types.model('PostStore', {
    post: PostStore,
    isLoading: types.boolean,
    errorMessage: types.string,
})
    .actions((self) => {
        const getPostInfo = flow(function* (id: number) {
            try {
                self.isLoading = true;
                self.errorMessage = '';
    
                const postData = yield fetch(`${POSTS_URL}/${id}`).then(data => data.json());
                applySnapshot(self.post, postData);

                self.isLoading = false;
            } catch (e) {
                self.isLoading = false;
                self.errorMessage = e.message;
            }
        });

        const clearData = () => {
            self.isLoading = false;
            self.errorMessage = '';
        };

        return { getPostInfo, clearData };
    });