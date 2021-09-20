import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState } from "react";
import Display from "../Display";

import "./style.css";

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLogged, setIsLogged] = useState();

  const onSubmitFunction = (user) => {
    axios
      .post("https://kenzieshop.herokuapp.com/sessions/", { ...user })
      .then(() => {
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLogged(false);
      });
  };

  return (
    <>
      <div className="mainDiv">
        <h3>Login</h3>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <input placeholder="Username" {...register("username")} />
          {errors.username?.message}
          <br />
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message}
          <br />
          <button type="submit">Enviar!</button>
        </form>
        <Display isLogged={isLogged} setIsLogged={setIsLogged}></Display>
      </div>
    </>
  );
};

export default Login;
