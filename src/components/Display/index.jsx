const Display = ({ isLogged, setIsLogged }) => {
  if (isLogged) {
    return <p>Login efetuado com sucesso!</p>;
  } else {
    setIsLogged(false);
  }
  return <p>Não autenticado! Faça o Login para continuar</p>;
};

export default Display;
