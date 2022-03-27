import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";

export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "users_cubo";

  public async getAllUser(): Promise<User[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(UserDatabase.TABLE_NAME).finally(() => {
          BaseDatabase.destroyConnection();
        })

      const users = result.map((user) => {
        return User.toUserModel(user)
      })
      return users
    } catch (error) {
      console.log(error)
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async insertUser(
    id: string,
    firstName: string,
    lastName: string,
    participation: number,
  ): Promise<string> {
    try {
      await this.getConnection()
        .insert({
          id,
          firstName,
          lastName,
          participation
        })
        .into(UserDatabase.TABLE_NAME);

      return "Usuario inserido com sucesso";
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
