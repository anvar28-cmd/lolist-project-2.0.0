import { Link } from "react-router-dom";
import { AppRoute } from "../../../const";
import Button from "../../ui/Button/Button";
import Form from "../../ui/Form/Form";
import TextField from "../../ui/TextField/TextField";

function SignupPage() {
  return (
    <main className="signup-page">
      <Form>
        <TextField
          id="name"
          label="Name"
          name="name"
          type="text"
          placeholder="Name Surname"
          required
        />

        <TextField
          id="username"
          label="Username"
          name="username"
          type="text"
          placeholder="user123"
          required
        />

        <TextField
          id="password"
          label="Password"
          name="password"
          type="password"
          placeholder="********"
          required
        />

        <p>
          Already have an account?
          <Link to={AppRoute.LOGIN} style={{ color: 'white' }}> Login</Link>
        </p>

        <Button fullWidth type="submit">Sign up</Button>
      </Form>
    </main>
  );
}

export default SignupPage;
