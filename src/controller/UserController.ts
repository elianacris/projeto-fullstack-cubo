import { Request, Response } from "express";
import { UserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";

const userBusiness = new UserBusiness(
    new UserDatabase(),
    new IdGenerator()
);
export class UserController {
    async createUser(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                participation: req.body.participation,
            }

            const result = await userBusiness.createUser(input);

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getUsers(req: Request, res: Response) {

        try {

            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator
            );
            const result = await userBusiness.getUser();

            res.status(200).send(result);

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}