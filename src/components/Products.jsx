import './Products.css';
import {AddToCartIcon} from './Icons.jsx'

export function Products({ products }){
    return (
        <main className='products'>
        <ul>
            { products.map(product => (
                <li key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <div>
                        <h3>{product.title}</h3>
                    </div>
                    <div>
                        <p>${product.price}</p>
                    </div>
                    <div>
                        <button>
                            <AddToCartIcon />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
        
        </main>
    )

}