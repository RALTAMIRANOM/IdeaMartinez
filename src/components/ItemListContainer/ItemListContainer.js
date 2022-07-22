import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <nav className="ItemListContainer">
            <h1>
                {greeting}
            </h1>
        </nav>
    )
}

export default ItemListContainer;