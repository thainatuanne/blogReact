export interface IPost {
    id: string | number;
    author: string;
    avatar: string;
    category: string;
    createdAt: string;
    description: string;
    image: string;
    title: string;
    children?: React.ReactNode;
}

