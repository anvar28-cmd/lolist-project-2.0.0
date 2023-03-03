import Board from "../../ui/Board/Board";
import BuildsList from "../../ui/BuildsList/BuildsList";

function HeroesBuildsPage() {
  return (
    <main className="heroes-builds page__main container">
      <Board title="Hero's builds">
        <BuildsList />
      </Board>
    </main>
  );
}

export default HeroesBuildsPage;
