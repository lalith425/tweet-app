import { Comments } from "./Comments";

export interface Tweet{
     tweetId :string;
    userId: string;
     tweetPost: string;
     likedUsers : Array<string>;
     commentsPosted: Array<Comments>;
     createdDate: Date;
     updatedDate: Date;
}