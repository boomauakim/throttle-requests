import { Hono } from "hono"
import { zValidator } from "@hono/zod-validator"
import { throttleSchema } from "./schema"

const app = new Hono()

app.get(
  "/",
  zValidator("query", throttleSchema, (result, c) => {
    if (!result.success) {
      return c.json({ error: result.error?.issues ?? [] })
    }
  }),
  async (c) => {
    const validated = c.req.valid("query")

    await new Promise((resolve) => setTimeout(resolve, +validated.ms))

    const response = await fetch(validated.url)

    return c.body(response.body)
  }
)

export default app
