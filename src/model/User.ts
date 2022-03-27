export class User {
    constructor(
        private id: string,
        private firstName: string,
        private lastName: string,
        private participation: number,

    ) { }

    static toUserModel(user: any): User {
        return new User(user.id, user.firstName, user.lastName, user.participation);
    }
}
export interface UserInputDTO {
    firstName: string;
    lastName: string;
    participation: number;

}
export interface UserInsertDTO extends UserInputDTO {
    id: string;
}
