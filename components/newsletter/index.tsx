'use client';
import Link from 'next/link';
import { SubmitButton } from '@/components/shared';
import { useFormState } from 'react-dom';
import type { ZodIssue } from 'zod';
import { newsletterAction } from '@/actions';
const ErrorMessages = ({ errors }: { errors: string[] }) => {
  if (errors.length === 0) return null;
  const text = errors.join(', ');
  return (
    <span data-cy='error' className='peer text-red-600'>
      {text}
    </span>
  );
};
const findErrors = (fieldName: string, errors: ZodIssue[]) => {
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};
const SuccessMessages = ({ message }: { message: string | undefined }) => {
  if (!message) return null;
  return (
    <span data-cy='success' className='peer text-green-600'>
      {message}
    </span>
  );
};
export const Newsletter = () => {
  const [state, formAction] = useFormState(newsletterAction, { errors: [], msg: '' });
  const emailErrors = findErrors('email', state.errors);
  return (
    <div data-cy='newsletter' className='space-y-5 text-center'>
      <p className='text-xs font-semibold text-pink'>Newsletters</p>
      <h3>Stories and interviews</h3>
      <p>
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <form
        action={formAction}
        className='flex flex-col items-center justify-center gap-5'
      >
        <input
          className='rounded-lg px-4 py-2 text-black focus:outline-none mobileS:w-2/3 md:w-1/4'
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
        />
        <SuccessMessages message={state.msg} />
        <ErrorMessages errors={emailErrors} />
        <SubmitButton />
      </form>
      <p className='text-sm'>
        We care about your data in our{' '}
        <Link className='underline' href='/privacy-policy'>
          privacy policy
        </Link>
      </p>
    </div>
  );
};
