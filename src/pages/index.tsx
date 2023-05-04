import { useRouter } from 'next/router'
import { useEffect } from 'react';

export default function Web() {
  const router = useRouter()

  // Temporary for dev purpose auto navigate to products/mobilephones on index page load
  useEffect(() => {
    router.replace('/products/all')
  }, [router]);

  return <></>;
}
