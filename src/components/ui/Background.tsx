import bgImage from '@/assets/bg.png';

export function Background() {
  return (
    <div
      className="fixed inset-0 bg-cover bg-top-right bg-no-repeat pointer-events-none"
      style={{
        backgroundImage: `url(${bgImage.src})`,
        backgroundAttachment: 'fixed',
        backgroundColor: '#f8d162', // fallback do gradiente
      }}
    />
  );
}
