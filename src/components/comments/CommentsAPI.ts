import { Comment } from '../../types/CommentTypes';

const API_URL = 'http://localhost:5000/api/comments';

const initialComments = [
    {
        id: '1',
        text: 'This is the first comment',
        user: 'user-abc',
        children: [
            {
                id: '2',
                text: 'This is a reply to the first comment',
                user: 'user-123',
                children: [],
            },
        ],
    },
    {
        id: '3',
        text: 'This is another top-level comment',
        user: 'user-efg',
        children: [],
    },
];

export const fetchComments = async (): Promise<Comment[]> => {
    try {
        // const response = await fetch(API_URL);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch comments');
        // }
        // const { comments }: Comment = await response.json();
        return initialComments;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};
