export class UserStory {
    id: number;
    userName: string;
    caption: string;
    description: string;

    constructor(id: number, userName: string, caption: string, description: string) {
        this.id = id;
        this.userName = userName;
        this.caption = caption;
        this.description = description;
    }
}