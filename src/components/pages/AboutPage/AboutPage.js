import gameImage from "../../../assets/img/about-img.jpg";
import gameEx from "../../../assets/img/about-ex.jpg";

function AboutPage() {
  return (
    <main className="about-page page__main container">
      <div className="about-page__container">
        <h1 className="about-page__title">What is LoLiST?</h1>
        <p className="about-page__text">
          LoLiST or League of Legend List:Item Builder. It is an add-on to the
          famous MOBA game called League of Legends.This site will offer variety
          of latest content, Including champions, Items and spells. This site
          will support user in every aspect of this game. It will help players
          to save their build in order to use that build against the specific
          enemy.
        </p>
        <img
          className="about-page__img"
          alt="gameplay"
          src={gameEx}
          width={1496}
          height={924}
        />
      </div>
      <div className="about-page__container">
        <img
          className="about-page__img"
          alt="gameplay"
          src={gameImage}
          width={1463}
          height={823}
        />
        <p className="about-page__text">
          LoList is a very easy to use. It will help player to create Items for
          their beloved champions. Here in picture you can see, there are 6
          slots of item and 2 slots of spells. User has to build them correctly
          in order to counter their enemy. Users can create their account and
          save their builds for their champions. They can also access champion's
          lore and stats. They can reference this build when they are in game.
        </p>
      </div>
    </main>
  );
}

export default AboutPage;
