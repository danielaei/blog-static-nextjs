'use client';
import { useFormStatus } from 'react-dom';
export const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className='px-4 py-2 text-sm disabled:cursor-wait disabled:bg-white/50' type='submit'>
      Subscribe
    </button>
  );
};
