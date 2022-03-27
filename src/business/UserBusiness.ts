import { UserInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { FieldsToComplet } from "../error/FieldsToComplet";

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator
    ) { }

    async createUser(user: UserInputDTO) {
        const id = this.idGenerator.generate()
        if (!user.firstName || !user.lastName || !user.participation && user.participation !== 0) {
            throw new FieldsToComplet()
        }
    
        if (user.participation <= 0) {
            throw new Error('A participação não pode ser menor ou igual a 0')
        }

        const result = await this.userDatabase.insertUser(id, user.firstName, user.lastName, user.participation);

        return result
    }

    async getUser() {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getAllUser();

        return userFromDB

    }
}