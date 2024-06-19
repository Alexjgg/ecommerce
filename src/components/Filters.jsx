import './Filters.css';
import { useState,useId } from 'react';
export function Filters({ onChange}) {
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const handleChangeMinPrice = (event)=>{
        setMinPrice(event.target.value);
        onChange(prevState =>({
        ... prevState,
        minPrice: event.target.value
    }))
    }

    const [maxPrice, setMaxPrice] = useState(0);
    const maxPriceFilterId = useId();
    const handleChangeMaxPrice = (event)=>{
        setMaxPrice(event.target.value);
        onChange(prevState =>({
        ... prevState,
        maxPrice: event.target.value
    }))
    }

    const categoryFilterId = useId();
    const handleChangeCategory = (event)=>{
        onChange(prevState =>({
            ... prevState,
            category: event.target.value
        }))
    }
    return(
        <section className="filters">
       <div>
            <div>
                <label htmlFor={minPriceFilterId}>MinPrecio</label>
                <input
                type="range"
                id={minPriceFilterId}
                min="1"
                max="5000"
                onChange={handleChangeMinPrice}
                style={{
                    appearance: 'none', // Remove default styles
                    width: '100%', // Full width for better control
                    height: '8px', // Height of the slider
                    background: '#ddd', // Background color
                    outline: 'none', // Remove outline
                    opacity: '0.7', // Transparency
                    transition: 'opacity .15s ease-in-out', // Smooth transition
                  }}
                />
                <spa>{minPrice}</spa>
            </div>
            <div>
                <label htmlFor={maxPriceFilterId}>MaxPrecio</label>
                <input
                type="range"
                id={maxPriceFilterId}
                min="0"
                max="5000"

                onChange={handleChangeMaxPrice}
                style={{
                    appearance: 'none', // Remove default styles
                    width: '100%', // Full width for better control
                    height: '8px', // Height of the slider
                    background: '#ddd', // Background color
                    outline: 'none', // Remove outline
                    opacity: '0.7', // Transparency
                    transition: 'opacity .15s ease-in-out', // Smooth transition
                  }}
                />
                <spa>{maxPrice}</spa>
            </div>
        </div> 
        <div>
            <label htmlFor={categoryFilterId} >Category</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Portatiles</option>
                <option value="smartphones">Mobiles</option>
                <option value="fragrances">Perfumes</option>
            </select>
        </div>
        </section>
    )
}