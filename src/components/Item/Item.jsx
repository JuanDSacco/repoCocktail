import './item.css'
import { Link } from 'react-router-dom';


const Item = ({data}) => {
    return(
        <div className='itemContainer'>
            <h1>Nombre: {data.strDrink}</h1>
            <h2>Categoria: {data.strCategory}</h2>
            <h3>Alcohol: {data.strAlcoholic}</h3>
            <img className="img" src={data.strDrinkThumb} alt="cocktail"/>
            <br></br>
            <Link to={`/item/${data.idDrink}`}><button>Ver más</button></Link>
        </div>
    )
}

export default Item;