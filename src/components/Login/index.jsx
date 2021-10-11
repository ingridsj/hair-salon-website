import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStore } from "../../hooks/useStore";

import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import background from "../../assets/background-login.png";

import "./index.scss";

function initialState() {
  return { user: "", password: "" };
}

function userLogin({ user, password }) {
  if (user === "admin" && password === "admin") {
    return { token: "1234" };
  }
  return { error: "Usuário ou senha inválido" };
}

export function Login() {
  const [values, setValues] = useState(initialState);
  const [show, setShow] = useState(false);

  const { setToken } = useStore();

  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token } = userLogin(values);

    if (token) {
      setToken(token);
      return history.push("/dashboard");
    }

    setValues(initialState);
  }

  function handleClick(event) {
    event.preventDefault();
    setShow(!show);
  }

  return (
    <div className="user-login">
      <div className="user-login-left">
        <img src={background} alt="" />
      </div>

      <div className="user-login-right">
        <div className="user-login-form-wrapper">
          <div className="title">
            <h1>Seja bem-vindo(a)!</h1>
            <p>Faça login com os dados fornecidos no cadastro.</p>
          </div>

          <button className="user-login-button-app">
            <i>
              <FcGoogle />
            </i>
            <span>Entrar com o Google</span>
          </button>

          <button className="user-login-button-app">
            <i>
              <FaFacebookF />
            </i>
            <span>Entrar com o Facebook</span>
          </button>

          <span className="or">ou</span>

          <form autoComplete="nope" onSubmit={onSubmit}>
            <div className="user-login__form-control">
              <MdEmail />
              <input
                id="user"
                type="text"
                placeholder="E-mail"
                name="user"
                autoComplete="off"
                onChange={onChange}
                value={values.user}
              />
            </div>

            <div className="user-login__form-control">
              <MdLock />
              <input
                id="password"
                type={show ? "text" : "password"}
                placeholder="Senha"
                name="password"
                onChange={onChange}
                value={values.password}
              />
              <div className="login-eye">
                {show ? (
                  <HiEye size={20} onClick={handleClick} />
                ) : (
                  <HiEyeOff size={20} onClick={handleClick} />
                )}
              </div>
            </div>

            <span>
              <a href="/">Esqueceu a sua senha?</a>
            </span>

            <button
              type="submit"
              className="user-login__submit-button"
              rounded="true"
            >
              Entrar
            </button>
            <span>
              Não tem uma conta? <a href="/">Cadastrar</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
