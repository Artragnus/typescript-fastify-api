import { Knex } from "knex";

declare module "knex/module/tables" {
  export interface Tables {
    usuarios: {
      id: string;
      nome: string;
      email: string;
      senha: string;
    };

    categorias: {
      id: number;
      descricao: string;
    };
  }
}
