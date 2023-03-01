import Button from "../Button/Button";
import Card from "../Card/Card";

function BuildsCard({build, onTitleChange, onSubmit}) {
  const ITEMS_COUNT = 6;
  const SPELLS_COUNT = 2;

  return (
    <form className="builds-card" onSubmit={onSubmit}>
      <input 
        className="builds-card__name" 
        type="text" 
        defaultValue={build.title}
        placeholder="Group name"
        required
        onChange={onTitleChange}
      />

      <div className="builds-card__list">
        {Array.from({length: ITEMS_COUNT}, (_, key) => (
          <Card
            key={key}
            name={build.items[key]?.name ?? `Item ${key + 1}`}
            image={build.items[key]?.image}
          />
        ))}
      </div>

      <div className="builds-card__list">
        {Array.from({length: SPELLS_COUNT}, (_, key) => (
          <Card
            key={key}
            name={build.spells[key]?.name ?? `Spell ${key + 1}`}
            image={build.spells[key]?.image}
          />
        ))}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}

export default BuildsCard;
