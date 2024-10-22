import { memo, useCallback, useState } from 'react';
import { Box, Typography, Button, List, ListItem, TextField } from '@mui/material';
import { CommentProps } from '../../types/CommentTypes';

const CommentComponent = memo(({ comment, onReply }: CommentProps) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [replyText, setReplyText] = useState('');

    const toggleExpanded = useCallback(() => {
        setIsExpanded(prevToggle => !prevToggle);
    }, [])

    const handleReply = useCallback(() => {
        if (replyText.trim()) {
            onReply(comment.id, replyText);
            setReplyText('');
        }
    }, [])

    return (
        <div style={{ border: "0.5px solid black" }}>
            <Box sx={{ mb: 2 }}>
                <Typography variant="caption">By: {comment.user}</Typography>
                <Typography variant="body1">{comment.text}</Typography>
                {comment.children.length > 0 && (
                    <Button onClick={toggleExpanded}>
                        {isExpanded ? 'Hide Replies' : 'Show Replies'}
                    </Button>
                )}
                {isExpanded && comment.children.length > 0 && (
                    <List sx={{ pl: 4 }}>
                        {comment.children.map(child => (
                            <ListItem key={child.id} disablePadding>
                                <CommentComponent comment={child} onReply={onReply} />
                            </ListItem>
                        ))}
                    </List>
                )}
                <Box sx={{ mt: 1 }}>
                    <TextField
                        size="small"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write a reply..."
                    />
                    <Button onClick={handleReply}>Reply</Button>
                </Box>
            </Box>
        </div>
    );
});

export default CommentComponent;