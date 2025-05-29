import { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-6 sm:py-8 px-3 sm:px-4 transition-all duration-300 bg-gradient-guizzle">
      <div className="relative w-full max-w-5xl mx-auto z-10 fade-in ">
        {children}
        <div
          aria-hidden="true"
          className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#6f8be1]/20 to-transparent z-0 pointer-events-none"
        ></div>
      </div>
    </main>
  );
}
