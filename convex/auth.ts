import { MutationCtx, QueryCtx } from "./_generated/server";

export const verifyAuth = async (ctx: QueryCtx | MutationCtx) => {
  const identity = await ctx.auth.getUserIdentity();


  if (identity === null) {
    throw new Error("User not authenticated");
  }

  return identity
}