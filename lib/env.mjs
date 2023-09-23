// src/env.mjs
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().nonempty(),
    PROPELAUTH_VERIFIER_KEY: z.string().nonempty(),
    PROPELAUTH_REDIRECT_URI: z.string().url(),
    PROPELAUTH_API_KEY: z.string().nonempty(),
  },
  client: {
    NEXT_PUBLIC_AUTH_URL: z.string().url(),
  },
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    PROPELAUTH_VERIFIER_KEY: process.env.PROPELAUTH_VERIFIER_KEY,
    PROPELAUTH_REDIRECT_URI: process.env.PROPELAUTH_REDIRECT_URI,
    PROPELAUTH_API_KEY: process.env.PROPELAUTH_API_KEY,
    NEXT_PUBLIC_AUTH_URL: process.env.NEXT_PUBLIC_AUTH_URL,
  },
});
