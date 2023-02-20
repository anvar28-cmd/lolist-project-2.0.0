function Box({title, children}) {
  return (
    <section className="box">
      <h2 className="box__title">{title}</h2>

      {children}
    </section>
  );
}

export default Box;
