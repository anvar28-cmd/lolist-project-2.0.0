function BuildsItem({build}) {
  return (
    <figure className="builds-item">
        <figcaption className="builds-item__name"></figcaption>
        <div className="builds-item__inner">
            <ol className="builds-item__cards">
                <li className="builds-item__card">
                    <img className="builds-item__img"/>
                    <p className="builds-item__text"></p>
                </li>
            </ol>
            <ol className="builds-item__cards">
                <li className="builds-item__card">
                    <img className="builds-item__img"/>
                    <p className="builds-item__text"></p>
                </li>
            </ol>
        </div>
    </figure>
  )
}

export default BuildsItem