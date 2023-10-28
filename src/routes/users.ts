import { FastifyInstance } from "fastify";
import { knex } from "../lib/database";
import { z } from "zod";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export async function usersRoutes(router: FastifyInstance) {
  router.post("/", async (req, res) => {
    const createUserSchema = z.object({
      id: z.string().default(randomUUID()),
      nome: z.string(),
      email: z.string().email(),
      senha: z.string(),
    });

    const { nome, email, senha } = createUserSchema.parse(req.body);

    try {
      const validateUniqueEmail = await knex("usuarios").where({ email });

      const hashedPassword = await bcrypt.hash(senha, 10);

      return res.send(randomUUID());
    } catch (error) {
      return res.send(error);
    }
  });
}
