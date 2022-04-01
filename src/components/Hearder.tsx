interface GenreItemProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface HearderProps {
  selectedGenre: GenreItemProps;
}

export function Header( {selectedGenre} : HearderProps ) {
  return (
    <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>
  )
}