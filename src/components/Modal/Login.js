import React, {useContext, useState} from "react";
import {Context} from "../../Context";

export default ({change}) => {
  const {api, setModalActive, setToken} = useContext(Context);
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    const body = {
      email: inp1,
      password: inp2
    };
    api.signIn(body)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data.data));
        localStorage.setItem("token8", data.token);
        setToken(data.token);
        setInp1("");
        setInp2("");
        setModalActive(false);
      });
  };

  return <form onSubmit={sendForm}>
    <input
      type="email"
      placeholder="Введите вашу почту"
      value={inp1}
      required
      onChange={(e) => {
        setInp1(e.target.value);
      }}
    />
    <input
      type="password"
      placeholder="Пароль"
      value={inp2}
      onChange={(e) => {
        setInp2(e.target.value);
      }}
    />
    <button className="btn" type="submit">Войти</button>
    <button className="btn link" type="button" onClick={() => {
      change(prev => !prev);
    }}>Зарегистрироваться
    </button>
  </form>;
}
