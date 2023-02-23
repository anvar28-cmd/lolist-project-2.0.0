import Board from '../../ui/Board/Board';
import HeroesList from '../../ui/HeroesList/HeroesList';

function HeroesPage() {
  return (
    <main className="heroes-page page__main container">
      <Board title="Champions">
        <HeroesList />
      </Board>
    </main>
  );
}

export default HeroesPage;
