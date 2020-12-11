import { types, flow } from 'mobx-state-tree';
import { POSTS_URL } from '../../const';

const PostStore = types.model('Post', {
    id: types.number,
    title: types.string,
});

export const PostsListStore = types.model('PostsList', {
    posts: types.array(PostStore),
    isLoading: types.boolean,
    errorMessage: types.string,
})
    .actions((self) => {
        const getPostsList = flow(function* () {
            try {
                self.isLoading = true;
                self.errorMessage = '';
    
                const posts = yield fetch(POSTS_URL).then(data => data.json());
                self.posts = posts.map((postData: any) => PostStore.create(postData));
    
                self.isLoading = false;
            } catch (e) {
                self.isLoading = false;
                self.errorMessage = e.message;
            }
        });

        const clearData = () => {
            self.isLoading = false;
            self.errorMessage = '';;
            self.posts.clear();
        };

        return { getPostsList, clearData };
    });