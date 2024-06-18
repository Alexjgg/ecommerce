import './Filters.css';
import { useState } from 'react';
export function Filters({ onChange}) {
    const [minPrice, setMinPrice] = useState(0);

    const handleChangeMinPrice = (event)=>{
        setMinPrice(event.target.value);
        onChange(prevState =>({
        ... prevState,
        minPrice: event.target.value
    }))
    }
    const handleChangeCategory = (event)=>{
        onChange(prevState =>({
            ... prevState,
            category: event.target.value
        }))
    }
    return(
        <section className="filters">
        <div>
            <label htmlFor="price">Precio</label>
            <input
            type="range"
            id="price"
            min="0"
            max="5000"
            onChange={handleChangeMinPrice}
            />
            <spa>{minPrice}</spa>
        </div>
        <div>
            <label htmlFor="category" >Category</label>
            <select id="category" onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Portatiles</option>
                <option value="smartphones">Mobiles</option>
                <option value="fragrances">Perfumes</option>
            </select>
        </div>
        </section>
    )
}