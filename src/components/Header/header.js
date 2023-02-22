import "./header.css";
import {Search} from "../Search/search";
import {useContext} from "react";
import {Context} from "../../Context";
import {Link} from "react-router-dom";

const Header = () => {

  const {user, setUser, setModalActive, product} = useContext(Context);

  const logIn = (e) => {
    e.preventDefault();
    setModalActive(prev => !prev);
  };
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    setUser("");
  };
  return (
    <header>
      <Link className="logo" to="/home"><h1>DogFood</h1></Link>
      <Search product={product}/>
      <nav className="menu">
        {user &&
          <Link style={{display: 'flex', gap: '10px', alignItems: 'center'}}
                to="/profile">
            <img style={{width: '50px'}}
                 src={user.avatar}
                 alt=""/>{user.name}
          </Link>}
        {!user && <a href="" onClick={logIn}>Войти</a>}
        {user && <a href="" onClick={logOut}>Выйти</a>}
      </nav>
    </header>
  );
};

export {
  Header
};
