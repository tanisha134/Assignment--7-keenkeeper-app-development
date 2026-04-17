import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-200 gap-4">
      <h1 className="text-8xl font-bold text-[#244D3F]">404</h1>

      <p className="text-5xl font-bold text-gray-600 text-center">
        The page you are currently looking for <br /> does not exist.
        </p>

      <Link href="/">
        <button className="btn btn-primary mt-4">
          Go back home
        </button>
      </Link>
    </div>
  );
}