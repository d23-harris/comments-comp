import React from 'react';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import CommentSystem from './components/comments/CommentSystem';

const theme = createTheme();

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
      <CommentSystem initialComments={initialComments} />
      </Container>
    </ThemeProvider>
  );
}

export default App;