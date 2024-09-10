import { mock as mockSidebar } from '@/components/ExploreSidebar/mock';
import { QUERY_GAMES } from '@/graphql/queries';
import { PreloadQuery } from '@/lib/client';
import { Games } from '@/templates';

const GamesPage = async () => {
  return (
    <PreloadQuery query={QUERY_GAMES}>
      <Games filterItems={mockSidebar} />
    </PreloadQuery>
  );
};

export default GamesPage;
