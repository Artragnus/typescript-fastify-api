import knex, { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("usuarios", (table) => {
    table.uuid("id").primary(),
      table.text("nome").notNullable(),
      table.text("email").unique().notNullable();
    table.text("senha").notNullable();
  });

  await knex.schema.createTable("categorias", (table) => {
    table.increments("id").primary(), table.text("descricao");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("usuarios");
  await knex.schema.dropTable("categorias");
}
