import { z } from "zod";

const envSchema = z.object({

    SHOPIFY_API_KEY: z.string(),
    COMPANY_NAME: z.string(),
    SITE_NAME: z.string(),
    SHOPIFY_STORE_DOMAIN: z.string(),
    SHOPIFY_REVALIDATION_TOKEN: z.string(),
})

envSchema.parse(process.env);

declare global {
    namespace NodeJS {
        interface ProcessEnv extends z.infer<typeof envSchema> {}
    }
}