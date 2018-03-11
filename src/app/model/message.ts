import { User } from "./user";

export interface Message {
    msg: string;
    user: User;
    append: boolean;
}