import './productList.scss'
import ProductCard from '../productCard/ProductCard.jsx'

const ProductList = ({products, handleRemoveProduct}) => {
	
	return (
		<div className="product__list">
			{products.map((product, index) => (
				<ProductCard
					key={index}
					product={product}
					onDelete={() => handleRemoveProduct(index)}/>
			))}
		</div>
	)
}

export default ProductList