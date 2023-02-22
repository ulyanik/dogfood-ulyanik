import { useState } from "react"
import "./card.css"

const Card = ({el}) => {

const [like, setLike] = useState(true)

return (
        <div className="card-deck">
          <div className="card">
            <img src={el.pictures} className="imgcard card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <p className="card-text">
                {el.price}
                {' '}
                Рублей
              </p>
              <span className="card__hard">
                    {like ?  <i onClick={() => setLike(!true)} className="fa-solid fa-heart"></i>
                :     <i onClick={() => setLike(true)} className="fa-regular fa-heart"></i>
                }
                </span>
            </div>
          </div>
        </div>
    )
}

export {
    Card
}