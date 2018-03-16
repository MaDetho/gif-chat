import { User } from "./user";
import { Webm } from "./tenorGifs";

export interface Message {
    msg: string;
    webm: Webm;
    user: User;
    append: boolean;
}