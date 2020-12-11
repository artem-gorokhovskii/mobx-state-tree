import { PostDetailStore } from './post-detail-store';

describe('Test', () => {
    it('PostDetailStore', () => {
        const post = PostDetailStore.create({
            isLoading: true,
            errorMessage: 'Bad news',
            post: {
                id: 0,
                userId: 0,
                title: 'string',
                body: 'string',
            }
        })

        expect(post.isLoading).toBe(true);
        expect(post.errorMessage).toBe('Bad news');

        post.clearData();

        
        expect(post.errorMessage).toBe('');
        expect(post.isLoading).toBe(false);
    });
});