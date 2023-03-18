import { APIRoute, AppRoute } from "../../../const";
import Form from "../../ui/Form/Form";
import TextField from "../../ui/TextField/TextField";
import { Link, Navigate } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { useState } from "react";
import { createAPI } from "../../../services/api";
import { saveToken } from "../../../services/token";
import { saveUser } from "../../../services/user";

function LoginPage({ isAuth, setIsAuth }) {
  const [error, setError] = useState();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const api = createAPI();

    api
      .post(APIRoute.LOGIN, {
        username: evt.target.username.value,
        password: evt.target.password.value,
      })
      .then(({ data }) => {
        saveToken(data.token);
        saveUser(data);
        setIsAuth(true);
      })
      .catch((error) => setError(error));
  };

  return !isAuth ? (
    <main className="login-page page__main login-page--feature">
      <Form onSubmit={handleFormSubmit}>
        <h1 className="login-page__title">LoLiST</h1>
        <TextField
          id="username"
          label="Username"
          name="username"
          type="text"
          placeholder="user123"
          pattern="[A-Za-z\d\.]{4,25}"
          title="Username must be between 4 and 25 characters in length and contain only letters, numbers and periods"
          required
        />

        <TextField
          id="password"
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          minlength="5"
          title="Password must contain at least 5 characters"
          required
        />

        <p className="login-page__switch">
          Don't have an account?
          <Link to={AppRoute.SIGNUP} style={{ color: "white" }}>
            {" "}
            Sign up
          </Link>
        </p>
        {error && (
          <p className="login-page__incorrect">
            Incorrect username or password
          </p>
        )}

        <Button fullWidth type="submit">
          Login
        </Button>
      </Form>
    </main>
  ) : (
    <Navigate to={AppRoute.INDEX} />
  );
}

export default LoginPage;
