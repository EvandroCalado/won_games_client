import Image from 'next/image';
import { FC } from 'react';
import { Heading } from '../Heading';

type Platform = 'windows' | 'linux' | 'mac';
type rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  platforms: Platform[];
  releaseDate: string;
  rating: rating;
  genres: string[];
};

export const GameDetails: FC<GameDetailsProps> = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres,
}) => {
  const platformIcons = {
    windows: '/img/windows.svg',
    linux: '/img/linux.svg',
    mac: '/img/apple.svg',
  };

  return (
    <div className="my-2">
      <Heading lineLeft color="white" className="max-md:hidden">
        Game Details
      </Heading>

      {/* content */}
      <div className="mt-2 grid grid-cols-2 gap-4 text-white md:grid-cols-3 xl:grid-cols-6">
        {/* block developer */}
        <div>
          <h3 className="text-sm font-light">developer</h3>
          <p className="font-bold">{developer}</p>
        </div>
        {/* block release */}
        <div>
          <h3 className="text-sm font-light">Release Date</h3>
          <p className="font-bold">
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }).format(new Date(releaseDate))}
          </p>
        </div>
        {/* block platforms */}
        <div>
          <h3 className="text-sm font-light">Platforms</h3>
          <div className="flex items-center gap-4">
            {platforms.map((platform) => (
              <Image
                key={platform}
                title={platform}
                src={platformIcons[platform]}
                alt={platform}
                width={18}
                height={18}
                priority
                sizes="( max-width: 768px ) 100vw, 50vw"
              />
            ))}
          </div>
        </div>
        {/* block publisher */}
        <div>
          <h3 className="text-sm font-light">Publisher</h3>
          <p className="font-bold">2k</p>
        </div>
        {/* block rating */}
        <div>
          <h3 className="text-sm font-light">Rating</h3>
          <p className="font-bold">
            {rating === 'BR0' ? 'FREE' : rating.replace('BR', '').concat('+')}
          </p>
        </div>
        {/* block genres */}
        <div>
          <h3 className="text-sm font-light">Genres</h3>
          <p className="font-bold">{genres.join(' / ')}</p>
        </div>
      </div>
    </div>
  );
};
