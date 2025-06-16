import './productList.scss'
import ProductCard from '../productCard/ProductCard.jsx'

const ProductList = ({products, handleRemoveProduct, onSelectProduct}) => {
	
	return (
		<div className="product__list">
			{products.map((product, index) => (
				<ProductCard
					key={index}
					product={product}
					onDelete={() => handleRemoveProduct(index)}
					onClick={() => onSelectProduct(product)}/>
			))}
		</div>
	)
}

export default ProductList