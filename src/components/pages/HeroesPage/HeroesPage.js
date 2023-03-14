import Board from "../../ui/Board/Board";
import HeroesList from "../../ui/HeroesList/HeroesList";

function HeroesPage() {
  return (
    <main className="heroes-page page__main container">
      <Board title="Champions" background="rgba(50, 68, 41, 38%)">
        <HeroesList background="rgba(51, 194, 13, 33%)" />
      </Board>
    </main>
  );
}

export default HeroesPage;
