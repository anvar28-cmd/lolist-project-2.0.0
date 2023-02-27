function Card({name, image, children}) {
  return (
    <figure className="card">
      <figcaption 
        className="card__name" 
        title={name}
      >
        {name}
      </figcaption>

      <img 
        className="card__image" 
        src={image || ""}
        alt={name || ""}
      />

      {children && <dialog className="card__modal">{children}</dialog>}
    </figure>
  )
}

export default Card
