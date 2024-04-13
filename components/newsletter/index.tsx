import Link from "next/link";
import React from "react";

export const Newsletter = () => {
  return (
    <div className="text-center space-y-5">
      <p className="text-xs font-semibold text-pink">Newlatters</p>
      <h3>Stories and interviews</h3>
      <p>
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <form className="flex justify-center gap-5 h-10">
        <input className="focus:outline-none rounded-lg py-2 px-4 w-1/4 text-black" type="email" placeholder="Enter your email" />
        <button className="text-sm py-2 px-4" type="submit">
          Subscribe
        </button>
      </form>
      <p className="text-sm">
        We care about your data in our{" "}
        <Link className="underline" href="/privacy-policy">privacy policy</Link>
      </p>
    </div>
  );
};
