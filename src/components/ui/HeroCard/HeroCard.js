import Card from "../Card/Card";

function HeroCard({hero}) {
  return (
    <div className="hero-card">
      <Card name={hero?.name} image={hero?.image}/>

      <div className="hero-card__inner">
        <h3 className="hero-card__title">{hero?.title}</h3>
        <p className="hero-card__blurb">{hero?.blurb}</p>
      </div>
    </div>
  );
}

export default HeroCard;
