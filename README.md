# Nested Comments Component

A component for handling nested comments/replies

## Running the application 
1. npm install 
2. npm run start


## Approach
1. CommentSystem(Parent)
    - Manages global comment state
    - Handles comment addition via recursive updates
    - Props: none (top-level component)

2. CommentsView(Child)
    - Handles individual comment rendering and replies
    - Local state for UI interactions
    - Props: comment object and onAddReply callback


## Additional 
- use npm run generate-comments. 
    - to improve loading of data when depth > 10 with > 3 similar lever depth comments
    
