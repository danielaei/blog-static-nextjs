import { z } from 'zod';
const invalid_type_error = 'Invalid type provided for this field';
const required_error = 'This field cannot be blank';
const emailValidation = z.object({
  email: z
    .string({ invalid_type_error, required_error })
    .email('Please provide a valid email')
    .min(1, 'Value is too short'),
});

export { emailValidation };
