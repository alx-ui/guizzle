import { ContentGrid, Footer, Header, PageContainer } from '@/components/layout';
import { Background } from '@/components/ui';

export default function Home() {
  return (
    <PageContainer>
      <Background />
      <Header />
      <ContentGrid />
      <Footer />
    </PageContainer>
  );
}
