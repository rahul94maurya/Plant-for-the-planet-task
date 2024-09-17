import { useRouter } from 'next/router';
import { getAuthStatus } from '@/lib/utility/localStorage';

export default function Home() {
  const router = useRouter();
  if (typeof localStorage !== 'undefined') {
    const isAuthenticate = getAuthStatus();
    if (!isAuthenticate) {
      router.replace('/login');
    }
  }

  return (
    <div
      className={`items-center justify-items-center gap-16  font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div>Welcome to the page</div>
          </div>
        </main>
      </div>
    </div>
  );
}
