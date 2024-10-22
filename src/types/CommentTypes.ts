export interface Comment {
  id: string;
  text: string;
  user: string;
  children: Comment[];
}

export interface CommentProps {
  comment: Comment;
  onReply: (parentId: string, text: string) => void;
}

export interface CommentSystemProps {
  initialComments: Comment[];
}

