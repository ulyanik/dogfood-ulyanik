import React, {useContext, useState} from "react";
import "./search.css";
import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/xmark-solid.svg";
import {Context} from "../../Context";

const Search = ({product}) => {
    const {setFilteredProducts, filteredProducts} = useContext(Context)
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(product);
    const clearSearch = () => {
        updateText("");
        setSearchData(product);
    }
    const search = (e) => {
        updateText(e.target.value)
        let arr = product.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setFilteredProducts(arr);
    }
    return (
     <div className="search__">
     <input placeholder="Поиск..." value={text} onChange={search}/>
     <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg />}</button>
     {text && <div className="search_result">
     По запросу <b>{text}</b>&nbsp;
     {filteredProducts.length > 0 ? `найдено ${filteredProducts.length} товаров` : "не найдено ни одного товара"}
       </div>}
     </div>
    )
}

export {
    Search
}
