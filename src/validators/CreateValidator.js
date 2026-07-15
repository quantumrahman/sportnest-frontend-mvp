import { error } from 'better-auth/api';
import z from 'zod';

const validationSchema = z.object({
    name: z.string().min(1, { error: 'Name is required.' }).trim(),
    facility_type: z.enum(
        [
            'Football Turf',
            'Cricket Turf',
            'Tennis Court',
            'Basketball Court',
            'Badminton Court',
            'Swimming Pool',
        ],
        { error: 'Type is required.' }
    ),
    location: z.string().min(1, { error: 'Location is required.' }).trim(),
    price_per_hour: z
        .string()
        .min(0, { error: 'Price per hour is required.' })
        .trim()
        .transform((value) => Number(value))
        .pipe(
            z
                .number({ error: 'Price per hour must be a valid number' })
                .int({ error: 'Price per hour must be an integer value' })
                .min(1, { error: 'Price per hour must be at least 1' })
        ),
    capacity: z
        .string()
        .trim()
        .min(1, { error: 'Capacity is required' })
        .transform((value) => Number(value))
        .pipe(
            z
                .number({ error: 'Capacity must be a valid number' })
                .int({ error: 'Capacity must be an integer value' })
                .min(1, { error: 'Capacity must be at least 1' })
        ),
    available_slots: z
        .string()
        .min(1, { error: 'Available slots are required.' })
        .trim(),
    image: z
        .string()
        .min(1, { error: 'Thumbnail is required.' })
        .pipe(z.url({ error: 'Please provide a valid url.' })),
    description: z
        .string()
        .min(1, { error: 'Description is required.' })
        .max(500, { error: 'Description must be under the 500 characters.' }),
});

export default validationSchema;
