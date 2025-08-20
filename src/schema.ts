import { z } from "zod"

export const throttleSchema = z.object({
  ms: z.string().regex(/^\d+$/, "Must be a numeric string"),
  url: z.string().url(),
})
