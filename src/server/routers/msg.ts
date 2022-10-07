import { z } from "zod";
import { t } from "../trpc";

export const msgRouter = t.router({
  list: t.procedure.query(async ({ ctx }) => {
    let messages = await ctx.msg.find().toArray();

    return messages;
  }),

  add: t.procedure
    .input(
      z.object({
        text: z.string(),
        createdAt: z.date(),
        creator: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const result = await ctx.msg.insertOne(input);

      return {
        _id: result.insertedId,
        text: input.text,
        createdAt: input.createdAt,
        creator: input.creator,
      };
    }),
});
