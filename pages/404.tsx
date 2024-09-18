import Link from 'next/link';
import { useRouter } from 'next/router';

function NotFound() {
  // const router = useRouter();

  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested could not be found.</p>
      <Link href="/">Go to Homepage</Link>
    </div>
  );
}

export default NotFound;
