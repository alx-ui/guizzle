'use client';

import { useEffect, useState } from 'react';

import { Loading } from '@/components/ui';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);

      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div
        className={`transition-all duration-700 ease-in-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
}
