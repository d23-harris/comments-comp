import data from "./sample.json"
import { Comment } from '../../types/CommentTypes';


export const fetchComments = async (): Promise<Comment[]> => {
    try {
        // const response = await fetch(API_URL);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch comments');
        // }
        // const { comments }: Comment = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};

