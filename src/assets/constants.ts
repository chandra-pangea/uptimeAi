// Image assets and URLs

// Achievement badge images
export const ACHIEVEMENT_IMAGES = {
    pullShark: 'https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png',
    yolo: 'https://github.githubassets.com/assets/yolo-default-be0bbff04951.png',
    quickdraw: 'https://github.githubassets.com/assets/quickdraw-default-39c6aec8ff89.png',
    arcticCodeVault: 'https://github.githubassets.com/assets/arctic-code-vault-contributor-default-df8d74122a06.png',
    galaxyBrain: 'https://github.githubassets.com/assets/galaxy-brain-default-b6c6f5f78f39.png',
    starstruck: 'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png',
};

// Organization avatars
export const ORG_AVATARS = {
    uptimeAI: 'https://avatars.githubusercontent.com/u/99610336?s=64&v=4',
    timescale: 'https://avatars.githubusercontent.com/u/467885?s=32&v=4',
};

// Language colors for repository cards
export const LANGUAGE_COLORS: { [key: string]: string } = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    'Jupyter Notebook': '#DA5B0B',
    Dart: '#00B4AB',
    Go: '#00ADD8',
    Ruby: '#701516',
    PHP: '#4F5D95',
    Shell: '#89e051',
    C: '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    Rust: '#dea584',
    Swift: '#F05138',
    Kotlin: '#A97BFF',
    Vue: '#41B883',
    SCSS: '#c6538c',
};

// GitHub color palette
export const GITHUB_COLORS = {
    // Text colors
    textPrimary: '#1f2328',
    textSecondary: '#656d76',
    textLink: '#0969da',
    textWhite: '#ffffff',

    // Background colors
    bgPrimary: '#ffffff',
    bgSecondary: '#f6f8fa',
    bgTertiary: '#f3f4f6',

    // Border colors
    borderDefault: '#d0d7de',
    borderMuted: '#e4e8ec',

    // Accent colors
    accentOrange: '#fd8c73',
    accentGreen: '#2da44e',
    accentPurple: '#8250df',
    accentBlue: '#0969da',

    // Contribution graph colors
    contributionL0: '#ebedf0',
    contributionL1: '#9be9a8',
    contributionL2: '#40c463',
    contributionL3: '#30a14e',
    contributionL4: '#216e39',

    // Status colors
    statusMerged: '#8250df',
    statusOpen: '#238636',
    statusClosed: '#cf222e',
};

export default {
    ACHIEVEMENT_IMAGES,
    ORG_AVATARS,
    LANGUAGE_COLORS,
    GITHUB_COLORS,
};
