export interface GuideMetadata {
    name: string;
    title: string;
    description: string;
    slug: string;
    author: string;
}

export const AVAILABLE_GUIDES: GuideMetadata[] = [
    {
        name: "shard-farming",
        title: "Shard Farming",
        description: "Example guide",
        slug: "shard-farming",
        author: "Alexander Epolite",
    },
];
