import { UserBusiness } from "../src/business/UserBusiness";
import { IdGeneratorMock } from "./mock/IdGeneratorMock";
import { UserDataBaseMock } from "./mock/UserDatabaseMock";

const userBusinessMock = new UserBusiness(
    new UserDataBaseMock() as any,
    new IdGeneratorMock()
)

describe('Teste para inserir usuário na tabela', () => {
    test("Erro que deve retornar quando o nome está vazio", async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.createUser({
                firstName: "",
                lastName: "Santos",
                participation: 23
            })

        } catch (e) {
            expect(e.message).toEqual("To an incomplete field")
            expect(e.statusCode).toBe(422)
        }
    })
    test("Erro que deve retornar quando o sobrenome está vazio", async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.createUser({
                firstName: "Luna",
                lastName: "",
                participation: 23
            })
        } catch (e) {
            expect(e.message).toEqual("To an incomplete field")
            expect(e.statusCode).toBe(422)
        }
    })

    test("Erro que deve retornar quando a participação estiver vazia ou 0", async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.createUser({
                firstName: "Luna",
                lastName: "Santos",
                participation: 0
            })
        } catch (e) {
            expect(e.message).toEqual("To an incomplete field")
            expect(e.statusCode).toBe(422)
        }
    })

    test("Sucesso ao Inserir", async () => {
        expect.assertions(1)
        try {
            const user = await userBusinessMock.createUser({
                firstName: "Luna",
                lastName: "Santos",
                participation: 23
            })
            expect(user).toEqual("Usuário inserido na tabela com sucesso")
        } catch (e) {
            console.log(e)
        }
    })

})

describe("Buscar todos os usuários", () => {
    test("Buscar todos os usuários", async () => {
        expect.assertions(1)
        try {
            const users = await userBusinessMock.getUser()
            expect(users).toEqual([{
                id: "id_mockado_1",
                firstName: "Luli",
                lastName: "Santos",
                participation: 23
            }, {
                id: "id_mockado_2",
                firstName: "Joana",
                lastName: "Silva",
                participation: 33
            }])
        } catch (e) {
            console.log(e)
        }
    })
})