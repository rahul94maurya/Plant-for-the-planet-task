import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-2xl mb-5">404 - Page Not Found</h1>
        <Link href="/" className="text-lg">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
