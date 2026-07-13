import z from 'zod';

const validationSchema = z.object({
    name: z.string().min(1, { error: 'Name is required.' }).trim(),
    image: z
        .string()
        .min(1, { error: 'Photo url is required.' })
        .pipe(z.url({ error: 'Please provide a valid url.' })),
    email: z
        .string()
        .min(1, { error: 'Email is required.' })
        .trim()
        .toLowerCase()
        .pipe(z.email({ error: 'Please provide a valid email.' })),
    password: z
        .string()
        .min(6, { error: 'Must be at least 6 characters.' })
        .regex(/[A-Z]/, { error: 'Must include an uppercase letter.' })
        .regex(/[a-z]/, { error: 'Must include a lowercase letter.' }),
});

export default validationSchema;
