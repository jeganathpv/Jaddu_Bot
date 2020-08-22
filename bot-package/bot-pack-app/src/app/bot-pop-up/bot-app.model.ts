export enum UserType{
    Bot,
    User
}

export interface Message{
    User: UserType,
    MessageText: String,
}