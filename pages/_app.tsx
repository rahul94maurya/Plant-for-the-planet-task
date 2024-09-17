import Layout from '@/components/Layout';
import { getAuthStatus } from '@/lib/utility/localStorage';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticate = getAuthStatus();
    if (!isAuthenticate && router.pathname === '/signup') {
      router.replace('/signup');
    } else if (!isAuthenticate && router.pathname !== '/login') {
      router.replace('/login');
    } else if (
      (isAuthenticate && router.pathname === '/login') ||
      (isAuthenticate && router.pathname === '/signup')
    ) {
      router.replace('/');
    }
  }, [router]);

  // Exclude login and signup routes
  if (router.pathname === '/login' || router.pathname === '/signup') {
    return <Component {...pageProps} />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
