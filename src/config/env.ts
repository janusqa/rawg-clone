import { z } from 'zod';

const client = z.object({
    VITE_RAWGIO_API_KEY: z.string().min(1),
    VITE_RAWGIO_API_URL: z.string().url(),
});

const processEnv: Record<keyof z.infer<typeof client>, string | undefined> = {
    VITE_RAWGIO_API_KEY: import.meta.env.VITE_RAWGIO_API_KEY,
    VITE_RAWGIO_API_URL: import.meta.env.VITE_RAWGIO_API_URL,
};

const parsed = client.safeParse(processEnv);

if (parsed.success === false) {
    console.error(
        'Invalid environment variables:',
        parsed.error.flatten().fieldErrors
    );
    throw new Error('Invalid environment variables');
}

const env = new Proxy(parsed.data, {
    get(target, prop) {
        if (typeof prop !== 'string') return undefined;
        return target[prop as keyof typeof target];
    },
});

export { env };
