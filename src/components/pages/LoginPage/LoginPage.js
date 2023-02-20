import Box from '../../ui/Box/Box';
import Form from '../../ui/Form/Form';
import TextField from '../../ui/TextField/TextField';

function LoginPage() {
  return (
    <main className="login-page container">
      <Box title="Login">
        <Form>
          <TextField
            id="username"
            label="Username"
            name="username"
            type="text"
            placeholder="Username"
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
        </Form>
      </Box>
    </main>
  );
}

export default LoginPage;
