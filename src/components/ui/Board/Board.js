function Board({ title, children, background }) {
  document.documentElement.style.setProperty("--board-background", background);

  return (
    <section className="board">
      <h2 className="board__title">{title}</h2>

      {children}
    </section>
  );
}

export default Board;
