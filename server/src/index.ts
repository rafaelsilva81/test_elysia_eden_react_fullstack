import { cors } from "@elysiajs/cors";
import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => "Hi Elysia")
  .use(
    cors({
      origin: "*",
    })
  )
  .get("/id/:id", ({ params: { id } }) => id)
  .post("/mirror", ({ body }) => body, {
    body: t.Object({
      id: t.Number(),
      name: t.String(),
    }),
  })
  .listen(3000);

export type Server = typeof app;

console.log("Server listening on port 3000");
