import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [thing, setThing] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setThing(res.data);
                setLoaded(true);
            });
    },[]);
    
    const removeFromDom = productId => {
        setThing(thing.filter(product => product._id != productId));
    }
    
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList thing={thing} removeFromDom={removeFromDom}/>}
        </div>
    )
}