import z from 'zod';

const validationSchema = z.object({
    email: z.email({ error: 'Email is required.' }).trim().toLowerCase(),
    password: z.string().min(1, { error: 'Password is required.' }),
});

export default validationSchema;
