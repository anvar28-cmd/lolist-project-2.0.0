import Button from "../Button/Button";
import Card from "../Card/Card";

function BuildsCard({build, onTitleChange, onSubmit, readOnly}) {
  const ITEMS_COUNT = 6;
  const SPELLS_COUNT = 2;
  const ParentTag = readOnly ? 'div' : 'form';

  return (
    <ParentTag className="builds-card" onSubmit={onSubmit}>
      <input 
        className="builds-card__name" 
        type="text"
        name="description"
        defaultValue={build.title}
        placeholder="Group name"
        required
        onChange={onTitleChange}
        readOnly={readOnly}
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

      {!readOnly && <Button type="submit">Submit</Button>}
    </ParentTag>
  );
}

export default BuildsCard;
