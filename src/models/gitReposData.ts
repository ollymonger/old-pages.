export interface GitReposData {
    id: number;
    name: string;
    description: string;
    license: { key: string, name: string },
    full_name: string;
    owner: {
        login: string;
        id: number;
        avatar_url: string;
    },
    openIssues: number;
    stars: number;
    url: string;       
}