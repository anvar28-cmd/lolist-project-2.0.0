import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { APIRoute, AppRoute } from "../../../const";
import { createAPI } from "../../../services/api";
import { saveToken } from "../../../services/token";
import { saveUser } from "../../../services/user";
import Button from "../../ui/Button/Button";
import Form from "../../ui/Form/Form";
import TextField from "../../ui/TextField/TextField";

function SignupPage({ setIsAuth, isAuth }) {
  const [error, setError] = useState();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const api = createAPI();

    api
      .post(APIRoute.SIGNUP, {
        name: evt.target.name.value,
        username: evt.target.username.value,
        password: evt.target.password.value,
      })
      .then(({ data }) => {
        saveToken(data.token);
        saveUser(data);
        setIsAuth(true);
        toast.success(
          "Your account was created successfully. Welcome to LoLiST!",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      })
      .catch((error) => setError(error.response.data.error.message));
  };

  return !isAuth ? (
    <main className="signup-page page__main">
      <Form onSubmit={handleFormSubmit}>
        <h1 className="signup-page__title">LoLiST</h1>
        <TextField
          id="name"
          label="Name"
          name="name"
          type="text"
          placeholder="John Smith"
          pattern="[A-Za-z\s]{4,16}"
          title="Name must contain at least 4 letters(only)."
          required
        />

        <TextField
          id="username"
          label="Username"
          name="username"
          type="text"
          placeholder="user123"
          minlength="4"
          pattern="[A-Za-z\d\.]{4,12}"
          title="Username must be between 4 and 12 characters in length and contain only letters, numbers and period"
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

        <p>
          Already have an account?
          <Link to={AppRoute.LOGIN} style={{ color: "white" }}>
            {" "}
            Login
          </Link>
        </p>
        <Button fullWidth type="submit">
          Sign up
        </Button>
        {error && <p className="login-page__exist">{error}</p>}
      </Form>
    </main>
  ) : (
    <Navigate to={AppRoute.INDEX} />
  );
}

export default SignupPage;
