import { User } from "./user";
import { Webm } from "./tenorGifs";

export interface OldMessage {
    created: Date;
    _id: string;
    _creator: User;
    msg: string;
    webm: Webm;
    __v: number;
}