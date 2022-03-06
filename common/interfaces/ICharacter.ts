export interface ICharacter{
    id:number;
    name: string | null;
    description: string | null;
    modified: string;
    thumbnail: {
        path: string | null;
        extension: string | null;
    }
}
