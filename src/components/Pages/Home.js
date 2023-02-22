import { Link } from "react-router-dom"

const Home = () => {
return ( 
    <div>
<h1>Главная страница</h1>
<button className="btn">
<Link to="/catalog">Перейти в Каталог</Link>
</button>
      </div>
)
}

export {
    Home
}