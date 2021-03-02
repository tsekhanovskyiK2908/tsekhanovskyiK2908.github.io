import { UserStory } from "../models/user-story";

export class StoryRepository {
    getStories():UserStory[] 
    {
        let stories: UserStory[] = [
            new UserStory(8,'Mary Smith','I had the best ever with my family', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa laborum beatae eligendi quas sed quo mollitia velit quae soluta libero quos neque expedita sit, perspiciatis est in dolorum pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa laborum beatae eligendi quas sed quo mollitia velit quae soluta libero quos neque expedita sit, perspiciatis est in dolorum pariatur!"),
            new UserStory(9,'David Barrow','Wow! My life is completely different now', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa laborum beatae eligendi quas sed quo mollitia velit quae soluta libero quos neque expedita sit, perspiciatis est in dolorum pariatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero ipsa laborum beatae eligendi quas sed quo mollitia velit quae soluta libero quos neque expedita sit, perspiciatis est in dolorum pariatur!")
        ];

        return stories;
    }
}