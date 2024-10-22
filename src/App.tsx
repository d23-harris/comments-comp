import React from 'react';
import { CssBaseline, Container, ThemeProvider, createTheme } from '@mui/material';
import CommentSystem from './components/comments/CommentSystem';

const theme = createTheme();



function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
      <CommentSystem />
      </Container>
    </ThemeProvider>
  );
}

export default App;