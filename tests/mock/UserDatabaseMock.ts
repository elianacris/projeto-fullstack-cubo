import { User, UserInputDTO } from "../../src/model/User";
import { userMock, userMock2 } from "./userMock";

export class UserDataBaseMock{
    public async insertUser(user: UserInputDTO): Promise<string> {
        return "Usuário inserido na tabela com sucesso"
    }
    
    public async getAllUsers(): Promise<User[]> {
        return [userMock, userMock2]
    }
}