import './itemDetailContainer.css'
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [data,setData] = useState([])
    const {id} = useParams() 
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((res) => (res.json()))
        .then((data) => setData(data.drinks.find((item) => item.id === parseInt(id))))  
    },[])

    console.log(data);

    return(
        <div>
            {data.map((data) => (
                <ItemDetail data={data} key={data.id} />
            ))}
        </div>
    )
}

export default ItemDetailContainer;

