import Item from "../Item/Item"
import ImageList from '@mui/material/ImageList';

const ItemList = ({products}) => {
    return (
        <ImageList cols={5}>
            {/* {productsComp} */}
            {products.map(prod => <Item key={prod.id} product={prod}/>)}
        </ImageList>
    )
}

export default ItemList