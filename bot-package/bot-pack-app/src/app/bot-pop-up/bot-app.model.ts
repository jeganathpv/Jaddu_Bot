export enum UserType{
    Bot,
    User
}

export interface Message{
    User : UserType,
    MessageTime: Date,
    MessageText: String
}