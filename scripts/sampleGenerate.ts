// scripts/generateComments.ts
const fs = require('fs');
const path = require('path');

interface CommentItem {
    id: string;
    text: string;
    user: string;
    children: CommentItem[];
}

// Function to generate a unique ID
const generateId = (): string => {
    return Math.random().toString(36).substr(2, 9);
};

const generateRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to create a single comment
const createComment = (text: string, user: string, children: CommentItem[] = []): CommentItem => {
    return {
        id: generateId(),
        text,
        user,
        children
    };
};

// Function to build nested comments structure
const buildCommentStructure = (config: {
    depth: number;
    commentsPerLevel: number;
    userPrefix?: string;
}): CommentItem[] => {
    const { depth, commentsPerLevel, userPrefix = 'user' } = config;
    console.log("TCL: depth", depth)
    console.log("TCL: commentsPerLevel", commentsPerLevel)

    const buildLevel = (currentDepth: number): CommentItem[] => {
        if (currentDepth === 0) {
            return [];
        }

        const comments: CommentItem[] = [];

        for (let i = 0; i < commentsPerLevel; i++) {
            const comment = createComment(
                `This is a ${currentDepth === depth ? 'top' : 'nested'} level comment ${i + 1}`,
                `${userPrefix}-${generateId().substring(0, 3)}`,
                buildLevel(currentDepth - 1)
            );
            comments.push(comment);
        }

        return comments;
    };

    return buildLevel(depth);
};

// Generate and save comments
const generateSampleComments = () => {
    try {
        const comments = buildCommentStructure({
            depth: generateRandom(1, 6),
            commentsPerLevel: generateRandom(3,4)
        });

        const projectRoot = process.cwd();
        const outputPath = path.join(projectRoot, 'src', 'components', 'api', 'sample.json');

        const dirPath = path.dirname(outputPath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        // Write the file
        fs.writeFileSync(
            outputPath,
            JSON.stringify(comments, null, 2),
            'utf8'
        );

        console.log(`Comments successfully generated and saved to ${outputPath}`);
    } catch (error) {
        console.error('Error generating comments:', error);
        process.exit(1);
    }
};


// Execute the generator
generateSampleComments();