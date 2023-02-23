import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";

function NotFoundPage() {
  return (
    <main className="not-found container">
      <h2 className="not-found__subheader">By my calculations...</h2>
      <h1 className="not-found__header">404</h1>
      <p className="not-found__text">Hmm... let me fix that</p>
      <Link to={AppRoute.LOGIN} className="not-found__link button">
        Back, you dirty ape, back!
      </Link>
    </main>
  )
}

export default NotFoundPage;
