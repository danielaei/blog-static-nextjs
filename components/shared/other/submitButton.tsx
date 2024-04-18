"use client";
import { useFormStatus } from "react-dom";
export const SubmitButton = () =>    {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="text-sm py-2 px-4 disabled:bg-white/50 disabled:cursor-wait" type="submit">
      Subscribe
    </button>
  );
};
