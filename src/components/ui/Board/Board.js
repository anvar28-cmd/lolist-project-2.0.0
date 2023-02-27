function Board({ title, children }) {
  return (
    <section className="board">
      <h2 className="board__title">{title}</h2>

      {children}
    </section>
  );
}

export default Board;
