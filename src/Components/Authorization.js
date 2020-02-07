import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Route } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Authorization = ({history}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isWrong, setIsWrong] = useState(false);

  const handleEnterLogin = event => {
    setLogin(event.target.value);
  };
  const handleEnterPassword = event => {
    setPassword(event.target.value);
  };

  const handleEnterPage = () => {
    const loginLS = localStorage.getItem("loginLS");
    const passwordLS = localStorage.getItem("passwordLS")
   if(loginLS==login && passwordLS==password){
     history.push("/mainPage");
   } else {
     setIsWrong(true);
   }
    
  }

  return (
    <Background>
      <AuthorizationBlock>
        <InputField
          label="Логин"
          value={login}
          onChange={handleEnterLogin}
          margin="dense"
          variant="outlined"
          fullWidth="false"
        />
        <InputField
          label="Пароль"
          value={password}
          onChange={handleEnterPassword}
          margin="dense"
          variant="outlined"
        />
        <Button onClick={handleEnterPage}>Войти</Button>
        {isWrong && <Error>Логин или пароль указаны неверно</Error>}
      </AuthorizationBlock>
    </Background>
  );
};
export default Authorization;

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom right, #352a80, #6a59de);
`;
const InputField = styled(TextField)`
  margin: 5px 20px;
`;

const AuthorizationBlock = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  background-color: white;
  border-radius: 3px;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
`;
 const Error = styled.div`
 font-family: "Roboto", "Helvetica", "Arial", sans-serif;
 font-size:18px;
 color: red;
 text-align: center;
 `;