import {useContext} from "react";
import {Context} from "../../Context";
import {Card} from "../Card/card";

const Catalog = () => {

  const {filteredProducts} = useContext(Context);

  const provirka = localStorage.getItem("user");

  return (
    <>
      <h1>Каталог товаров</h1>
      <div className="container">
        {provirka ? filteredProducts?.map((el) => <Card key={el._id} el={el}/>)
          : <h1>Вам нужно авторизироваться чтобы увидеть каталог</h1>}
      </div>
    </>
  );
};

export {
  Catalog
};
