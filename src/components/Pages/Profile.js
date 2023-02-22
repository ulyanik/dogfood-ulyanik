import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";


export const Profile = () => {
    const { user, setUser } = useContext(Context);
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();
        setUser(null);
        localStorage.removeItem("user");
        navigate("/home");
    }
    return <div>
        <h1>Личный кабинет</h1>
        <p>Привет, {user.name}</p>
        <button className="btn" onClick={logOut}>Выйти из аккаунта</button>
    </div>
}
