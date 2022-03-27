import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase{

    async createTable(){
        await this.getConnection().raw(`
            create table users_cubo(
                id varchar(255) primary key,
                firstName varchar(255) not null,
                lastName varchar(255) not null,
                participation float
            );
        `)
        console.log("Tabela users_cubo criada com sucesso !");
    }

}

const createTableMigrations = new Migrations();

createTableMigrations.createTable();