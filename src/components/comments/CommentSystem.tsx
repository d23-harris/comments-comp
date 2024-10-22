import { useState, useCallback } from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { Comment } from '../../types/CommentTypes';
import CommentComponent from './CommentsView';

import { CommentSystemProps } from '../../types/CommentTypes'


const CommentSystem = ({ initialComments }: CommentSystemProps) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleReply = useCallback((parentId: string, text: string) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      text,
      user: 'Current User',
      children: [],
    };

    const addReply = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.id === parentId) {
          return { ...comment, children: [...comment.children, newComment] };
        }
        if (comment.children.length > 0) {
          return { ...comment, children: addReply(comment.children) };
        }
        return comment;
      });
    };

    setComments(prevComments => addReply(prevComments));
  }, [])

  return (
    <Box>
      <Typography variant="h6">Comments</Typography>
      <List>
        {comments.map(comment => (
          <ListItem key={comment.id} disablePadding>
            <CommentComponent comment={comment} onReply={handleReply} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CommentSystem;