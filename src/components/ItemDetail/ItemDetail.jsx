

const ItemDetail = ({data}) => {

    return(
        <div className='itemContainer'>
            <h1>Nombre: {data.strDrink}</h1>
            <h2>Categoria: {data.strCategory}</h2>
            <h3>Alcohol: {data.strAlcoholic}</h3>
            <img className="img" src={data.strDrinkThumb} alt="cocktail"/>
            <br></br>
            <button>Ver más</button>
        </div>
    )
}

export default ItemDetail;