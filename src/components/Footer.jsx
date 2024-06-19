import './Footer.css';

export function Footer({ filters }){
    return (
        <footer className='footer'>
            <h3>My Shop footer</h3>
            {
                JSON.stringify(filters,null,2)
            }
        </footer>
    )
}