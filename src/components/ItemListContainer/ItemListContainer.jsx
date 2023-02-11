import ItemList from "../ItemList/ItemList";
import { useState,useEffect } from "react";
import './itemListContainer.css'


const ItemListContainer = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
        .then((res) => (res.json()))
        .then((res) => setData(res.drinks))
    },[])

    return <ItemList data={data} /> 
}

export default ItemListContainer;