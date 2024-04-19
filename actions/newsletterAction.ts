'use server';
import { emailValidation } from '@/validation';
export const newsletterAction = async (prevState: unknown, params: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 120));
  const validation = emailValidation.safeParse({
    email: params.get('email'),
  });
  if (validation.success) {
    return {
      errors: [],
      msg: 'Thank you for subscribing to our newsletter! 🎉',
    };
  } else {
    return {
      msg: '',
      errors: validation.error.issues,
    };
  }
};
