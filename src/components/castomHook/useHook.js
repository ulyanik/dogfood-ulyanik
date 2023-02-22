import {useEffect, useState} from "react";
import {Api} from "../../Api";

export const useHook = () => {
  const [user, setUser] = useState({});
  const [modalActive, setModalActive] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token8"));
  const [api, setApi] = useState(new Api(token));

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("token8");
      setToken(null);
    }
  }, [user]);

  useEffect(() => {
    setApi(new Api(token));
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [token]);

  useEffect(() => {
    if (token) {
    }
  }, [api, token]);

  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api.getProducts()
      .then(res => res.json())
      .then(data => {
        setProduct(data.products);
        setFilteredProducts(data.products);
      });
  }, []);


  return {
    user,
    setUser,
    modalActive,
    setModalActive,
    token,
    setToken,
    api,
    setApi,
    product,
    setProduct,
    filteredProducts,
    setFilteredProducts
  };
};
