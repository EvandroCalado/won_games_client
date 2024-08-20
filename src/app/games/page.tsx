import { mock as mockSidebar } from '@/components/ExploreSidebar/mock';
import { mock as mockGames } from '@/components/GameCardSlider/mock';
import { Games } from '@/templates';

const GamesPage = () => {
  return <Games games={mockGames} filterItems={mockSidebar} />;
};

export default GamesPage;
