import React, { useContext, useState } from "react";
import "./Modal.css";
import Signup from "./Signup";
import Login from "./Login";
import { Context } from "../../Context";

const Modal = () => {

   const { modalActive, setModalActive } = useContext(Context)

    const [auth, setAuth] = useState(true);
    let style = {
        display: modalActive && "flex",
    }
    return (
        <div className="modal_cont" style={style}>
            <div className="modal">
                <div className="modal_close" onClick={() => setModalActive(false)} />
                <h2>{auth ? "Войти" : "Зарегистрироваться"}</h2>
                {auth ? <Login
                    change={setAuth}
                /> : <Signup
                    change={setAuth}
                />}
            </div>
        </div>
    )
}

export {
    Modal
}