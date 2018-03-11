import { User } from "./user";

export interface OldMessage {
    created: Date;
    _id: string;
    _creator: User;
    msg: string;
    __v: number;
}