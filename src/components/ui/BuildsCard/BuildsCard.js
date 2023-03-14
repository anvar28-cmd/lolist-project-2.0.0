import Button from "../Button/Button";
import Card from "../Card/Card";

function BuildsCard({
  build,
  onTitleChange,
  onSubmit,
  readOnly,
  heroName,
  onReset,
  className,
  background
}) {
  document.documentElement.style.setProperty("--form-background", background);
  const ITEMS_COUNT = 6;
  const SPELLS_COUNT = 2;
  const ParentTag = readOnly ? "div" : "form";

  return (
    <ParentTag className={`builds-card ${className}`} onSubmit={onSubmit} onReset={onReset}>
      {heroName && <h3 className="builds-card__hero">{heroName}</h3>}
      <input
        className="builds-card__name"
        type="text"
        name="description"
        defaultValue={build.title}
        placeholder="Please, enter your build name here."
        required
        onChange={onTitleChange}
        readOnly={readOnly}
      />

      <div className="builds-card__list">
        {Array.from({ length: ITEMS_COUNT }, (_, key) => (
          <Card
            key={key}
            name={build.items[key]?.name ?? `Item ${key + 1}`}
            image={build.items[key]?.image}
          />
        ))}
      </div>

      <div className="builds-card__list">
        {Array.from({ length: SPELLS_COUNT }, (_, key) => (
          <Card
            key={key}
            name={build.spells[key]?.name ?? `Spell ${key + 1}`}
            image={build.spells[key]?.image}
          />
        ))}
      </div>

      {!readOnly && (
        <div className="builds-card__buttons">
          <Button type="reset">Clear</Button>
          <Button type="submit">Save</Button>
        </div>
      )}
    </ParentTag>
  );
}

export default BuildsCard;
