import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import Logo from "../../ui/Logo";
import SpinnerMini from "../../ui/SpinnerMini";
import "../../styles/index.css";
import { useLogin } from "./useLogin";
function LoginForm() {
  const [email, setEmail] = useState("anjali.vibhute2002@gmail.com");
  const [password, setPassword] = useState("test2023");
  const { login, isLoading } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();
    if ((!email, !password)) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Logo />
      <h3 className="center">Login to your account</h3>
      <div className="mt-2">
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            disabled={isLoading}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large" className="addCabin">
            {!isLoading ? "Login" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
      </div>
    </Form>
  );
}

export default LoginForm;
