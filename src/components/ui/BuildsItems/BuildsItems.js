function BuildsItems({ build }) {
  return (
    <figure className="builds-item">
      <figcaption className="builds-item__title">{build.title}</figcaption>
      <div className="builds-item__inner">
        <ol className="builds-item__cards">
          {build.items.map(( item) => (
            <li className="builds-item__card">
              <img
                className="builds-item__img"
                src={item.image}
                alt={item.name}
              />
              <p className="builds-item__text">{item.name}</p>
            </li>
          ))}
        </ol>
        <ol className="builds-item__cards">
          {build.spells.map(( spell) => (
            <li  className="builds-item__card">
              <img
                className="builds-item__img"
                src={spell.image}
                alt={spell.name}
              />
              <p className="builds-item__name">{spell.name}</p>
            </li>
          ))}
        </ol>
      </div>
    </figure>
  );
}

export default BuildsItems;
